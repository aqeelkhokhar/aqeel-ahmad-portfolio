"use client";

import { useState, useMemo } from "react";
import {
  CalendarCheck,
  Clock,
  CheckCircle2,
  Loader2,
  Mail,
  Calendar as CalendarIcon,
  ExternalLink,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/data/personal";
import {
  TIME_SLOTS,
  type TimeSlot,
  type BookingPayload,
  buildIcs,
  downloadIcs,
  bookingMailto,
  formatHumanSlot,
  getNextWeekdays,
  MEETING_DURATION_MIN,
  TIMEZONE_LABEL,
} from "@/lib/booking";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function BookingDialog({ open, onOpenChange }: Props) {
  const days = useMemo(() => getNextWeekdays(10), []);
  const [date, setDate] = useState<string>(days[0]?.iso ?? "");
  const [time, setTime] = useState<TimeSlot | "">("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState<BookingPayload | null>(null);

  const canSubmit =
    !!date && !!time && name.trim().length > 1 && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

  const reset = () => {
    setDate(days[0]?.iso ?? "");
    setTime("");
    setName("");
    setEmail("");
    setMessage("");
    setSubmitting(false);
    setConfirmed(null);
  };

  const handleClose = (next: boolean) => {
    if (!next) reset();
    onOpenChange(next);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || !time) return;
    setSubmitting(true);

    const payload: BookingPayload = {
      date,
      time,
      name: name.trim(),
      email: email.trim(),
      message: message.trim() || undefined,
    };

    // 1. Build + download the .ics invite for the guest
    const ics = buildIcs(payload);
    downloadIcs(`discovery-call-${payload.date}.ics`, ics);

    // 2. POST to /api/book (gracefully no-ops if API key isn't configured)
    try {
      await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, ics }),
      });
    } catch {
      // Non-blocking. The mailto fallback still gets the booking to Aqeel.
    }

    // 3. Open the user's email client with the booking pre-filled to Aqeel
    window.location.href = bookingMailto(payload);

    setConfirmed(payload);
    setSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        {!confirmed ? (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CalendarCheck className="h-5 w-5 text-primary" />
                Book a Discovery Call
              </DialogTitle>
              <DialogDescription>
                {MEETING_DURATION_MIN}-min intro call with {personalInfo.name.split(" ")[0]}. Pick a
                slot below. Times shown in <span className="font-medium">{TIMEZONE_LABEL}</span>.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Date picker */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <CalendarIcon className="h-4 w-4 text-primary" />
                  Pick a date
                </label>
                <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
                  {days.map((d) => (
                    <button
                      key={d.iso}
                      type="button"
                      onClick={() => setDate(d.iso)}
                      className={cn(
                        "flex-shrink-0 rounded-lg border px-3 py-2 text-xs font-medium transition-colors",
                        date === d.iso
                          ? "border-primary bg-primary text-primary-foreground shadow-sm"
                          : "border-border bg-background hover:border-primary/40 hover:bg-muted"
                      )}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time picker */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <Clock className="h-4 w-4 text-primary" />
                  Pick a time
                </label>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className={cn(
                        "rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
                        time === t
                          ? "border-primary bg-primary text-primary-foreground shadow-sm"
                          : "border-border bg-background hover:border-primary/40 hover:bg-muted"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form fields */}
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Your name *
                  </span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Email *
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  What's the call about? (optional)
                </span>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="A few lines on the mobile project or role you're hiring for…"
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </label>

              <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
                <p className="text-xs text-muted-foreground">
                  On submit, you'll get a calendar invite (.ics) and your email app will open with
                  the booking details to send to {personalInfo.name.split(" ")[0]}.
                </p>
                <Button type="submit" variant="gradient" disabled={!canSubmit || submitting}>
                  {submitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <CalendarCheck className="h-4 w-4" />
                  )}
                  {submitting ? "Booking…" : "Book the slot"}
                </Button>
              </div>
            </form>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                Booking submitted
              </DialogTitle>
              <DialogDescription>
                Your slot has been emailed to {personalInfo.email}. The calendar invite (.ics) has
                been downloaded, add it to your calendar to lock in the time.
              </DialogDescription>
            </DialogHeader>

            <div className="rounded-xl border border-border bg-gradient-to-br from-primary/5 via-accent/5 to-transparent p-5">
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Slot
              </div>
              <div className="mt-1 font-heading text-lg font-semibold">
                {formatHumanSlot(confirmed)}
              </div>
              <Badge variant="accent" className="mt-3">
                {MEETING_DURATION_MIN}-min Discovery Call
              </Badge>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <a
                href={bookingMailto(confirmed)}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
              >
                <Mail className="h-4 w-4" />
                Re-open email to send
              </a>
              <a
                href={`/api/book/ics?date=${confirmed.date}&time=${confirmed.time}&name=${encodeURIComponent(
                  confirmed.name
                )}&email=${encodeURIComponent(confirmed.email)}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
              >
                <ExternalLink className="h-4 w-4" />
                Re-download .ics
              </a>
            </div>

            <p className="text-xs text-muted-foreground">
              {personalInfo.name.split(" ")[0]} will confirm via email within a few hours (GMT+5
              business hours). If the slot doesn't fit, suggest an alternative in your reply.
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
