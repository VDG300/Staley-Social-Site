"use client";
import { Reveal, Stagger, StaggerItem, Tilt } from "./motion";

const services = [
  { icon: "📈", color: "text-brand", title: "Google Ads & Geofencing", desc: "Stop bleeding budget on clicks that never convert. We rebuild your campaigns from the ground up — geofencing, bid strategy, conversion tracking, and monthly reporting you can actually read." },
  { icon: "💻", color: "text-purple", title: "Website Design & Development", desc: "A website that looks great but doesn't convert is just a digital brochure. We build fast, mobile-first sites designed to turn visitors into paying customers." },
  { icon: "📍", color: "text-teal", title: "Google Business Profile", desc: "The fastest ROI in local digital marketing. We optimize your GBP listing so you show up in the Local 3-Pack, get more calls, and convert searchers into customers — in 30-90 days." },
  { icon: "📱", color: "text-green", title: "Social Media Management", desc: "Content that actually looks like your brand. We handle 4-5 posts per week across Instagram, Facebook, TikTok, and X — plus Reels, player spotlights, gameday content, and UGC campaigns." },
  { icon: "🎬", color: "text-red", title: "Video & Content Production", desc: "Short-form video gets 2.5x more engagement. We produce Reels, TikToks, brand videos, and behind-the-scenes content — scripted, shot, and edited by our in-house creative team." },
  { icon: "✉️", color: "text-brand-light", title: "Email Marketing & SEO", desc: "Segmented email sequences, gameday campaigns, automated nurture flows — paired with on-page SEO, Google Business optimization, and keyword targeting that drives long-term organic traffic." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-brand text-sm font-bold tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">Everything your business needs.</h2>
          <p className="text-mute mt-4 max-w-2xl mx-auto">One team. Zero handoffs. We don&apos;t outsource your account to a junior rep — you work directly with the team, and you see exactly what&apos;s working every month.</p>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <Tilt className="h-full">
                <div className="glow-card glass rounded-2xl p-8 h-full group" data-cursor>
                  <div className={`text-3xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6 ${s.color}`}>{s.icon}</div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-brand-light transition-colors">{s.title}</h3>
                  <p className="text-mute text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Tilt>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
