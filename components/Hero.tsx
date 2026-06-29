"use client";
import { motion } from "framer-motion";
import { Counter } from "./motion";
import Magnetic from "./Magnetic";

const words1 = ["We", "Don't", "Just", "Post."];
const words2 = ["We", "Grow", "Brands."];

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
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm text-white/70"
        >
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          Kansas City&apos;s Full-Stack Marketing Agency
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
                className="inline-block mr-[0.25em] gold-gradient"
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
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Google Ads, social media, web development, SEO, and video production,
          all under one roof. Built for businesses that are serious about results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Magnetic>
            <a
              href="#contact"
              className="block bg-gold text-navy font-bold px-8 py-4 rounded-full text-base shadow-lg shadow-gold/20"
            >
              Book Your Free Audit
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#results"
              className="block glass border border-white/10 text-white font-medium px-8 py-4 rounded-full text-base"
            >
              See Our Results
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black gold-gradient">
              <Counter to={30} suffix="%" />
            </div>
            <div className="text-xs text-white/40 mt-1 leading-tight">More GBP views, guaranteed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black gold-gradient">
              <Counter to={90} />
            </div>
            <div className="text-xs text-white/40 mt-1 leading-tight">Days to measurable growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black gold-gradient">KC</div>
            <div className="text-xs text-white/40 mt-1 leading-tight">Rooted in Kansas City</div>
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
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-1 h-2 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
