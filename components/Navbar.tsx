"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-ink/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold tracking-tight font-display">
          The <span className="brand-gradient">Staley</span> Social
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="text-sm bg-brand text-white font-semibold px-5 py-2 rounded-full"
          >
            Book a call
          </motion.a>
        </div>

        <button className="md:hidden text-white/70" onClick={() => setOpen(!open)}>
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="text-sm bg-brand text-white font-semibold px-5 py-2 rounded-full text-center">
            Book a call
          </a>
        </div>
      )}
    </motion.nav>
  );
}
