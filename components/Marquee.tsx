const items = [
  "KC Comets",
  "Office Brokers of SWFL",
  "Clean Cuts KC",
  "Show Me Smoke",
  "A1 Fencing",
  "A1 Tint",
];

export default function Marquee() {
  return (
    <section className="py-10 border-y border-white/5 overflow-hidden bg-ink-2/60">
      <p className="text-center text-xs font-bold tracking-widest text-mute-2 uppercase mb-6">Trusted By</p>
      <div className="marquee">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-6 shrink-0">
            <span className="text-2xl md:text-3xl font-black text-white/15 whitespace-nowrap">{item}</span>
            <span className="text-brand text-xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
