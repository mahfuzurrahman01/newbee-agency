"use client";

import { motion } from "framer-motion";

const links = {
  Services: ["UI/UX Design", "Web Development", "App Development", "Automation (n8n)", "Webflow", "Framer"],
  Company: ["About Us", "Our Work", "Process", "Careers"],
  Connect: ["Twitter / X", "LinkedIn", "Dribbble", "GitHub"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-white/5 pt-20 pb-10">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-lg bg-honey" />
                <span className="relative text-bg text-lg font-display font-black leading-none">n</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tighter text-cream">
                new<span className="text-honey">Bee</span>
              </span>
            </div>
            <p className="text-cream-muted text-sm leading-relaxed max-w-xs mb-8">
              We craft digital experiences that convert visitors into customers. Premium design, cutting-edge technology.
            </p>
            <a
              href="mailto:hello@newbee.studio"
              className="text-cream font-display font-semibold text-lg hover:text-honey transition-colors"
            >
              hello@newbee.studio
            </a>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-cream-dim text-xs font-mono uppercase tracking-widest mb-5">
                {category}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-cream-muted text-sm hover:text-cream transition-colors hover-underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-cream-dim text-xs font-mono">
            © {year} newBee Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-cream-dim text-xs hover:text-cream transition-colors">Privacy</a>
            <a href="#" className="text-cream-dim text-xs hover:text-cream transition-colors">Terms</a>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-glow" />
              <span className="text-green-400 text-xs font-mono">Available for projects</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
