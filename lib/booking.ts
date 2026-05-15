import { personalInfo } from "@/data/personal";

export const MEETING_DURATION_MIN = 30;
export const TIMEZONE_LABEL = "PKT (UTC+5)";

export const TIME_SLOTS = [
  "10:00",
  "11:00",
  "14:00",
  "16:00",
  "17:00",
  "18:00",
] as const;

export type TimeSlot = (typeof TIME_SLOTS)[number];

export type BookingPayload = {
  date: string;
  time: TimeSlot;
  name: string;
  email: string;
  message?: string;
};

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function toUtcStamp(d: Date) {
  return (
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T` +
    `${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`
  );
}

function escapeIcs(s: string) {
  return s.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

export function buildSlotDate(date: string, time: TimeSlot): Date {
  // date: "YYYY-MM-DD" in PKT (UTC+5)
  // time: "HH:MM" in PKT (UTC+5)
  // Convert PKT to UTC by subtracting 5 hours
  const [hh, mm] = time.split(":").map(Number);
  return new Date(`${date}T${pad(hh)}:${pad(mm)}:00+05:00`);
}

export function buildIcs(payload: BookingPayload): string {
  const start = buildSlotDate(payload.date, payload.time);
  const end = new Date(start.getTime() + MEETING_DURATION_MIN * 60 * 1000);
  const uid = `${start.getTime()}-${payload.email.replace(/[^a-z0-9]/gi, "")}@aqeel-portfolio`;
  const stamp = toUtcStamp(new Date());

  const description =
    `Discovery call with ${personalInfo.name} (${personalInfo.title}).\n` +
    (payload.message ? `\nNotes: ${payload.message}\n` : "") +
    `\nGuest: ${payload.name} <${payload.email}>` +
    `\nHost: ${personalInfo.name} <${personalInfo.email}>` +
    `\nPlatform: Google Meet link will be shared in the confirmation email.`;

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Aqeel Ahmad Portfolio//Booking//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${toUtcStamp(start)}`,
    `DTEND:${toUtcStamp(end)}`,
    `SUMMARY:${escapeIcs(`Discovery Call — ${payload.name} ↔ ${personalInfo.name}`)}`,
    `DESCRIPTION:${escapeIcs(description)}`,
    `ORGANIZER;CN=${escapeIcs(personalInfo.name)}:mailto:${personalInfo.email}`,
    `ATTENDEE;CN=${escapeIcs(payload.name)};RSVP=TRUE:mailto:${payload.email}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "BEGIN:VALARM",
    "TRIGGER:-PT15M",
    "ACTION:DISPLAY",
    `DESCRIPTION:Reminder — Discovery call with ${personalInfo.name}`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function downloadIcs(filename: string, ics: string) {
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename.endsWith(".ics") ? filename : `${filename}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function formatHumanSlot(payload: BookingPayload): string {
  const start = buildSlotDate(payload.date, payload.time);
  const fmt = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Karachi",
    timeZoneName: "short",
  });
  return fmt.format(start);
}

export function bookingMailto(payload: BookingPayload): string {
  const subject = `Discovery Call — ${payload.name} — ${formatHumanSlot(payload)}`;
  const body = [
    `Hi ${personalInfo.name.split(" ")[0]},`,
    "",
    `I'd like to book a ${MEETING_DURATION_MIN}-minute discovery call.`,
    "",
    `When (PKT): ${formatHumanSlot(payload)}`,
    `Duration: ${MEETING_DURATION_MIN} minutes`,
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.message ? `Notes: ${payload.message}` : "",
    "",
    "I've attached a calendar invite (.ics) for the slot.",
    "If the slot doesn't work on your end, suggest an alternative and I'll re-confirm.",
    "",
    "Thanks!",
  ]
    .filter((l) => l !== undefined)
    .join("\n");

  return `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    body
  )}`;
}

export function getNextWeekdays(count: number, fromDate = new Date()): { iso: string; label: string }[] {
  const out: { iso: string; label: string }[] = [];
  const d = new Date(fromDate);
  d.setDate(d.getDate() + 1); // start tomorrow
  while (out.length < count) {
    const day = d.getDay();
    if (day !== 0 && day !== 6) {
      const iso = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
      const label = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      }).format(d);
      out.push({ iso, label });
    }
    d.setDate(d.getDate() + 1);
  }
  return out;
}

export function whatsappCallLink(countryCode: string, phone: string): string {
  const digits = `${countryCode}${phone}`.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(
    "Hi Aqeel — I'd like to hop on a quick call. Tap the call icon at the top of this chat when you're free."
  )}`;
}
