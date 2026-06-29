export default function Guarantee() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-px">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/40 via-gold-light/20 to-gold/40 rounded-3xl" />
          <div className="relative bg-navy-light rounded-3xl p-12 text-center">
            <div className="text-5xl mb-4">🛡️</div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              The <span className="gold-gradient">Staley Guarantee</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              We guarantee{" "}
              <span className="text-white font-semibold">
                30% more Google Business Profile views by month 2
              </span>{" "}
              or your second month is completely free. No fine print. No
              exceptions. We&apos;re the only agency in Kansas City making this
              promise.
            </p>
            <a
              href="#contact"
              className="inline-block mt-8 bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-gold-light transition-colors"
            >
              Hold Us to It
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
