"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const results = [
  { client: "KC Comets", sub: "Professional Indoor Soccer", tag: "Sports Marketing", result: "Full digital overhaul: website rebuild, Google Ads restructure with 3-tier geofencing around Cable Dahmer Arena, social strategy, and email automation. More ticket sales from day one.", stat: "+20%", statLabel: "Ticket sales, month 1" },
  { client: "Office Brokers of SWFL", sub: "Commercial Real Estate", tag: "Google Ads", result: "Google Ads account built from scratch. Precision targeting, conversion tracking, and keyword strategy that drove qualified leads immediately after launch.", stat: "20", statLabel: "Conversions, week 1" },
  { client: "Clean Cuts KC", sub: "Barber Shop", tag: "Full-Stack", result: "Built from the ground up — website, Google Business, ads, social. Went from zero online presence to showing up first in local searches.", stat: "Top 3", statLabel: "Local search ranking" },
  { client: "Content Client", sub: "Multi-Platform", tag: "Video & Content", result: "Short-form video and content production across platforms, scripted, shot, and edited in-house.", stat: "1M+", statLabel: "Views generated" },
];

export default function Results() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-62%"]);

  return (
    <section id="results" ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full mb-10">
          <p className="text-brand text-sm font-bold tracking-widest uppercase mb-3">Proof of Work</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">Numbers don&apos;t lie.</h2>
          <p className="text-mute mt-4 max-w-xl">Real results from real KC clients. Not vanity metrics — ticket sales, conversions, revenue.</p>
        </div>

        <motion.div style={{ x }} className="flex gap-6 pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2))]">
          {results.map((r) => (
            <div key={r.client} className="glow-card glass rounded-3xl p-10 shrink-0 w-[80vw] md:w-[460px] flex flex-col justify-between min-h-[360px]" data-cursor>
              <div>
                <div className="inline-block text-xs font-semibold text-brand bg-brand/10 px-3 py-1 rounded-full mb-6">{r.tag}</div>
                <h3 className="text-3xl font-black mb-1">{r.client}</h3>
                <p className="text-brand-light font-semibold text-sm mb-4">{r.sub}</p>
                <p className="text-mute leading-relaxed text-sm">{r.result}</p>
              </div>
              <div className="mt-8">
                <div className="text-5xl font-black brand-gradient">{r.stat}</div>
                <div className="text-xs text-mute-2 mt-1">{r.statLabel}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
