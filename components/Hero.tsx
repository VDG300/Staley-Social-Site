"use client";
import { motion } from "framer-motion";
import { Counter } from "./motion";
import Magnetic from "./Magnetic";

const words1 = ["We", "make", "KC", "businesses"];
const words2 = ["impossible", "to", "ignore."];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-16">
      <div className="aurora">
        <span className="a1" />
        <span className="a2" />
        <span className="a3" />
      </div>
      <div className="absolute inset-0 grid-bg" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-xs font-bold tracking-widest text-mute uppercase"
        >
          <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
          Kansas City&apos;s Full-Stack Agency
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95] mb-6">
          <span className="block">
            {words1.map((w, i) => (
              <motion.span
                key={w + i}
                initial={{ opacity: 0, y: 40, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.21, 0.5, 0.3, 1] }}
                className="inline-block mr-[0.25em]"
              >
                {w}
              </motion.span>
            ))}
          </span>
          <span className="block">
            {words2.map((w, i) => (
              <motion.span
                key={w + i}
                initial={{ opacity: 0, y: 40, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 0.45 + i * 0.08, ease: [0.21, 0.5, 0.3, 1] }}
                className="inline-block mr-[0.25em] brand-gradient"
              >
                {w}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-mute max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Google Ads, social media, web development, SEO — handled by one team,
          built around results. Started at 15. Over 8 years in the field. Zero fluff.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Magnetic>
            <a href="#contact" className="block bg-brand text-white font-bold px-8 py-4 rounded-full text-base shadow-lg shadow-brand/30">
              Book a free 15-min call
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#results" className="block glass border border-white/10 text-white font-medium px-8 py-4 rounded-full text-base">
              See our results
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-8 flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm text-mute-2"
        >
          <span className="flex items-center gap-2"><span className="text-brand">✓</span> 8+ years experience</span>
          <span className="flex items-center gap-2"><span className="text-brand">✓</span> Guaranteed results</span>
          <span className="flex items-center gap-2"><span className="text-brand">✓</span> Kansas City owned &amp; operated</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black brand-gradient"><Counter to={20} suffix="%" /></div>
            <div className="text-xs text-mute-2 mt-1 leading-tight">More ticket sales, month 1</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black brand-gradient"><Counter to={1} suffix="M+" /></div>
            <div className="text-xs text-mute-2 mt-1 leading-tight">Views generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black brand-gradient"><Counter to={8} suffix="+" /></div>
            <div className="text-xs text-mute-2 mt-1 leading-tight">Years experience</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-9 rounded-full border border-white/20 flex justify-center p-1">
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.6, repeat: Infinity }} className="w-1 h-2 bg-brand rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
