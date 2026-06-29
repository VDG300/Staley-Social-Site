const testimonials = [
  {
    quote:
      "The Staley Social completely transformed our online presence. Their strategy is sharp and the results speak for themselves.",
    name: "Client A",
    title: "Business Owner",
  },
  {
    quote:
      "We started generating quality leads within the first month. The team is responsive, professional, and actually delivers.",
    name: "Client B",
    title: "CEO",
  },
  {
    quote:
      "Best marketing investment we've made. They understand our brand and execute at a level most agencies can't touch.",
    name: "Client C",
    title: "Founder",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-navy-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-black">What Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-8">
              <div className="text-gold text-3xl mb-4">&ldquo;</div>
              <p className="text-white/70 leading-relaxed mb-6 text-sm">{t.quote}</p>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-white/40 text-xs">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
