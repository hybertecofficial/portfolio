import Link from "next/link";
import { BrandMark } from "@/components/shared/BrandMark";

const footerLinks = {
  Services: [
    { href: "/services", label: "Services" },
    { href: "/services#pricing", label: "Pricing" },
    { href: "/contact", label: "Project inquiry" },
  ],
  Company: [
    { href: "/portfolio", label: "Case studies" },
  ],
};

export function Footer() {
  return (
    <footer className="pb-10 pt-20">
      <div className="site-shell">
        <div className="surface-panel overflow-hidden">
          <div className="grid gap-12 px-6 py-10 md:grid-cols-[1.3fr_0.7fr_0.7fr] md:px-10">
            <div className="max-w-lg">
              <div className="mb-5">
                <BrandMark />
              </div>

              <p className="max-w-md text-sm leading-7 text-cream-muted">
                We help businesses turn scattered freelance requests into a dependable
                software and website delivery process, from landing pages to custom
                internal tools.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-cream-muted">
                <span>Based in the US</span>
                <span>Fast turnarounds</span>
                <span>Ongoing support</span>
              </div>
            </div>

            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-cream-muted">
                  {section}
                </p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-cream-muted transition-colors hover:text-cream"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 px-6 py-5 md:px-10">
            <div className="flex flex-col gap-3 text-sm text-cream-muted md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} HyberTec. Built for service businesses that need reliable digital execution.</p>
              <p>Websites, software, and retainers with clear scope and communication.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
