const services = [
  {
    icon: "📈",
    title: "Google Ads & Geofencing",
    desc: "Precision ad targeting that puts your business in front of buyers the moment they search. We handle setup, copy, bidding, and optimization.",
  },
  {
    icon: "💻",
    title: "Website Design & Development",
    desc: "Fast, modern, conversion-focused websites built to rank and convert. From landing pages to full builds.",
  },
  {
    icon: "📍",
    title: "Google Business Profile",
    desc: "We optimize and manage your GBP so you dominate local search. Guaranteed 30% more views by month 2 or month 2 is free.",
  },
  {
    icon: "📱",
    title: "Social Media Management",
    desc: "Strategy, content creation, scheduling, and community management across all platforms. We run it so you don't have to.",
  },
  {
    icon: "🎬",
    title: "Video & Content Production",
    desc: "Scroll-stopping content that converts. Short-form video, brand films, ads, and creative direction for every platform.",
  },
  {
    icon: "✉️",
    title: "Email Marketing & SEO",
    desc: "Long-game growth through search optimization and email campaigns that keep your audience engaged and buying.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-black">
            Everything Your Brand Needs
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">
            One agency. Six services. Zero hand-holding required from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass rounded-2xl p-8 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-gold transition-colors">
                {s.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
