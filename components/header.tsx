"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";
import { Icon, Logo } from "./icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-flag-blue-dark text-white/90 text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
          <p className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-400" aria-hidden="true" />
            <span className="font-semibold">Accepting new patients</span>
            <span className="hidden text-white/60 md:inline">· Mon–Fri 8am–7pm · Sat 9am–3pm</span>
          </p>
          <div className="flex items-center gap-5">
            <a href={site.portalUrl} className="hidden items-center gap-1.5 hover:text-white sm:flex">
              <Icon name="portal" className="size-4" /> Patient Portal
            </a>
            <a href={site.phoneHref} className="flex items-center gap-1.5 font-semibold hover:text-white">
              <Icon name="phone" className="size-4" />
              <span className="hidden sm:inline">{site.phone}</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-flag-blue/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Logo className="size-10" />
            <span className="leading-tight">
              <span className="block font-display text-xl font-extrabold text-flag-blue">{site.name}</span>
              <span className="block text-xs font-medium text-muted">Family Medical Center</span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative rounded-md px-3 py-2 text-[15px] font-semibold transition-colors ${
                        active ? "text-flag-red" : "text-ink hover:text-flag-blue"
                      }`}
                    >
                      {link.label}
                      {active && (
                        <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-flag-red" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden rounded-full bg-flag-red px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-flag-red-dark sm:inline-block"
            >
              Book Appointment
            </Link>
            <button
              type="button"
              className="rounded-md p-2 text-flag-blue hover:bg-flag-blue-soft lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-nav" aria-label="Mobile" className="border-t border-flag-blue/10 lg:hidden">
            <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
              {navLinks.map((link) => {
                const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-md px-3 py-3 font-semibold ${
                        active ? "bg-flag-red-soft text-flag-red" : "text-ink hover:bg-flag-blue-soft"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-flag-red px-5 py-3 text-center font-bold text-white"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
      <div className="flag-rule" />
    </header>
  );
}
