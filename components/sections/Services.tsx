"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
  {
    number: "01",
    title: "UI/UX Design",
    description: "Pixel-perfect interfaces built on deep user research. We craft experiences that feel intuitive, look stunning, and convert.",
    tags: ["Figma", "Prototyping", "Design Systems", "User Research"],
    icon: "◈",
    color: "from-honey/10 to-transparent",
    accent: "text-honey",
  },
  {
    number: "02",
    title: "Web Development",
    description: "Next.js, React, and modern web tech — built for performance, SEO, and scale. Every line of code has purpose.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
    icon: "◎",
    color: "from-blue-500/10 to-transparent",
    accent: "text-blue-400",
  },
  {
    number: "03",
    title: "App Development",
    description: "Cross-platform mobile and web apps that users love. Swift, React Native, or Expo — we ship what works.",
    tags: ["React Native", "Expo", "Flutter", "iOS/Android"],
    icon: "◉",
    color: "from-purple-500/10 to-transparent",
    accent: "text-purple-400",
  },
  {
    number: "04",
    title: "Automation · n8n",
    description: "Connect everything. Automate the boring. n8n workflows that save your team hundreds of hours every month.",
    tags: ["n8n", "Zapier", "Make", "API Integration"],
    icon: "⬡",
    color: "from-green-500/10 to-transparent",
    accent: "text-green-400",
  },
  {
    number: "05",
    title: "Webflow",
    description: "Designer-quality sites without code constraints. From marketing pages to complex CMS builds.",
    tags: ["CMS", "E-commerce", "Interactions", "SEO"],
    icon: "◇",
    color: "from-cyan-500/10 to-transparent",
    accent: "text-cyan-400",
  },
  {
    number: "06",
    title: "Framer",
    description: "The most beautiful motion-first websites on the internet. Framer sites that win Awwwards.",
    tags: ["Framer", "Motion", "CMS", "Publishing"],
    icon: "◈",
    color: "from-ember/10 to-transparent",
    accent: "text-ember",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "group relative p-8 rounded-2xl border border-white/[0.06] bg-bg-secondary cursor-pointer overflow-hidden card-glow",
      )}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover bg gradient */}
      <motion.div
        className={cn("absolute inset-0 bg-gradient-to-br opacity-0", service.color)}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Top row */}
      <div className="relative flex items-start justify-between mb-6">
        <span className="font-mono text-xs text-cream-dim tracking-widest">
          {service.number}
        </span>
        <motion.span
          className={cn("text-2xl", service.accent)}
          animate={{ rotate: isHovered ? 90 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {service.icon}
        </motion.span>
      </div>

      {/* Title */}
      <h3 className="relative font-display font-bold text-cream mb-3 group-hover:text-cream transition-colors" style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}>
        {service.title}
      </h3>

      {/* Description */}
      <p className="relative text-cream-muted text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Tags */}
      <div className="relative flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2.5 py-1 rounded-full border border-white/10 text-cream-dim"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <motion.div
        className="absolute bottom-8 right-8 w-8 h-8 flex items-center justify-center"
        animate={{ x: isHovered ? 0 : -4, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className={cn("text-lg", service.accent)}>→</span>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-10% 0px" });

  return (
    <section id="services" className="section-padding bg-bg">
      <div className="container-wide">
        {/* Header */}
        <div ref={headingRef} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.p
              className="tag bg-white/5 text-cream-dim border border-white/10 mb-5"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              ✦ What We Do
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                className="text-display text-cream"
                initial={{ y: "100%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Services Built{" "}
                <span className="text-honey italic">For Results</span>
              </motion.h2>
            </div>
          </div>

          <motion.p
            className="text-cream-muted max-w-xs text-sm leading-relaxed md:text-right"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Six disciplines. One studio. Everything you need to go from idea to market-leading product.
          </motion.p>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
