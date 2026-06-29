"use client";
import { Reveal, Stagger, StaggerItem } from "./motion";

const testimonials = [
  { quote: "Jameson built a live prototype in under an hour and presented it side-by-side with our current site. The difference was night and day. He immediately understood our business and came in knowing our weaknesses better than we did.", name: "Brian", title: "Owner, KC Comets", initial: "B" },
  { quote: "We started getting qualified leads in the first week of our Google Ads campaign. Jameson set up conversion tracking so we could see exactly what was working — something our last agency never bothered to do.", name: "Jeff Moore", title: "Owner, Office Brokers of SWFL", initial: "J" },
  { quote: "Built our barber shop from the ground up — website, Google Business, ads, social. We went from zero online presence to showing up first in local searches. The monthly report actually makes sense.", name: "Francisco", title: "Owner, Clean Cuts KC", initial: "F" },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-ink-2/60">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-brand text-sm font-bold tracking-widest uppercase mb-3">Client Stories</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">What our clients say.</h2>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="glow-card glass rounded-2xl p-8 h-full flex flex-col" data-cursor>
                <p className="text-white/80 leading-relaxed mb-6 text-sm flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand/20 text-brand-light font-bold flex items-center justify-center">{t.initial}</div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-mute-2 text-xs">{t.title}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
