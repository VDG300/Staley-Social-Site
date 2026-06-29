"use client";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "./motion";

const plans = [
  { name: "Starter", price: "Custom", desc: "For small businesses ready to get serious about local presence.", features: ["Google Business Profile optimization", "Social media management (1 platform)", "Monthly reporting you can read", "30% GBP views guarantee"], highlight: false },
  { name: "Growth", price: "Custom", desc: "For businesses ready to scale with a full-stack approach.", features: ["Everything in Starter", "Google Ads & geofencing", "Video & content production", "Email marketing automation", "SEO optimization", "Bi-weekly strategy calls"], highlight: true },
  { name: "Full-Stack", price: "Custom", desc: "Everything under one roof. The complete partnership.", features: ["Everything in Growth", "Website design & development", "4-5 social posts per week", "Reels & UGC campaigns", "Dedicated team, no junior reps", "Weekly reporting"], highlight: false },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 bg-ink-2/60">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-brand text-sm font-bold tracking-widest uppercase mb-3">Pricing</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">Built around your business.</h2>
          <p className="text-mute mt-4 max-w-xl mx-auto">Every plan is customized. Book a free audit for exact pricing — no pitch deck, just a real look.</p>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                className={`rounded-2xl p-8 flex flex-col h-full ${p.highlight ? "bg-gradient-to-b from-brand/25 to-brand/5 border border-brand/40 shadow-xl shadow-brand/10" : "glass"}`}
                data-cursor
              >
                {p.highlight && <div className="text-xs font-bold text-white bg-brand px-3 py-1 rounded-full self-start mb-4">Most Popular</div>}
                <h3 className="text-xl font-black mb-1">{p.name}</h3>
                <div className="text-3xl font-black brand-gradient mb-2">{p.price}</div>
                <p className="text-mute text-sm mb-6">{p.desc}</p>
                <ul className="flex-1 space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="text-brand mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`text-center font-bold px-6 py-3 rounded-full transition-colors text-sm ${p.highlight ? "bg-brand text-white hover:bg-brand-light" : "glass border border-white/10 text-white hover:border-brand/40"}`}>
                  Get Started
                </a>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
