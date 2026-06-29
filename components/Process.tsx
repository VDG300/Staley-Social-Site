"use client";
import { motion } from "framer-motion";
import { Reveal } from "./motion";

const steps = [
  { num: "01", title: "Free Audit", desc: "We dig into your ads, SEO, social, and GBP and find exactly where you're leaving money on the table." },
  { num: "02", title: "Custom Game Plan", desc: "No cookie-cutter packages. A 90-day strategy built for your goals, market, and budget." },
  { num: "03", title: "Build & Launch", desc: "We execute fast. Campaigns, content, and systems go live while you stay focused on your business." },
  { num: "04", title: "Scale & Report", desc: "Monthly reporting with real numbers. We double down on what works and cut what doesn't." },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">How It Works</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">Our 90-Day Process</h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">From zero to measurable growth in 90 days. Here&apos;s exactly how.</p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <div className="glow-card glass rounded-2xl p-8 h-full">
                <div className="text-5xl font-black gold-gradient mb-4">{s.num}</div>
                <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
