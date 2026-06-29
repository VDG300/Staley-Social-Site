"use client";
import { Reveal, Stagger, StaggerItem } from "./motion";

const results = [
  { client: "KC Comets", metric: "Ticket Sales", result: "Major lift in ticket sales through targeted social and ad campaigns.", tag: "Social Ads" },
  { client: "Office Brokers", metric: "Conversions", result: "Boosted lead conversions with optimized landing pages and Google Ads.", tag: "Google Ads" },
  { client: "Content Platform", metric: "Views", result: "Millions of views generated through strategic content production and distribution.", tag: "Content" },
];

export default function Results() {
  return (
    <section id="results" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Proof of Work</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">Results, Not Promises</h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">Real clients. Real numbers. No inflated vanity metrics.</p>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-6">
          {results.map((r) => (
            <StaggerItem key={r.client}>
              <div className="glow-card glass rounded-2xl p-8 h-full">
                <div className="inline-block text-xs font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full mb-6">{r.tag}</div>
                <h3 className="text-2xl font-black mb-1">{r.client}</h3>
                <p className="text-gold font-semibold text-sm mb-4">{r.metric}</p>
                <p className="text-white/50 text-sm leading-relaxed">{r.result}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
