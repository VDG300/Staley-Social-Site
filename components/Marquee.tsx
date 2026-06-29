const items = [
  "Google Ads",
  "Social Media",
  "Web Development",
  "SEO",
  "Video Production",
  "Email Marketing",
  "Geofencing",
  "Brand Strategy",
];

export default function Marquee() {
  return (
    <section className="py-10 border-y border-white/5 overflow-hidden bg-navy/40">
      <div className="marquee">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-6 shrink-0">
            <span className="text-2xl md:text-3xl font-black text-white/15 whitespace-nowrap">
              {item}
            </span>
            <span className="text-gold text-xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
