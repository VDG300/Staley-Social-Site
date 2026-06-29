"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setEnabled(true);
      document.body.style.cursor = "none";
    } else return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement;
      setActive(!!el.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        style={{ left: sx, top: sy }}
        className="pointer-events-none fixed z-[100] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: active ? 2.6 : 1, opacity: active ? 0.5 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-3 h-3 rounded-full bg-gold"
        />
      </motion.div>
      <motion.div
        style={{ left: x, top: y }}
        className="pointer-events-none fixed z-[100] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: active ? 1.5 : 1 }}
          className="w-9 h-9 rounded-full border border-gold/40"
        />
      </motion.div>
    </>
  );
}
