export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-light" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm text-white/60">
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          Kansas City&apos;s Full-Stack Marketing Agency
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6">
          We Don&apos;t Just Post.
          <br />
          <span className="gold-gradient">We Grow Brands.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          Google Ads, social media, web development, SEO, and video production,
          all under one roof. Built for businesses that are serious about results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-gold-light transition-colors text-base"
          >
            Book Your Free Audit
          </a>
          <a
            href="#results"
            className="glass border border-white/10 text-white font-medium px-8 py-4 rounded-full hover:border-gold/40 transition-colors text-base"
          >
            See Our Results
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { stat: "30%", label: "More GBP views, guaranteed" },
            { stat: "90", label: "Days to measurable growth" },
            { stat: "KC", label: "Rooted in Kansas City" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl font-black gold-gradient">{item.stat}</div>
              <div className="text-xs text-white/40 mt-1 leading-tight">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
