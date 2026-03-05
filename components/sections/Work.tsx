"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "01",
    title: "FinFlow",
    category: "Web App · Design",
    description: "A complete redesign of a fintech SaaS platform — reducing churn by 34% and doubling trial-to-paid conversion.",
    year: "2024",
    tags: ["Next.js", "Framer Motion", "Figma"],
    color: "#F5C518",
    bg: "from-honey/20 via-honey/5 to-transparent",
    result: "+34% retention",
  },
  {
    id: "02",
    title: "Luminary",
    category: "Mobile App",
    description: "A wellness app for iOS & Android with AI-driven personalization. 4.9★ rating, 50K+ downloads in 3 months.",
    year: "2024",
    tags: ["React Native", "AI/ML", "Node.js"],
    color: "#A78BFA",
    bg: "from-purple-500/20 via-purple-500/5 to-transparent",
    result: "50K downloads",
  },
  {
    id: "03",
    title: "Cortex AI",
    category: "Automation · Web",
    description: "n8n-powered automation suite for a 200-person ops team. Saved 800+ hours/month and eliminated manual errors.",
    year: "2024",
    tags: ["n8n", "Python", "PostgreSQL"],
    color: "#34D399",
    bg: "from-green-500/20 via-green-500/5 to-transparent",
    result: "800hrs saved/mo",
  },
  {
    id: "04",
    title: "Archetype",
    category: "Webflow · Brand",
    description: "End-to-end brand identity and Webflow site for a Series B startup. Launched in 3 weeks.",
    year: "2023",
    tags: ["Webflow", "Brand", "Motion"],
    color: "#38BDF8",
    bg: "from-sky-500/20 via-sky-500/5 to-transparent",
    result: "3-week delivery",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.article
      ref={ref}
      className="group relative rounded-2xl overflow-hidden border border-white/[0.06] bg-bg-secondary cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor-label="View"
    >
      {/* Visual area */}
      <div className="relative h-52 md:h-64 overflow-hidden">
        <motion.div
          className={cn("absolute inset-0 bg-gradient-to-br", project.bg)}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Abstract decoration */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: isHovered ? 1.1 : 1, opacity: isHovered ? 0.7 : 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="w-32 h-32 rounded-full blur-2xl"
            style={{ background: project.color }}
          />
        </motion.div>

        {/* Project number */}
        <div className="absolute top-5 left-5 font-mono text-xs text-cream-dim tracking-widest">
          {project.id}
        </div>

        {/* Result badge */}
        <motion.div
          className="absolute top-5 right-5 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10 text-xs font-mono"
          style={{ color: project.color }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 8 }}
          transition={{ duration: 0.3 }}
        >
          {project.result}
        </motion.div>

        {/* Year */}
        <div className="absolute bottom-5 right-5 font-mono text-xs text-cream-dim">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-cream-dim font-mono text-xs tracking-widest uppercase mb-2">
          {project.category}
        </p>
        <h3
          className="font-display font-bold text-cream mb-3 group-hover:text-honey transition-colors duration-300"
          style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
        >
          {project.title}
        </h3>
        <p className="text-cream-muted text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-mono px-2 py-1 rounded border border-white/10 text-cream-dim">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="px-6 pb-6 flex items-center gap-2 text-sm font-display font-semibold"
        style={{ color: project.color }}
        animate={{ x: isHovered ? 4 : 0 }}
        transition={{ duration: 0.3 }}
      >
        View Case Study
        <span>→</span>
      </motion.div>
    </motion.article>
  );
}

export default function Work() {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: "-10% 0px" });

  return (
    <section id="work" className="section-padding bg-bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div ref={headingRef} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.p
              className="tag bg-white/5 text-cream-dim border border-white/10 mb-5"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
            >
              ✦ Selected Work
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                className="text-display text-cream"
                initial={{ y: "100%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Proof Over{" "}
                <span className="text-ember italic">Promise</span>
              </motion.h2>
            </div>
          </div>

          <motion.a
            href="#"
            className="flex items-center gap-2 text-cream-muted hover:text-honey transition-colors text-sm font-display font-semibold group"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            All Projects
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.a>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
