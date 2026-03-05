"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [label, setLabel] = useState("");

  const springConfig = { stiffness: 300, damping: 28 };
  const dotSpring = { stiffness: 800, damping: 35 };

  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);
  const dotX = useSpring(cursorX, dotSpring);
  const dotY = useSpring(cursorY, dotSpring);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleEnterInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorLabel = target.closest("[data-cursor-label]") as HTMLElement;
      setIsHovering(true);
      setLabel(cursorLabel?.dataset.cursorLabel ?? "");
    };

    const handleLeaveInteractive = () => {
      setIsHovering(false);
      setLabel("");
    };

    document.addEventListener("mousemove", handleMove);

    const interactiveEls = document.querySelectorAll(
      "a, button, [data-magnetic], [data-cursor-label], [role='button']"
    );
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleEnterInteractive as EventListener);
      el.addEventListener("mouseleave", handleLeaveInteractive);
    });

    return () => {
      document.removeEventListener("mousemove", handleMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnterInteractive as EventListener);
        el.removeEventListener("mouseleave", handleLeaveInteractive);
      });
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <>
      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden md:flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovering ? (label ? 80 : 56) : 40,
          height: isHovering ? (label ? 80 : 56) : 40,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <motion.div
          className="rounded-full border border-honey/60 w-full h-full flex items-center justify-center"
          animate={{
            backgroundColor: isHovering ? "rgba(245,197,24,0.12)" : "transparent",
          }}
          transition={{ duration: 0.2 }}
        >
          {label && (
            <span className="text-honey font-mono text-[10px] font-medium tracking-wider uppercase whitespace-nowrap">
              {label}
            </span>
          )}
        </motion.div>
      </motion.div>

      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed z-[10000] rounded-full bg-honey hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovering ? 6 : 8,
          height: isHovering ? 6 : 8,
          opacity: isHovering ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
      />
    </>
  );
}
