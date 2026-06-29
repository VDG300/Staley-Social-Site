"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "@/data/images";

export default function CityBand() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative h-[60vh] overflow-hidden flex items-center justify-center">
      <motion.img
        src={images.cityBand}
        alt="Kansas City"
        style={{ y }}
        className="absolute inset-0 w-full h-[124%] object-cover"
      />
      <div className="absolute inset-0 bg-ink/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <p className="text-brand text-sm font-bold tracking-widest uppercase mb-4">Kansas City Owned &amp; Operated</p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
          We know this city. <br />
          <span className="brand-gradient">We grow with it.</span>
        </h2>
        <p className="text-mute mt-6 max-w-xl mx-auto">
          From the Comets to the corner barber shop, we build local brands that show up first and get remembered.
        </p>
      </motion.div>
    </section>
  );
}
