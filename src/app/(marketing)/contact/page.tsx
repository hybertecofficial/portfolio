"use client";

import { useState } from "react";

const contactReasons = [
  "New website build",
  "Web application / portal",
  "SaaS platform",
  "Monthly retainer",
  "Just exploring",
];

export default function ContactPage() {
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to your email/form provider (Resend, Formspree, etc.)
    setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
      <section className="pt-20 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-5 h-px bg-lime" />
            <span className="section-label">Contact</span>
          </div>
          <h1 className="font-display text-5xl font-bold leading-tight text-cream mb-4 md:text-6xl">
            Let's talk about
            <br />
            your <span className="text-lime italic">next build.</span>
          </h1>
          <p className="font-body text-cream-muted text-lg max-w-md leading-relaxed">
            Fill out the form below or email us directly. We respond to every
            inquiry within one business day.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left — contact details */}
            <div>
              <div className="space-y-6 mb-10">
                {[
                  {
                    label: "Email",
                    value: "hello@hybertec.com",
                    href: "mailto:hello@hybertec.com",
                  },
                  {
                    label: "Location",
                    value: "Gwinnett County, Georgia",
                    href: null,
                  },
                  {
                    label: "Response Time",
                    value: "Within 1 business day",
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-body text-xs text-cream-muted tracking-widest uppercase mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-body text-base text-cream hover:text-lime transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-body text-base text-cream">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* What to expect */}
              <div className="p-6 rounded-2xl bg-surface border border-border">
                <h3 className="font-display mb-4 text-base font-bold text-cream">
                  What happens after you reach out?
                </h3>
                <ol className="space-y-3">
                  {[
                    "We review your message and respond within 1 business day.",
                    "If it's a good fit, we schedule a free 30-min discovery call.",
                    "We put together a clear scope and plan — no surprise costs.",
                    "We get to work.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 font-display text-sm font-bold text-lime">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-body text-sm text-cream-muted leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl bg-surface border border-lime/30">
                  <span className="text-5xl mb-4">✦</span>
                  <h3 className="font-display mb-2 text-2xl font-bold text-lime">
                    Message received.
                  </h3>
                  <p className="font-body text-cream-muted text-sm max-w-xs">
                    Thanks for reaching out. We'll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-xs text-cream-muted tracking-widest uppercase mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-cream font-body text-sm placeholder-cream-muted/50 focus:outline-none focus:border-lime/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs text-cream-muted tracking-widest uppercase mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-cream font-body text-sm placeholder-cream-muted/50 focus:outline-none focus:border-lime/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Business */}
                  <div>
                    <label className="block font-body text-xs text-cream-muted tracking-widest uppercase mb-2">
                      Business / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Your Business LLC"
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-cream font-body text-sm placeholder-cream-muted/50 focus:outline-none focus:border-lime/50 transition-colors"
                    />
                  </div>

                  {/* Reason */}
                  <div>
                    <label className="block font-body text-xs text-cream-muted tracking-widest uppercase mb-2">
                      What are you looking for? *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {contactReasons.map((reason) => (
                        <button
                          key={reason}
                          type="button"
                          onClick={() => setSelected(reason)}
                          className={`px-3.5 py-2 rounded-xl border text-sm font-body transition-all ${
                            selected === reason
                              ? "border-lime bg-lime/10 text-lime"
                              : "border-border text-cream-muted hover:border-lime/30 hover:text-cream"
                          }`}
                        >
                          {reason}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block font-body text-xs text-cream-muted tracking-widest uppercase mb-2">
                      Monthly Budget
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-cream font-body text-sm focus:outline-none focus:border-lime/50 transition-colors">
                      <option value="">Select a range...</option>
                      <option>Under $300/mo</option>
                      <option>$300 – $700/mo</option>
                      <option>$700 – $1,500/mo</option>
                      <option>$1,500+/mo</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-body text-xs text-cream-muted tracking-widest uppercase mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="What does your business do, what are you trying to achieve online, and what's your timeline?"
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-cream font-body text-sm placeholder-cream-muted/50 focus:outline-none focus:border-lime/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-lime py-3.5 text-base font-semibold text-bg transition-colors hover:bg-lime-dim"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
