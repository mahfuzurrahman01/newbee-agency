"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="stat-number">
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 80, suffix: "+", label: "Projects Delivered" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 3, suffix: "yrs", label: "In Business" },
  { value: 12, suffix: "", label: "Core Services" },
];

const values = [
  { title: "Craft over speed", desc: "We'd rather take more time to ship something exceptional than rush mediocrity." },
  { title: "Data-informed design", desc: "Every decision is backed by user research, analytics, and conversion principles." },
  { title: "Partnership, not vendor", desc: "We embed in your team, understand your business, and act like owners." },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-10% 0px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-bg overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text */}
          <div ref={headingRef}>
            <motion.p
              className="tag bg-white/5 text-cream-dim border border-white/10 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
            >
              ✦ About newBee
            </motion.p>

            <div className="overflow-hidden mb-6">
              <motion.h2
                className="text-display text-cream"
                initial={{ y: "100%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Small Studio,{" "}
                <span className="text-honey italic">Big</span>{" "}
                Output
              </motion.h2>
            </div>

            <motion.p
              className="text-cream-muted text-fluid-base leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              newBee is a boutique digital agency with a simple obsession: making your product the most beautiful,
              most performant, and most effective version of itself.
            </motion.p>

            <motion.p
              className="text-cream-muted text-fluid-sm leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              We are a small team of designers, engineers, and strategists who believe that exceptional digital
              work comes from deep collaboration — not factory production.
            </motion.p>

            {/* Values */}
            <div className="space-y-5">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl border border-white/[0.06] bg-bg-secondary"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="w-6 h-6 rounded-full bg-honey/10 border border-honey/30 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-honey" />
                  </div>
                  <div>
                    <p className="text-cream font-display font-semibold text-sm mb-1">{v.title}</p>
                    <p className="text-cream-muted text-sm">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Visual + Stats */}
          <div>
            {/* Abstract visual card */}
            <motion.div
              style={{ y: imageY }}
              className="relative rounded-3xl overflow-hidden bg-bg-secondary border border-white/[0.06] mb-8 p-8 aspect-square"
            >
              {/* Ambient BG */}
              <div className="absolute inset-0 bg-gradient-to-br from-honey/10 via-transparent to-ember/5" />

              {/* Geometric composition */}
              <div className="relative h-full flex items-center justify-center">
                <motion.div
                  className="absolute w-48 h-48 rounded-full border border-honey/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute w-64 h-64 rounded-full border border-honey/10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute w-32 h-32 rounded-full border-2 border-honey/30"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Center mark */}
                <div className="relative w-16 h-16 rounded-2xl bg-honey flex items-center justify-center">
                  <span className="font-display font-black text-bg text-2xl">n</span>
                </div>

                {/* Floating tags */}
                {[
                  { text: "Design First", x: "5%", y: "15%" },
                  { text: "Performance", x: "55%", y: "8%" },
                  { text: "Results", x: "70%", y: "75%" },
                  { text: "Craft", x: "3%", y: "78%" },
                ].map((tag, i) => (
                  <motion.div
                    key={i}
                    className="absolute px-3 py-1.5 rounded-full bg-surface-100 border border-white/10 text-cream text-xs font-mono"
                    style={{ left: tag.x, top: tag.y }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  >
                    {tag.text}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="p-5 rounded-2xl bg-bg-secondary border border-white/[0.06] text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="font-display font-black text-cream text-3xl mb-1">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-cream-dim text-xs font-mono tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
