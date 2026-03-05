"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const HEADLINE_LINES = ["We Build", "Digital", "Experiences"];
const DESCRIPTOR_WORDS = ["Convert.", "Inspire.", "Grow.", "Perform."];

function useWordCycle(words: string[], interval = 2200) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words, interval]);
  return words[index];
}

function GridLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Vertical grid lines */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="border-r border-white/[0.03] h-full" />
        ))}
      </div>
      {/* Horizontal grid lines */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border-t border-white/[0.03] w-full" />
        ))}
      </div>
    </div>
  );
}

function FloatingParticle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-honey pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [-10, 10, -10],
        opacity: [0.3, 0.7, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cycledWord = useWordCycle(DESCRIPTOR_WORDS);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const particles = [
    { delay: 0, x: "12%", y: "20%", size: 4 },
    { delay: 1.5, x: "85%", y: "35%", size: 3 },
    { delay: 0.8, x: "70%", y: "75%", size: 5 },
    { delay: 2.1, x: "25%", y: "80%", size: 3 },
    { delay: 1.2, x: "55%", y: "15%", size: 4 },
    { delay: 3, x: "92%", y: "60%", size: 2 },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-bg"
    >
      <GridLines />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-honey/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-ember/5 blur-[100px] pointer-events-none" />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}

      {/* Status badge */}
      <motion.div
        className="absolute top-36 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:top-36 md:right-16"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-surface-100/80 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
          <span className="text-cream-muted font-mono text-xs">Available for projects</span>
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="container-wide pb-20 md:pb-28 pt-40"
      >
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="tag bg-honey/10 text-honey border border-honey/20">
            ✦ Digital Agency
          </span>
          <span className="text-cream-dim font-mono text-xs">Est. 2023</span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden">
          {HEADLINE_LINES.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                className="text-hero text-cream block"
                initial={{ y: "110%", rotateX: -20 }}
                animate={{ y: "0%", rotateX: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.4 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {i === 1 ? (
                  <>
                    Digital{" "}
                    <span className="relative inline-block">
                      <span className="text-honey italic">That</span>
                    </span>
                  </>
                ) : (
                  line
                )}
              </motion.h1>
            </div>
          ))}

          {/* Cycling word */}
          <div className="overflow-hidden h-[0.95em] leading-[0.95]" style={{ fontSize: "clamp(3.5rem, 10vw, 10rem)" }}>
            <motion.div
              key={cycledWord}
              className="font-display font-black tracking-tightest text-ember"
              style={{ fontSize: "clamp(3.5rem, 10vw, 10rem)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {cycledWord}
            </motion.div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <motion.p
            className="text-cream-muted text-fluid-base max-w-sm leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            We are a boutique studio crafting premium digital experiences — from pixel-perfect UI to intelligent automation.
          </motion.p>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton href="#work" size="lg">
              View Our Work
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline" size="lg">
              Let&apos;s Talk
            </MagneticButton>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          {[
            { num: "80+", label: "Projects Shipped" },
            { num: "5★", label: "Client Rating" },
            { num: "3", label: "Years Building" },
            { num: "12", label: "Services Offered" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="font-display font-black text-cream stat-number" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                {stat.num}
              </p>
              <p className="text-cream-dim text-sm font-mono mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-cream-dim font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-cream/20 to-transparent"
          animate={{ scaleY: [0, 1, 0], y: [0, 0, 12] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
