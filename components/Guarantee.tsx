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
              style={{ background: "conic-gradient(from 0deg, transparent, #c9a84c, transparent 30%)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10 bg-[#0b1020] rounded-3xl p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="text-5xl mb-4"
              >
                🛡️
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
                The <span className="shimmer">Staley Guarantee</span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                We guarantee{" "}
                <span className="text-white font-semibold">30% more Google Business Profile views by month 2</span>{" "}
                or your second month is completely free. No fine print. No exceptions. The only agency in Kansas City making this promise.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block mt-8 bg-gold text-navy font-bold px-8 py-4 rounded-full shadow-lg shadow-gold/20"
              >
                Hold Us to It
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
