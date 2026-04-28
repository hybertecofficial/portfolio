import { SectionHeader } from "@/components/shared/SectionHeader";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "A Gwinnett County-based web development agency helping local and national businesses scale through user-friendly web platforms.",
};

const values = [
  {
    title: "Outcomes over outputs",
    desc: "We don't celebrate shipping a page. We celebrate what that page does for your business — leads, revenue, retention.",
  },
  {
    title: "Built to last",
    desc: "Every project uses modern, maintainable code. No page builders, no tech debt — just clean Next.js you can hand off to any developer.",
  },
  {
    title: "Radical transparency",
    desc: "You always know what we're working on, what it costs, and how it's performing. Weekly previews, monthly reports.",
  },
  {
    title: "Long-term partnership",
    desc: "We're not here for a handoff. Our retainer model keeps us invested in your growth every single month.",
  },
];

const stack = [
  "Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui",
  "Supabase", "Prisma", "Clerk", "Stripe",
  "Vercel", "Turborepo", "Resend", "Mapbox",
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-20 pb-24 border-b border-border relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #B8FF47 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-5 h-px bg-lime" />
            <span className="section-label">About</span>
          </div>
          <h1 className="font-display font-800 text-5xl md:text-7xl text-cream leading-tight mb-6 max-w-4xl">
            We build web platforms
            <br />
            that do{" "}
            <span className="text-lime italic">real work</span>
            <br />
            for your business.
          </h1>
          <p className="font-body text-cream-muted text-lg max-w-xl leading-relaxed">
            Based in Gwinnett County, Georgia — working with businesses across the
            US. We combine engineering rigor with conversion-focused design to build
            digital platforms that scale.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                label="Our Story"
                title="Started local. Built for scale."
                className="mb-6"
              />
              <div className="space-y-4 font-body text-cream-muted text-base leading-relaxed">
                <p>
                  HyberTec started from watching local businesses in Gwinnett
                  County get left behind — not because their products weren't great,
                  but because their web presence didn't reflect them. They were losing
                  to competitors with better websites, not better services.
                </p>
                <p>
                  We set out to fix that. Not with overpriced agency retainers or
                  cookie-cutter templates, but with production-grade web platforms
                  built the way software companies build — modular, fast, and
                  engineered to grow with the business.
                </p>
                <p>
                  Today we work with businesses in home services, real estate,
                  professional services, e-commerce, and beyond. Local and non-local.
                  The common thread: they're ready to scale and they need a web
                  partner who gets it.
                </p>
              </div>
            </div>

            {/* Highlight box */}
            <div className="rounded-3xl bg-surface border border-border p-8 space-y-6">
              {[
                { value: "2022", label: "Founded" },
                { value: "40+", label: "Projects shipped" },
                { value: "Gwinnett Co.", label: "Home base" },
                { value: "US-wide", label: "Client reach" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between pb-6 border-b border-border last:pb-0 last:border-0">
                  <span className="font-body text-sm text-cream-muted">{item.label}</span>
                  <span className="font-display font-700 text-xl text-cream">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="How We Work"
            title="The principles behind every build"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-surface border border-border">
                <h3 className="font-display font-700 text-lg text-lime mb-2">{v.title}</h3>
                <p className="font-body text-sm text-cream-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Tech Stack"
            title="Modern tools, not magic"
            subtitle="We use the same tools that top-tier software companies use. Everything is open, documented, and maintainable."
            className="mb-12"
          />
          <div className="flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-surface border border-border font-body text-sm text-cream-muted hover:border-lime/30 hover:text-cream transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display font-800 text-3xl md:text-4xl text-cream mb-4">
            Let's build something together.
          </h2>
          <p className="font-body text-cream-muted mb-8 max-w-md mx-auto">
            Whether you're starting from scratch or overhauling an existing site — we'd love to hear about your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-lime text-bg font-body font-600 hover:bg-lime-dim transition-colors"
            >
              Start a Conversation
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-border text-cream font-body font-500 hover:border-lime/30 hover:text-lime transition-colors"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
