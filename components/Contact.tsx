"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand text-sm font-bold tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Ready to stop leaving customers on the table?</h2>
          <p className="text-mute mt-4">
            Book a free 15-minute call. We&apos;ll pull up your Google presence live and show you exactly what we&apos;d fix first — no pitch deck, just a real look.
          </p>
        </div>

        {sent ? (
          <div className="glass rounded-2xl p-12 text-center">
            <div className="text-4xl mb-4 text-brand">✓</div>
            <h3 className="text-xl font-bold mb-2">You&apos;re on our radar.</h3>
            <p className="text-mute text-sm">We&apos;ll reach out within 24 hours to set up your free audit.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs text-mute uppercase tracking-wider block mb-2">Name</label>
                <input required type="text" placeholder="Your name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-mute-2 focus:outline-none focus:border-brand/50 transition-colors" />
              </div>
              <div>
                <label className="text-xs text-mute uppercase tracking-wider block mb-2">Business</label>
                <input required type="text" placeholder="Business name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-mute-2 focus:outline-none focus:border-brand/50 transition-colors" />
              </div>
            </div>
            <div>
              <label className="text-xs text-mute uppercase tracking-wider block mb-2">Email</label>
              <input required type="email" placeholder="your@email.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-mute-2 focus:outline-none focus:border-brand/50 transition-colors" />
            </div>
            <div>
              <label className="text-xs text-mute uppercase tracking-wider block mb-2">What are you looking for?</label>
              <textarea rows={4} placeholder="Tell us about your business and goals..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-mute-2 focus:outline-none focus:border-brand/50 transition-colors resize-none" />
            </div>
            <button type="submit" className="w-full bg-brand text-white font-bold py-4 rounded-full hover:bg-brand-light transition-colors text-sm">
              Book My Free Call
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
