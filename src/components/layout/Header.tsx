"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BrandMark } from "@/components/shared/BrandMark";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="site-shell">
        <div className="surface-panel flex h-16 items-center justify-between px-4 sm:px-5">
          <BrandMark compact onClick={() => setOpen(false)} />

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                    active
                      ? "bg-white/[0.06] text-cream"
                      : "text-cream-muted hover:bg-white/[0.04] hover:text-cream"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact" className="button-primary">
              Start a Project
            </Link>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-cream md:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transition-all",
                  open && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transition-all",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transition-all",
                  open && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>

        {open && (
          <div className="surface-panel mt-3 border-white/10 px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                      active
                        ? "bg-white/[0.06] text-cream"
                        : "text-cream-muted hover:bg-white/[0.04] hover:text-cream"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link href="/contact" onClick={() => setOpen(false)} className="button-primary mt-2">
                Start a Project
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
