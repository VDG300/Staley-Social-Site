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
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Get Started</p>
          <h2 className="text-4xl md:text-5xl font-black">Book Your Free Audit</h2>
          <p className="text-white/40 mt-4">
            No pitch, no pressure. We audit your current setup and show you exactly where the opportunities are.
          </p>
        </div>

        {sent ? (
          <div className="glass rounded-2xl p-12 text-center gold-border">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-bold mb-2">You&apos;re on our radar.</h3>
            <p className="text-white/50 text-sm">We&apos;ll reach out within 24 hours to schedule your audit.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs text-white/40 uppercase tracking-wider block mb-2">Name</label>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-white/40 uppercase tracking-wider block mb-2">Business</label>
                <input
                  required
                  type="text"
                  placeholder="Business name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-white/40 uppercase tracking-wider block mb-2">Email</label>
              <input
                required
                type="email"
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-gold/40 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-white/40 uppercase tracking-wider block mb-2">What are you looking for?</label>
              <textarea
                rows={4}
                placeholder="Tell us about your business and goals..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-gold/40 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gold text-navy font-bold py-4 rounded-full hover:bg-gold-light transition-colors text-sm"
            >
              Request My Free Audit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
