"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  splitBy?: "words" | "chars" | "lines";
  once?: boolean;
}

export default function AnimatedText({
  text,
  className,
  delay = 0,
  duration = 0.7,
  as: Tag = "p",
  splitBy = "words",
  once = true,
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });

  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: splitBy === "chars" ? 0.04 : 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: "110%", opacity: 0, rotateX: -30 },
    visible: {
      y: "0%",
      opacity: 1,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  if (splitBy === "words") {
    return (
      <Tag ref={ref as React.RefObject<HTMLElement & HTMLHeadingElement>} className={cn("overflow-hidden", className)}>
        <motion.span
          className="inline-flex flex-wrap gap-x-[0.25em]"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {words.map((word, i) => (
            <span key={i} className="overflow-hidden inline-block">
              <motion.span
                className="inline-block"
                variants={wordVariants}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </Tag>
    );
  }

  if (splitBy === "chars") {
    const chars = text.split("");
    return (
      <Tag ref={ref as React.RefObject<HTMLElement & HTMLHeadingElement>} className={cn(className)}>
        <motion.span
          className="inline-flex flex-wrap"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {chars.map((char, i) => (
            <span key={i} className="overflow-hidden inline-block">
              <motion.span
                className="inline-block"
                variants={wordVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </Tag>
    );
  }

  return (
    <Tag ref={ref as React.RefObject<HTMLElement & HTMLHeadingElement>} className={cn("overflow-hidden", className)}>
      <motion.span
        className="inline-block"
        initial={{ y: "110%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {text}
      </motion.span>
    </Tag>
  );
}
