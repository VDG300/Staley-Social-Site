"use client";
import { motion } from "framer-motion";
import { Reveal } from "./motion";

export default function Guarantee() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden p-px">
            <motion.div
              className="absolute inset-[-50%] z-0"
              style={{ background: "conic-gradient(from 0deg, transparent, #2d63d8, #8b5cf6, transparent 35%)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10 bg-ink-2 rounded-3xl p-12 text-center">
              <p className="text-brand text-sm font-bold tracking-widest uppercase mb-4">The Staley Guarantee</p>
              <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
                Results in writing. <br className="hidden md:block" />Or you <span className="shimmer">don&apos;t pay.</span>
              </h2>
              <p className="text-mute text-lg max-w-2xl mx-auto leading-relaxed">
                Every agency in Kansas City will promise you results. We&apos;re the only one in KC that backs it up in writing.
                If we don&apos;t hit{" "}
                <span className="text-white font-semibold">30% more Google Business Profile views by month 2</span>,
                that month is completely on us. No questions asked, no fine print.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block mt-8 bg-brand text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-brand/30"
              >
                Claim your free audit
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
