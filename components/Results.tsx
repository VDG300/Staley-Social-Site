"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "@/data/images";

const results = [
  { client: "KC Comets", sub: "Professional Indoor Soccer", tag: "Sports Marketing", img: images.comets, result: "Full digital overhaul: website rebuild, Google Ads restructure with 3-tier geofencing around Cable Dahmer Arena, social strategy, and email automation. More ticket sales from day one.", stat: "+20%", statLabel: "Ticket sales, month 1" },
  { client: "Office Brokers of SWFL", sub: "Commercial Real Estate", tag: "Google Ads", img: images.officeBrokers, result: "Google Ads account built from scratch. Precision targeting, conversion tracking, and keyword strategy that drove qualified leads immediately after launch.", stat: "20", statLabel: "Conversions, week 1" },
  { client: "Clean Cuts KC", sub: "Barber Shop", tag: "Full-Stack", img: images.cleanCuts, result: "Built from the ground up — website, Google Business, ads, social. Went from zero online presence to showing up first in local searches.", stat: "Top 3", statLabel: "Local search ranking" },
  { client: "Content Client", sub: "Multi-Platform", tag: "Video & Content", img: images.content, result: "Short-form video and content production across platforms, scripted, shot, and edited in-house.", stat: "1M+", statLabel: "Views generated" },
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
            <div key={r.client} className="glow-card glass rounded-3xl shrink-0 w-[80vw] md:w-[460px] flex flex-col overflow-hidden min-h-[360px]" data-cursor>
              <div className="relative h-44 overflow-hidden">
                <img src={r.img} alt={r.client} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/30 to-transparent" />
                <div className="absolute top-4 left-4 inline-block text-xs font-semibold text-white bg-brand/80 backdrop-blur px-3 py-1 rounded-full">{r.tag}</div>
              </div>
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-2xl font-black mb-1">{r.client}</h3>
                  <p className="text-brand-light font-semibold text-sm mb-3">{r.sub}</p>
                  <p className="text-mute leading-relaxed text-sm">{r.result}</p>
                </div>
                <div className="mt-6">
                  <div className="text-4xl font-black brand-gradient">{r.stat}</div>
                  <div className="text-xs text-mute-2 mt-1">{r.statLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
