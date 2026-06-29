"use client";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "./motion";

const plans = [
  { name: "Starter", price: "Custom", desc: "For small businesses ready to get serious about their online presence.", features: ["Google Business Profile optimization", "Social media management (1 platform)", "Monthly reporting", "30% GBP views guarantee"], highlight: false },
  { name: "Growth", price: "Custom", desc: "For businesses ready to scale with a full-stack approach.", features: ["Everything in Starter", "Google Ads management", "Content production", "Email marketing", "SEO optimization", "Bi-weekly strategy calls"], highlight: true },
  { name: "Agency Partner", price: "Custom", desc: "Full-service partnership for businesses going all in.", features: ["Everything in Growth", "Website design & development", "Video production", "Geofencing campaigns", "Dedicated account manager", "Weekly reporting"], highlight: false },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 bg-navy/40">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Pricing</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">Simple, Transparent Plans</h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">Every plan is customized. Book a free audit for exact pricing.</p>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                className={`rounded-2xl p-8 flex flex-col h-full ${p.highlight ? "bg-gradient-to-b from-gold/20 to-gold/5 border border-gold/40 shadow-xl shadow-gold/10" : "glass"}`}
              >
                {p.highlight && (
                  <div className="text-xs font-bold text-navy bg-gold px-3 py-1 rounded-full self-start mb-4">Most Popular</div>
                )}
                <h3 className="text-xl font-black mb-1">{p.name}</h3>
                <div className="text-3xl font-black gold-gradient mb-2">{p.price}</div>
                <p className="text-white/40 text-sm mb-6">{p.desc}</p>
                <ul className="flex-1 space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="text-gold mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`text-center font-bold px-6 py-3 rounded-full transition-colors text-sm ${p.highlight ? "bg-gold text-navy hover:bg-gold-light" : "glass border border-white/10 text-white hover:border-gold/40"}`}
                >
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
