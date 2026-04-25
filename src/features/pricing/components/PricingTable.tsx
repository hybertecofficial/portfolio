import Link from "next/link";

interface PricingPlan {
  name: string;
  label: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    label: "Good",
    price: "$297",
    period: "/mo",
    description:
      "Perfect for small local businesses needing a professional online presence.",
    features: [
      "5-page marketing website",
      "Mobile-first responsive design",
      "Google Analytics setup",
      "Basic on-page SEO",
      "Contact form + email notifications",
      "Monthly performance report",
      "Hosting & SSL included",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    label: "Better",
    price: "$697",
    period: "/mo",
    description:
      "For established businesses ready to generate consistent leads online.",
    features: [
      "Everything in Starter",
      "Up to 15 pages + blog",
      "Advanced local SEO strategy",
      "Lead capture & CRM integration",
      "Google Business Profile optimization",
      "A/B landing page testing",
      "Priority support (24hr response)",
      "Quarterly strategy call",
    ],
    cta: "Most Popular",
    highlight: true,
  },
  {
    name: "Scale",
    label: "Best",
    price: "$1,497",
    period: "/mo",
    description:
      "Full-stack web platform for businesses scaling to enterprise operations.",
    features: [
      "Everything in Growth",
      "Custom web app / client portal",
      "Multi-tenant SaaS architecture",
      "API integrations (CRM, ERP, etc.)",
      "Role-based access control",
      "Advanced analytics dashboard",
      "Dedicated Slack channel",
      "Weekly strategy & reporting calls",
    ],
    cta: "Let's Talk",
    highlight: false,
  },
];

export function PricingTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-2xl p-6 border transition-all ${
            plan.highlight
              ? "bg-lime/5 border-lime/40 shadow-[0_0_40px_rgba(184,255,71,0.08)]"
              : "bg-surface border-border"
          }`}
        >
          {plan.highlight && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="lime-badge">Most Popular</span>
            </div>
          )}

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="section-label">{plan.label}</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-cream">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="font-display text-4xl font-bold text-cream">{plan.price}</span>
              <span className="font-body text-cream-muted text-sm">{plan.period}</span>
            </div>
            <p className="font-body text-sm text-cream-muted mt-3 leading-relaxed">
              {plan.description}
            </p>
          </div>

          <Link
            href="/contact"
            className={`mb-6 block w-full rounded-xl py-3 text-center text-sm font-body font-semibold transition-colors ${
              plan.highlight
                ? "bg-lime text-bg hover:bg-lime-dim"
                : "bg-surface-2 text-cream border border-border hover:border-lime/30 hover:text-lime"
            }`}
          >
            {plan.cta}
          </Link>

          <ul className="space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <span className="text-lime mt-0.5 text-sm flex-shrink-0">✓</span>
                <span className="font-body text-sm text-cream-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
