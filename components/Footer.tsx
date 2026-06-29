export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 bg-ink">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="text-xl font-bold mb-3 font-display">
              The <span className="brand-gradient">Staley</span> Social
            </div>
            <p className="text-mute text-sm max-w-xs leading-relaxed">
              Kansas City&apos;s full-stack digital marketing agency. Google Ads, social media, web development, and SEO — all under one roof, with results guaranteed in writing.
            </p>
          </div>

          <div>
            <div className="text-xs text-mute-2 uppercase tracking-widest mb-4">Services</div>
            <ul className="space-y-2 text-sm text-mute">
              {["Google Ads", "Social Media", "Website Design", "Google Business", "Video & Content", "Email Marketing"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs text-mute-2 uppercase tracking-widest mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-mute">
              <li>Kansas City, MO</li>
              <li>
                <a href="mailto:jameson@thestaleysocial.com" className="hover:text-brand-light transition-colors">jameson@thestaleysocial.com</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-light transition-colors">Book a free call</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-mute-2 text-xs">&copy; {new Date().getFullYear()} The Staley Social LLC. All rights reserved.</p>
          <p className="text-mute-2 text-xs">Built in Kansas City.</p>
        </div>
      </div>
    </footer>
  );
}
