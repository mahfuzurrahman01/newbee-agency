"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const services = [
  "UI/UX Design",
  "Web Development",
  "App Development",
  "Automation · n8n",
  "Webflow",
  "Framer",
  "Other",
];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formState, setFormState] = useState({ name: "", email: "", project: "" });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-bg-secondary relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-honey/5 blur-[100px]" />
      </div>

      <div className="container-wide relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="tag bg-white/5 text-cream-dim border border-white/10 mb-6 mx-auto w-fit"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            ✦ Start a Project
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              className="text-display text-cream mb-4"
              initial={{ y: "100%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Let&apos;s Build{" "}
              <span className="text-honey italic">Something</span>{" "}
              Great
            </motion.h2>
          </div>
          <motion.p
            className="text-cream-muted text-fluid-base max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Tell us what you&apos;re building. We&apos;ll respond within 24 hours with a plan.
          </motion.p>
        </div>

        {/* Form */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {submitted ? (
            <motion.div
              className="text-center p-16 rounded-3xl bg-bg border border-honey/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-16 h-16 rounded-full bg-honey mx-auto mb-6 flex items-center justify-center text-2xl">
                ✓
              </div>
              <h3 className="text-headline text-cream mb-3 font-display font-bold">Message Received!</h3>
              <p className="text-cream-muted">We&apos;ll review your project and get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "name", label: "Your Name", placeholder: "Alex Johnson", type: "text" },
                  { name: "email", label: "Email Address", placeholder: "alex@company.com", type: "email" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-cream-dim font-mono text-xs tracking-widest uppercase mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={formState[field.name as keyof typeof formState]}
                      onChange={(e) => setFormState({ ...formState, [field.name]: e.target.value })}
                      className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3.5 text-cream placeholder:text-cream-dim/40 text-sm focus:outline-none focus:border-honey/50 transition-colors"
                    />
                  </div>
                ))}
              </div>

              {/* Services */}
              <div>
                <label className="block text-cream-dim font-mono text-xs tracking-widest uppercase mb-3">
                  Services Needed
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleService(s)}
                      className={`px-4 py-2 rounded-full text-sm font-body border transition-all duration-200 ${
                        selectedServices.includes(s)
                          ? "bg-honey text-bg border-honey font-semibold"
                          : "bg-transparent border-white/10 text-cream-muted hover:border-honey/30 hover:text-cream"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project description */}
              <div>
                <label className="block text-cream-dim font-mono text-xs tracking-widest uppercase mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project — goals, timeline, budget range..."
                  value={formState.project}
                  onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                  className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3.5 text-cream placeholder:text-cream-dim/40 text-sm focus:outline-none focus:border-honey/50 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-cream-dim font-mono text-xs">
                  We respond within 24 hours · No spam · No commitment
                </p>
                <MagneticButton size="lg" onClick={() => handleSubmit()}>
                  Send Message →
                </MagneticButton>
              </div>
            </form>
          )}
        </motion.div>

        {/* Alt contact */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div>
            <p className="text-cream-dim font-mono text-xs tracking-widest uppercase mb-1">Email us directly</p>
            <a href="mailto:hello@newbee.studio" className="text-cream font-display font-semibold hover:text-honey transition-colors">
              hello@newbee.studio
            </a>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/10" />
          <div>
            <p className="text-cream-dim font-mono text-xs tracking-widest uppercase mb-1">Book a call</p>
            <a href="#" className="text-cream font-display font-semibold hover:text-honey transition-colors">
              Schedule 30min →
            </a>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
            <span className="text-green-400 font-mono text-sm">Taking new projects Q2 2025</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
