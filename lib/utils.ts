import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function renderBoldHeading(text: string) {
  const match = text.match(/^\*\*(.+?):\*\*\s*(.*)$/);
  if (match) {
    return { heading: match[1], body: match[2] };
  }
  if (text.startsWith("**") && text.endsWith("**")) {
    return { heading: text.replace(/\*\*/g, ""), body: "" };
  }
  return null;
}

export function whatsappLink(countryCode: string, phone: string, message?: string) {
  const digits = `${countryCode}${phone}`.replace(/\D/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${text}`;
}
