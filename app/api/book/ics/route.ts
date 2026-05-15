import { NextResponse } from "next/server";
import { buildIcs, TIME_SLOTS, type TimeSlot } from "@/lib/booking";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date") ?? "";
  const time = searchParams.get("time") ?? "";
  const name = searchParams.get("name") ?? "";
  const email = searchParams.get("email") ?? "";

  if (!date || !time || !name || !email) {
    return new NextResponse("Missing required query params: date, time, name, email", {
      status: 400,
    });
  }

  if (!(TIME_SLOTS as readonly string[]).includes(time)) {
    return new NextResponse("Invalid time slot", { status: 400 });
  }

  const ics = buildIcs({
    date,
    time: time as TimeSlot,
    name,
    email,
  });

  return new NextResponse(ics, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="discovery-call-${date}.ics"`,
      "Cache-Control": "no-store",
    },
  });
}
