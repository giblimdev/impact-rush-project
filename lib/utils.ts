import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine intelligemment les classes Tailwind
 * - clsx : gère les conditions (true/false)
 * - twMerge : fusionne les classes tailwind en supprimant les doublons
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
