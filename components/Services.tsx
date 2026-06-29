"use client";
import { Reveal, Stagger, StaggerItem, Tilt } from "./motion";

const services = [
  { icon: "📈", title: "Google Ads & Geofencing", desc: "Precision ad targeting that puts your business in front of buyers the moment they search. Setup, copy, bidding, optimization." },
  { icon: "💻", title: "Website Design & Development", desc: "Fast, modern, conversion-focused websites built to rank and convert. Landing pages to full builds." },
  { icon: "📍", title: "Google Business Profile", desc: "We optimize and manage your GBP so you dominate local search. Guaranteed 30% more views by month 2 or it's free." },
  { icon: "📱", title: "Social Media Management", desc: "Strategy, content, scheduling, and community management across every platform. We run it so you don't have to." },
  { icon: "🎬", title: "Video & Content Production", desc: "Scroll-stopping content that converts. Short-form video, brand films, ads, and creative direction." },
  { icon: "✉️", title: "Email Marketing & SEO", desc: "Long-game growth through search optimization and email campaigns that keep your audience engaged and buying." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">Everything Your Brand Needs</h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">One agency. Six services. Zero hand-holding required from you.</p>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <Tilt className="h-full">
                <div className="glow-card glass rounded-2xl p-8 h-full group">
                  <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">{s.icon}</div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-gold transition-colors">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Tilt>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
