const steps = [
  {
    num: "01",
    title: "Free Audit",
    desc: "We dig into your current digital presence, ads, SEO, social, and GBP and find exactly where you're leaving money on the table.",
  },
  {
    num: "02",
    title: "Custom Game Plan",
    desc: "No cookie-cutter packages. We build a 90-day strategy specific to your business goals, market, and budget.",
  },
  {
    num: "03",
    title: "Build & Launch",
    desc: "We execute fast. Campaigns, content, and systems go live while you stay focused on running your business.",
  },
  {
    num: "04",
    title: "Scale & Report",
    desc: "Monthly reporting with real numbers. We double down on what's working and cut what isn't.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-black">Our 90-Day Process</h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">
            From zero to measurable growth in 90 days. Here&apos;s exactly how we do it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-gold/30 to-transparent z-10" />
              )}
              <div className="glass rounded-2xl p-8 h-full">
                <div className="text-4xl font-black gold-gradient mb-4">{s.num}</div>
                <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
