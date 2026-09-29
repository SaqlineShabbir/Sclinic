import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "./icons";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
        light ? "text-flag-red-soft" : "text-flag-red"
      }`}
    >
      <span className={`h-0.5 w-6 rounded-full ${light ? "bg-flag-red-soft" : "bg-flag-red"}`} />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center [&>p:first-child]:justify-center" : "max-w-2xl"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 font-display text-3xl font-extrabold text-flag-blue sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

/** Light banner at the top of every inner page, with an optional photo. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <Link href="/" className="hover:text-flag-blue">Home</Link>
            <span className="mx-2">/</span>
            <span className="font-semibold text-flag-blue">{eyebrow}</span>
          </nav>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold text-flag-blue sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>
        </div>
        {image && (
          <div className="relative hidden aspect-4/3 overflow-hidden rounded-3xl shadow-xl lg:block">
            <Image src={image} alt="" fill sizes="(min-width: 1024px) 40vw, 0px" className="object-cover" preload />
          </div>
        )}
      </div>
      <div className="flag-rule" />
    </section>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "red",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "red" | "blue" | "white" | "outline";
}) {
  const styles = {
    red: "bg-flag-red text-white hover:bg-flag-red-dark shadow-sm shadow-flag-red/30",
    blue: "bg-flag-blue text-white hover:bg-flag-blue-dark",
    white: "bg-white text-flag-blue hover:bg-flag-blue-soft",
    outline: "border-2 border-flag-blue/20 text-flag-blue hover:border-flag-blue hover:bg-white",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold transition ${styles}`}
    >
      {children}
    </Link>
  );
}

/** Call-to-action card used near the bottom of pages. */
export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="relative grid overflow-hidden rounded-3xl bg-flag-blue text-white md:grid-cols-[1.4fr_1fr]">
        <div className="relative z-10 p-8 sm:p-12">
          <Eyebrow light>Accepting new patients</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">Ready to feel your best?</h2>
          <p className="mt-3 max-w-md text-white/80">
            Book online or call us — most patients are seen the same day. Walk-ins are always welcome.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">
              Book Appointment <Icon name="arrow" className="size-4" />
            </ButtonLink>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 font-bold transition hover:border-white hover:bg-white/10"
            >
              <Icon name="phone" className="size-4" /> {site.phone}
            </a>
          </div>
        </div>
        <div className="relative min-h-56">
          <Image src="/images/care-hands.jpg" alt="" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-flag-blue via-flag-blue/30 to-transparent md:bg-linear-to-r" />
        </div>
      </div>
    </section>
  );
}

/** Row of trust signals shown on several pages. */
export function TrustBadges() {
  const badges = [
    { icon: "award", title: "Board-certified", text: "Physicians & NPs" },
    { icon: "calendar", title: "Same-day visits", text: "Walk-ins welcome" },
    { icon: "shield", title: "Most insurance", text: "Medicare & TRICARE" },
    { icon: "users", title: "All ages", text: "Newborn to seniors" },
  ] as const;
  return (
    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {badges.map((b) => (
        <li key={b.title} className="flex items-center gap-3">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-flag-blue-soft text-flag-blue">
            <Icon name={b.icon} className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-bold text-flag-blue">{b.title}</span>
            <span className="text-sm text-muted">{b.text}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
