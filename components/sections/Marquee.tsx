"use client";

import { motion } from "framer-motion";

const items = [
  "UI/UX Design",
  "Web Development",
  "App Development",
  "Automation · n8n",
  "Webflow",
  "Framer",
  "Brand Strategy",
  "Motion Design",
  "SaaS Platforms",
  "E-Commerce",
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items];

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className={`flex gap-8 whitespace-nowrap ${reverse ? "animate-marquee-right" : "animate-marquee-left"}`}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8 text-fluid-sm font-display font-semibold text-cream-muted uppercase tracking-widest">
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-honey inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="py-8 border-y border-white/[0.06] bg-bg-secondary overflow-hidden">
      <div className="space-y-4">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
