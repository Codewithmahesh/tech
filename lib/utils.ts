import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cnString(...inputs: (string | undefined)[]) {
  return inputs.filter(Boolean).join(" ")
}