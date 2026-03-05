import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ease = {
  expo: [0.16, 1, 0.3, 1] as const,
  expoInOut: [0.87, 0, 0.13, 1] as const,
  spring: [0.175, 0.885, 0.32, 1.275] as const,
  smooth: [0.25, 0.1, 0.25, 1] as const,
};

export const duration = {
  fast: 0.3,
  base: 0.5,
  slow: 0.8,
  xslow: 1.2,
};

/** Stagger delay for list animations */
export const staggerDelay = (index: number, base = 0.08) => index * base;
