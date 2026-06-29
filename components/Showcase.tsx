"use client";
import { motion } from "framer-motion";
import { Reveal } from "./motion";
import { images } from "@/data/images";

export default function Showcase() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-brand text-sm font-bold tracking-widest uppercase mb-3">Our Work</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">Content that moves the needle.</h2>
          <p className="text-mute mt-4 max-w-xl mx-auto">Campaigns, creative, and content we&apos;ve produced for Kansas City brands.</p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {images.gallery.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
              className={`relative overflow-hidden rounded-2xl group ${i % 5 === 0 ? "row-span-2" : ""}`}
              data-cursor
            >
              <img
                src={src}
                alt="Staley Social work"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl group-hover:ring-brand/40 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
