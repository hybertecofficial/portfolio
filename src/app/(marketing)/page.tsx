import Link from "next/link";
import { getFeaturedProjects } from "@/features/portfolio/data/projects";
import { CaseStudyCard } from "@/features/portfolio/components/CaseStudyCard";
import { SectionHeader } from "@/components/shared/SectionHeader";

const trustPoints = [
  "Clear scope before work starts",
  "Fast communication and revisions",
  "Websites and internal tools under one roof",
];

const stats = [
  { value: "40+", label: "projects delivered" },
  { value: "1", label: "partner for design, build, and support" },
  { value: "48 hrs", label: "typical response window on active work" },
];

const services = [
  {
    title: "Business websites",
    description:
      "Modern marketing sites for businesses that need to look credible, explain their offer clearly, and convert more visitors into leads.",
  },
  {
    title: "Custom software",
    description:
      "Client portals, internal dashboards, intake workflows, and operational tools that reduce manual back-and-forth.",
  },
  {
    title: "Freelance overflow support",
    description:
      "A reliable execution partner when requests keep piling up and you need someone who can actually deliver across design and development.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <section className="pb-20 pt-12 sm:pt-20">
        <div className="site-shell">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl pt-3 sm:pt-4 lg:-mt-4">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-lime/20 bg-lime/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-lime" />
                <span className="text-xs font-medium uppercase tracking-[0.24em] text-lime">
                  Taking on new website and software work
                </span>
              </div>

              <h1 className="font-display text-5xl font-bold leading-[0.96] tracking-tight text-cream md:text-7xl">
                Clean websites.
                <br />
                Useful software.
                <br />
                <span className="text-lime">Less chaos in the middle.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-cream-muted md:text-xl">
                HyberTec builds websites and simple software for businesses that
                need clear execution without the extra noise.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="button-primary">
                  Start a Project
                </Link>
                <Link href="/services" className="button-secondary">
                  See Services
                </Link>
              </div>

              <div className="mt-10 flex flex-col gap-3 text-sm text-cream-muted">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-lime/25 bg-lime/10 text-xs text-lime">
                      ✓
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-panel relative overflow-hidden p-5 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-lime/10 to-transparent" />

              <div className="relative">
                <div className="rounded-[24px] border border-white/10 bg-bg/60 p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-cream-muted">
                        Best fit
                      </p>
                      <p className="mt-2 font-display text-xl font-bold text-cream">
                        Service businesses that need dependable digital execution
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                      <p className="text-sm font-semibold text-cream">Most common requests</p>
                      <p className="mt-2 text-sm leading-6 text-cream-muted">
                        Website redesigns, lead generation pages, booking flows,
                        client dashboards, internal admin tools, and ongoing support.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-2xl border border-white/10 bg-white/[0.03] p-3"
                        >
                          <p className="font-display text-2xl font-bold text-lime">
                            {stat.value}
                          </p>
                          <p className="mt-2 text-xs leading-5 text-cream-muted">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="site-shell">
          <SectionHeader
            label="Services"
            title="What we build"
            className="mb-12"
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="surface-panel p-6 sm:p-7">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime/10 text-lg text-lime">
                  +
                </div>
                <h3 className="font-display text-2xl font-bold text-cream">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-cream-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="site-shell">
          <div className="mb-12 flex items-end justify-between gap-6">
            <SectionHeader
              label="Selected Work"
              title="Recent examples"
            />
            <Link href="/portfolio" className="button-secondary hidden whitespace-nowrap md:inline-flex">
              View all work
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featured.map((project, index) => (
              <CaseStudyCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8 pt-16">
        <div className="site-shell">
          <div className="surface-panel relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-lime/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="lime-badge">Ready when you are</span>
                <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-cream md:text-5xl">
                  Have a website or software request?
                </h2>
                <p className="mt-4 text-base leading-8 text-cream-muted">
                  Start with a conversation about what needs to be shipped first.
                </p>
              </div>

              <Link href="/contact" className="button-primary">
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
