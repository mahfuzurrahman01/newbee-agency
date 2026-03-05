"use client";

import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export function useScrollProgress(): {
  ref: React.RefObject<HTMLElement | null>;
  scrollYProgress: MotionValue<number>;
} {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return { ref, scrollYProgress };
}

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
