"use client";

import { createContext, useCallback, useContext } from "react";
import { personalInfo } from "@/data/personal";

type BookingCtx = {
  open: () => void;
  close: () => void;
};

const Ctx = createContext<BookingCtx | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  // Every "Book a Call" button opens the live Cal.com booking page
  const open = useCallback(() => {
    window.open(personalInfo.bookingUrl, "_blank", "noopener,noreferrer");
  }, []);
  const close = useCallback(() => {}, []);

  return <Ctx.Provider value={{ open, close }}>{children}</Ctx.Provider>;
}

export function useBooking() {
  const ctx = useContext(Ctx);
  if (!ctx) {
    throw new Error("useBooking must be used inside <BookingProvider>");
  }
  return ctx;
}
