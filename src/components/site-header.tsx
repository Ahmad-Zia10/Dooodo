"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <Link href="/" aria-label="Nanhi AI Mindforge, home" className="shrink-0">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="relative inline-flex h-10 items-center px-3 text-[0.95rem] font-medium text-ink-2 transition-colors hover:text-ink aria-[current=page]:text-ink aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-3 aria-[current=page]:after:-bottom-[15px] aria-[current=page]:after:h-[3px] aria-[current=page]:after:bg-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden min-h-11 items-center rounded-full bg-ink px-5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-erp sm:inline-flex"
          >
            Start a conversation
          </Link>
          <button
            type="button"
            className="inline-grid size-11 place-items-center rounded-full border border-rule lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
              {open ? (
                <path d="M4 4l12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.8" />
              ) : (
                <>
                  <path d="M3 6.5h14" stroke="var(--color-ai)" strokeWidth="2.6" />
                  <path d="M3 13.5h14" stroke="var(--color-erp)" strokeWidth="2.6" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto border-t border-rule bg-surface lg:hidden"
      >
        <nav aria-label="Mobile" className="px-4 py-6 sm:px-6">
          <ul className="divide-y divide-rule border-y border-rule">
            {[{ href: "/", label: "Home" }, ...nav, { href: "/contact", label: "Contact" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center justify-between text-[1.35rem] font-semibold tracking-tight aria-[current=page]:text-erp"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink px-6 font-semibold text-white"
          >
            Start a conversation
          </Link>
        </nav>
      </div>
    </header>
  );
}
