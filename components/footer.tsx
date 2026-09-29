import Link from "next/link";
import { navLinks, services, site } from "@/lib/site";
import { Icon, Logo } from "./icons";

export function Footer() {
  const { address } = site;
  return (
    <footer className="mt-auto bg-flag-blue-deep text-white/80">
      <div className="flag-rule" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Logo className="size-10" />
            <span className="font-display text-xl font-bold text-white">{site.name}</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed">{site.description}</p>
          <div className="mt-5 flex gap-3">
            {Object.entries(site.social).map(([name, href]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold capitalize hover:border-white hover:text-white"
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-white">Visit Us</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <Icon name="pin" className="mt-0.5 size-5 shrink-0 text-flag-red-soft" />
              <span>
                {address.street}
                <br />
                {address.city}, {address.state} {address.zip}
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" className="size-5 shrink-0 text-flag-red-soft" />
              <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="size-5 shrink-0 text-flag-red-soft" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-white/60 sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            In a medical emergency, call <strong className="text-white">911</strong> or go to the nearest emergency room.
          </p>
        </div>
      </div>
    </footer>
  );
}
