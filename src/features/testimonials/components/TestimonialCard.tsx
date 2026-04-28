interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  result: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Marcus T.",
    role: "Owner",
    company: "Peak HVAC Services",
    quote:
      "I was skeptical about spending money on a website, but the results spoke for themselves. We tripled our leads in 3 months. Best investment I've made in the business.",
    result: "312% increase in organic traffic",
  },
  {
    name: "Priya L.",
    role: "Broker",
    company: "Riverstone Realty Group",
    quote:
      "Our agents save hours every week now. Clients can search, save, and schedule viewings on their own. The portal paid for itself in the first month.",
    result: "8 hrs/week saved per agent",
  },
  {
    name: "David K.",
    role: "Founder",
    company: "Retail Commerce Group",
    quote:
      "Going from zero online revenue to $18K a month was surreal. The team understood our brand from day one and built something that actually converts.",
    result: "$0 to $18K/month online revenue",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="site-shell">
        <div className="flex items-center gap-3 mb-12">
          <span className="eyebrow-line" />
          <span className="section-label">Client Results</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="surface-panel relative overflow-hidden p-6"
            >
              {/* Quote mark */}
              <span className="absolute top-4 right-5 font-display text-6xl text-lime/10 leading-none select-none">
                "
              </span>

              <p className="font-body text-sm text-cream leading-relaxed mb-6 relative z-10">
                "{t.quote}"
              </p>

              <div className="border-t border-white/10 pt-4">
                <p className="font-display text-sm font-bold text-cream">{t.name}</p>
                <p className="font-body text-xs text-cream-muted mt-0.5">
                  {t.role}, {t.company}
                </p>
                <p className="font-body text-xs text-lime font-medium mt-3">
                  ✦ {t.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
