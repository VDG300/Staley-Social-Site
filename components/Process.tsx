"use client";
import { motion } from "framer-motion";
import { Reveal } from "./motion";

const steps = [
  { num: "01", title: "Free Audit", desc: "We pull up your Google profile, ads account, and website on a 15-minute screen share. You see exactly what's costing you customers before you spend a dollar." },
  { num: "02", title: "Custom Game Plan", desc: "A strategy built for your business, your market, and your goals — not a template. We tell you what to fix first, what to build next, and what results to expect." },
  { num: "03", title: "Build & Launch", desc: "Days 1-30: stop the bleeding. Redirect bad traffic, fix tracking, launch quick-win campaigns. You start seeing movement in the first month." },
  { num: "04", title: "Scale & Report", desc: "Days 31-90: optimize, scale what's working, cut what isn't. Monthly reports you can read in 5 minutes. KPIs tied to real revenue, not impressions." },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-brand text-sm font-bold tracking-widest uppercase mb-3">How We Work</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">From signed to scaling in 90 days.</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="glow-card glass rounded-2xl p-8 h-full" data-cursor>
                <div className="text-5xl font-black brand-gradient mb-4">{s.num}</div>
                <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                <p className="text-mute text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
