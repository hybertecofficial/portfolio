import { SectionHeader } from "@/components/shared/SectionHeader";
import { PricingTable } from "@/features/pricing/components/PricingTable";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Flexible monthly plans for web development, SEO, and web application builds. No surprise invoices.",
};

const serviceDetails = [
  {
    category: "Marketing & Lead Gen",
    icon: "◈",
    items: [
      "Custom Next.js marketing sites (5–20 pages)",
      "Mobile-first, accessibility-compliant builds",
      "On-page SEO + structured data (JSON-LD)",
      "Google Business Profile optimization",
      "Contact forms, lead capture, CRM integration",
      "99+ Lighthouse performance scores",
    ],
  },
  {
    category: "Web Applications",
    icon: "⬡",
    items: [
      "Client portals and internal dashboards",
      "Authentication (Clerk / Auth0 / Supabase)",
      "Role-based access control (RBAC)",
      "Third-party API integrations",
      "Admin panels with content management",
      "Supabase / PostgreSQL database design",
    ],
  },
  {
    category: "SaaS Architecture",
    icon: "◎",
    items: [
      "Multi-tenant platform design",
      "Stripe billing with subscription tiers",
      "Usage-based and seat-based pricing models",
      "Proration, failed payment handling",
      "Webhook infrastructure",
      "TypeScript monorepo (Turborepo)",
    ],
  },
  {
    category: "Ongoing Retainers",
    icon: "◐",
    items: [
      "Hosting & SSL management",
      "Performance monitoring & optimization",
      "Security patches and dependency updates",
      "Monthly analytics reporting",
      "Content updates and new page builds",
      "Priority support SLA",
    ],
  },
];

const faqs = [
  {
    q: "Do I have to commit to a long-term contract?",
    a: "Our standard plans are month-to-month after the initial 3-month onboarding period. The Growth and Scale plans include a 12-month option at a discount.",
  },
  {
    q: "What happens if I need more pages than my plan includes?",
    a: "Additional pages are available as add-ons. We'll scope the work and give you a clear quote before any extra charges apply.",
  },
  {
    q: "Do you work with businesses outside of Georgia?",
    a: "Absolutely. We work with businesses across the US. Most of our discovery and review sessions happen via video call and async communication.",
  },
  {
    q: "Who owns the code and the website?",
    a: "You do. All deliverables — code, design assets, and content — are fully transferred to you upon project completion or at any point you cancel your plan.",
  },
  {
    q: "How long does a new website take?",
    a: "Starter sites typically launch in 2–3 weeks. Growth-tier sites with more pages and integrations take 4–6 weeks. Custom web apps are scoped individually.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-5 h-px bg-lime" />
            <span className="section-label">Services</span>
          </div>
          <h1 className="font-display font-800 text-5xl md:text-7xl text-cream leading-tight mb-6">
            Everything your web
            <br />
            presence needs —
            <br />
            <span className="text-lime">monthly, not once.</span>
          </h1>
          <p className="font-body text-cream-muted text-lg max-w-xl leading-relaxed">
            We replace the anxiety of big one-time invoices with predictable monthly
            plans that keep your site growing, secure, and performing.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Capabilities"
            title="What we actually build"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceDetails.map((service) => (
              <div
                key={service.category}
                className="p-6 rounded-2xl bg-surface border border-border"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl text-lime">{service.icon}</span>
                  <h3 className="font-display font-700 text-lg text-cream">
                    {service.category}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-lime text-sm mt-0.5 flex-shrink-0">✓</span>
                      <span className="font-body text-sm text-cream-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Pricing"
            title="Simple plans, no surprises"
            subtitle="All plans are billed monthly. Cancel anytime after the initial 3-month onboarding period."
            align="center"
            className="mb-12"
          />
          <PricingTable />

          <p className="text-center font-body text-xs text-cream-muted mt-8">
            Need something custom?{" "}
            <Link href="/contact" className="text-lime hover:underline">
              Let's talk
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            label="FAQ"
            title="Common questions"
            align="center"
            className="mb-12"
          />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-2xl bg-surface border border-border"
              >
                <h4 className="font-display font-700 text-base text-cream mb-2">
                  {faq.q}
                </h4>
                <p className="font-body text-sm text-cream-muted leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display font-800 text-3xl md:text-5xl text-cream mb-4">
            Not sure which plan fits?
          </h2>
          <p className="font-body text-cream-muted mb-8 max-w-md mx-auto">
            Book a free 30-minute call and we'll figure out exactly what you need — no pressure.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-lime text-bg font-body font-600 text-base hover:bg-lime-dim transition-colors"
          >
            Book a Free Discovery Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
