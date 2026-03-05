"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We start by understanding your business deeply. Goals, audience, competitors, constraints. No assumptions.",
    duration: "1–2 weeks",
    deliverables: ["Brand brief", "User personas", "Competitive audit", "Project roadmap"],
    icon: "◎",
  },
  {
    number: "02",
    title: "Design Sprint",
    description: "Wireframes → Hi-fi mockups → interactive prototypes. Multiple options, rapid feedback, pixel-perfect output.",
    duration: "2–4 weeks",
    deliverables: ["Wireframes", "Design system", "Figma prototype", "Motion specs"],
    icon: "◈",
  },
  {
    number: "03",
    title: "Engineering",
    description: "Clean, documented, test-covered code. We build for performance from day one — 95+ Lighthouse scores.",
    duration: "3–8 weeks",
    deliverables: ["Source code", "Staging environment", "Performance audit", "CMS setup"],
    icon: "◉",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description: "QA, SEO, analytics setup, launch. Then we track what matters and iterate based on real data.",
    duration: "Ongoing",
    deliverables: ["Production deploy", "Analytics dashboard", "SEO setup", "Monthly reports"],
    icon: "⬡",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-10% 0px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="process" ref={sectionRef} className="section-padding bg-bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div ref={headingRef} className="mb-20">
          <motion.p
            className="tag bg-white/5 text-cream-dim border border-white/10 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            ✦ How We Work
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="overflow-hidden">
              <motion.h2
                className="text-display text-cream"
                initial={{ y: "100%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                A Process Built For{" "}
                <span className="text-honey italic">Clarity</span>
              </motion.h2>
            </div>
            <motion.p
              className="text-cream-muted text-sm max-w-xs"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              No surprises. No scope creep. A structured process that respects your time and budget.
            </motion.p>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/[0.06]">
            <motion.div
              className="absolute top-0 left-0 w-full bg-honey/40"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-16">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              const ref = useRef<HTMLDivElement>(null);
              const stepInView = useInView(ref, { once: true, margin: "-10% 0px" });

              return (
                <div
                  key={step.number}
                  ref={ref}
                  className={`relative flex flex-col md:flex-row gap-8 ${isEven ? "" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <motion.div
                    className="flex-1 md:max-w-[45%] pl-16 md:pl-0"
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    animate={stepInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="p-6 rounded-2xl bg-bg border border-white/[0.06] card-glow">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-xs text-cream-dim tracking-widest">{step.number}</span>
                        <span className="w-px h-4 bg-white/20" />
                        <span className="font-mono text-xs text-honey tracking-wider">{step.duration}</span>
                      </div>
                      <h3 className="font-display font-bold text-cream mb-3" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)" }}>
                        {step.title}
                      </h3>
                      <p className="text-cream-muted text-sm leading-relaxed mb-4">{step.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((d) => (
                          <span key={d} className="text-xs font-mono px-2 py-1 rounded border border-white/10 text-cream-dim">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Center dot */}
                  <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 flex flex-col items-center">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-honey border-2 border-bg z-10"
                      initial={{ scale: 0 }}
                      animate={stepInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
                    />
                  </div>

                  {/* Empty spacer for the other side */}
                  <div className="hidden md:block flex-1 md:max-w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
