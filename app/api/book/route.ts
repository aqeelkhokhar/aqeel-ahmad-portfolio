import { NextResponse } from "next/server";
import { personalInfo } from "@/data/personal";
import { buildIcs, formatHumanSlot, type BookingPayload } from "@/lib/booking";

export const runtime = "nodejs";

type Body = BookingPayload & { ics?: string };

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!body?.date || !body?.time || !body?.name || !body?.email) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const ics = body.ics ?? buildIcs(body);
  const human = formatHumanSlot(body);

  // Optional: send email via Resend if RESEND_API_KEY is configured at deploy time.
  // Without the key, this route still returns ok:true so the client UX continues
  // (mailto fallback already opens the user's email app with the booking pre-filled).
  const resendKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.RESEND_FROM_EMAIL || "Aqeel Portfolio <onboarding@resend.dev>";

  if (resendKey) {
    try {
      const html = `
        <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 560px;">
          <h2 style="color:#1e3a8a;margin:0 0 12px">New discovery-call booking</h2>
          <p><strong>When:</strong> ${human}</p>
          <p><strong>Name:</strong> ${body.name}<br/>
             <strong>Email:</strong> ${body.email}</p>
          ${body.message ? `<p><strong>Notes:</strong><br/>${body.message.replace(/\n/g, "<br/>")}</p>` : ""}
          <p style="color:#64748b;font-size:13px;margin-top:24px">
            A .ics invite is attached. Reply to ${body.email} to confirm or propose another slot.
          </p>
        </div>
      `;
      const icsBase64 = Buffer.from(ics, "utf8").toString("base64");

      // Send to Aqeel
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [personalInfo.email],
          reply_to: body.email,
          subject: `📅 Discovery Call · ${body.name} · ${human}`,
          html,
          attachments: [
            {
              filename: `discovery-call-${body.date}.ics`,
              content: icsBase64,
            },
          ],
        }),
      }).catch(() => null);

      // Send confirmation to the guest
      const guestHtml = `
        <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 560px;">
          <h2 style="color:#1e3a8a;margin:0 0 12px">Your booking with ${personalInfo.name} is in 🎉</h2>
          <p><strong>When:</strong> ${human}</p>
          <p>${personalInfo.name.split(" ")[0]} will confirm shortly with a video-call link. A calendar invite (.ics) is attached, add it to your calendar to lock in the time.</p>
          <p>If you need to reschedule, just reply to this email.</p>
          <p style="color:#64748b;font-size:13px;margin-top:24px">Cheers,<br/>${personalInfo.name}<br/>${personalInfo.title}</p>
        </div>
      `;
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [body.email],
          reply_to: personalInfo.email,
          subject: `Confirmed · Discovery call with ${personalInfo.name} (${human})`,
          html: guestHtml,
          attachments: [
            {
              filename: `discovery-call-${body.date}.ics`,
              content: icsBase64,
            },
          ],
        }),
      }).catch(() => null);

      return NextResponse.json({ ok: true, emailed: true });
    } catch (e) {
      // Soft-fail. Client side mailto fallback already kicked in.
      console.error("Booking email failed:", e);
      return NextResponse.json({ ok: true, emailed: false });
    }
  }

  return NextResponse.json({ ok: true, emailed: false, fallback: "mailto" });
}
