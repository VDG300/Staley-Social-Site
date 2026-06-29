export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 bg-navy">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="text-xl font-bold mb-3">
              The <span className="gold-gradient">Staley</span> Social
            </div>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              Kansas City&apos;s full-stack marketing agency. We grow brands through strategy, content, and systems that work.
            </p>
          </div>

          <div>
            <div className="text-xs text-white/30 uppercase tracking-widest mb-4">Services</div>
            <ul className="space-y-2 text-sm text-white/50">
              {["Google Ads", "Social Media", "Web Development", "Video Production", "SEO", "Email Marketing"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs text-white/30 uppercase tracking-widest mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-white/50">
              <li>Kansas City, MO</li>
              <li>
                <a href="mailto:gevon@thestaleysocial.com" className="hover:text-gold transition-colors">
                  gevon@thestaleysocial.com
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} The Staley Social. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">Kansas City, MO</p>
        </div>
      </div>
    </footer>
  );
}
