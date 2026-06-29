"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const results = [
  { client: "KC Comets", metric: "Ticket Sales", result: "Major lift in ticket sales through targeted social and ad campaigns.", tag: "Social Ads", stat: "↑ Sales" },
  { client: "Office Brokers", metric: "Conversions", result: "Boosted lead conversions with optimized landing pages and Google Ads.", tag: "Google Ads", stat: "↑ Leads" },
  { client: "Content Platform", metric: "Views", result: "Millions of views generated through strategic content production and distribution.", tag: "Content", stat: "1M+ Views" },
  { client: "Local Brands", metric: "Local Search", result: "Dominated the map pack with optimized Google Business Profiles across KC.", tag: "GBP", stat: "Top 3 Local" },
];

export default function Results() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-62%"]);

  return (
    <section id="results" ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full mb-10">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Proof of Work</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">Results, Not Promises</h2>
          <p className="text-white/40 mt-4 max-w-xl">Keep scrolling. Real clients, real numbers.</p>
        </div>

        <motion.div style={{ x }} className="flex gap-6 pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2))]">
          {results.map((r) => (
            <div
              key={r.client}
              className="glow-card glass rounded-3xl p-10 shrink-0 w-[80vw] md:w-[460px] flex flex-col justify-between min-h-[340px]"
            >
              <div>
                <div className="inline-block text-xs font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full mb-6">{r.tag}</div>
                <h3 className="text-3xl font-black mb-1">{r.client}</h3>
                <p className="text-gold font-semibold text-sm mb-4">{r.metric}</p>
                <p className="text-white/50 leading-relaxed">{r.result}</p>
              </div>
              <div className="text-5xl font-black gold-gradient mt-8">{r.stat}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
