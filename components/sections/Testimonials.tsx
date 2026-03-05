"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "newBee completely transformed our product. The new design increased our trial-to-paid conversion by 40% in the first month. I've worked with a lot of agencies — these guys are different.",
    name: "Sarah Chen",
    role: "CEO, FinFlow",
    avatar: "SC",
    color: "#F5C518",
    metric: "+40% conversion",
  },
  {
    quote: "We hired them for a 'quick' Webflow site and ended up with a full brand identity, design system, and a site that's won two Awwwards. Best investment we've made.",
    name: "Marcus Liu",
    role: "Founder, Archetype",
    avatar: "ML",
    color: "#38BDF8",
    metric: "2× Awwwards",
  },
  {
    quote: "The n8n automation workflows they built us run completely unattended. We've saved 800+ hours per month. The ROI on this project was clear within the first week.",
    name: "Priya Sharma",
    role: "Head of Ops, Cortex AI",
    avatar: "PS",
    color: "#34D399",
    metric: "800hrs/mo saved",
  },
  {
    quote: "Communication, quality, speed — they nail all three. Our app launched in 10 weeks, hit 4.9 stars in the App Store, and we've been working with them ever since.",
    name: "Alex Brennan",
    role: "CTO, Luminary",
    avatar: "AB",
    color: "#A78BFA",
    metric: "4.9★ App Store",
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-honey text-sm">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-10% 0px" });

  const current = testimonials[active];

  return (
    <section className="section-padding bg-bg">
      <div className="container-wide">
        {/* Header */}
        <div ref={headingRef} className="mb-16">
          <motion.p
            className="tag bg-white/5 text-cream-dim border border-white/10 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            ✦ Client Stories
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              className="text-display text-cream"
              initial={{ y: "100%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Clients Who{" "}
              <span className="text-honey italic">Trust Us</span>
            </motion.h2>
          </div>
        </div>

        {/* Testimonial display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main quote */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-12 rounded-3xl bg-bg-secondary border border-white/[0.06] relative overflow-hidden"
              >
                {/* Accent color blob */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-10"
                  style={{ background: current.color }}
                />

                {/* Quote mark */}
                <div className="font-display font-black text-8xl text-white/5 leading-none mb-4 -mt-4">
                  &ldquo;
                </div>

                <StarRating />

                <blockquote className="text-cream font-body mt-6 mb-8 leading-relaxed" style={{ fontSize: "clamp(1rem, 2vw, 1.375rem)" }}>
                  {current.quote}
                </blockquote>

                {/* Result metric */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 text-sm font-mono font-medium"
                  style={{ borderColor: `${current.color}40`, color: current.color }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: current.color }} />
                  {current.metric}
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-display font-bold text-bg"
                    style={{ background: current.color }}
                  >
                    {current.avatar}
                  </div>
                  <div>
                    <p className="text-cream font-display font-semibold text-sm">{current.name}</p>
                    <p className="text-cream-dim font-mono text-xs">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Selector list */}
          <div className="space-y-3">
            {testimonials.map((t, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                  active === i
                    ? "border-honey/30 bg-honey/5"
                    : "border-white/[0.06] bg-bg-secondary hover:border-white/10"
                }`}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-display font-bold text-bg flex-shrink-0"
                    style={{ background: active === i ? t.color : "#2E2E2E", color: active === i ? "#080808" : "#B8B4AB" }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className={`font-display font-semibold text-sm ${active === i ? "text-cream" : "text-cream-muted"}`}>
                      {t.name}
                    </p>
                    <p className="font-mono text-xs text-cream-dim">{t.role}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
