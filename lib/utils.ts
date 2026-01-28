import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

export function formatWhatsAppMessage(data: {
  location?: string;
  car?: string;
  issue?: string;
}): string {
  const parts = ["Hi, my car broke down."];
  if (data.location) parts.push(`Location: ${data.location}`);
  if (data.car) parts.push(`Car: ${data.car}`);
  if (data.issue) parts.push(`Issue: ${data.issue}`);
  return encodeURIComponent(parts.join(" "));
}

export function getWhatsAppUrl(phone: string, message: string): string {
  return `https://wa.me/${formatPhone(phone)}?text=${message}`;
}
