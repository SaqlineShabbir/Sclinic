import Image from "next/image";
import Link from "next/link";
import { Icon, type AnyIcon } from "@/components/icons";
import { ButtonLink, CtaBand, SectionHeading, TrustBadges } from "@/components/ui";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { insurers, offers, services, site, team, testimonials, videos } from "@/lib/site";

const quickActions: { icon: AnyIcon; title: string; text: string; href: string; external?: boolean }[] = [
  { icon: "calendar", title: "Book an Appointment", text: "Same-day visits available", href: "/contact" },
  { icon: "portal", title: "Patient Portal", text: "Results, refills & messages", href: site.portalUrl, external: true },
  { icon: "stethoscope", title: "Find a Service", text: "Primary, urgent & more", href: "/services" },
  { icon: "card", title: "Pricing & Offers", text: "Honest self-pay rates", href: "/offers" },
];

const whyUs = [
  { icon: "clock", title: "Short wait times", text: "Most patients are seen within 20 minutes of arriving." },
  { icon: "shield", title: "Insurance friendly", text: "We accept Medicare, Medicaid, TRICARE and most major plans." },
  { icon: "users", title: "Doctors who listen", text: "Longer appointments so every question gets answered." },
] as const;

export default function Home() {
  const featuredVideo = videos[0];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-b from-white to-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-28 pt-12 sm:px-6 lg:grid-cols-2 lg:pb-36 lg:pt-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-flag-blue-soft px-4 py-1.5 text-sm font-semibold text-flag-blue">
              <Icon name="pin" className="size-4 text-flag-red" />
              Family medicine in {site.address.city}, {site.address.state}
            </p>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] text-flag-blue sm:text-6xl">
              Compassionate care for your <span className="text-flag-red">whole family.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Primary care, urgent care and telehealth under one roof — with board-certified doctors who
              take the time to listen. Walk in today or book a visit in minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">
                <Icon name="calendar" className="size-5" /> Book Appointment
              </ButtonLink>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-flag-blue/20 bg-white px-6 py-3 font-bold text-flag-blue transition hover:border-flag-blue"
              >
                <Icon name="phone" className="size-5" /> {site.phone}
              </a>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {team.slice(0, 3).map((m) => (
                  <Image
                    key={m.name}
                    src={m.image}
                    alt=""
                    width={44}
                    height={44}
                    className="size-11 rounded-full object-cover object-top ring-2 ring-white"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-flag-red" aria-label="Rated 4.9 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" className="size-4" />
                  ))}
                  <span className="ml-1 font-bold text-ink">4.9</span>
                </div>
                <p className="text-muted">from 1,200+ patient reviews</p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Flag accent behind the photo */}
            <div className="stripes absolute -right-4 -top-4 hidden h-40 w-56 rounded-3xl opacity-80 sm:block" aria-hidden="true" />
            <div className="absolute -bottom-4 -left-4 hidden size-32 rounded-3xl bg-flag-blue sm:block" aria-hidden="true" />
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-2xl sm:aspect-5/4">
              <Image
                src="/images/hero-doctor-patient.jpg"
                alt="A doctor at S Clinic reviewing results with a patient"
                fill
                preload
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:right-8">
              <span className="flex size-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Icon name="calendar" className="size-5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">Next available</p>
                <p className="font-bold text-flag-blue">Today · Walk-ins welcome</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick actions */}
      <section className="relative z-10 mx-auto -mt-16 max-w-7xl px-4 sm:px-6">
        <div className="grid gap-4 rounded-3xl bg-white p-4 shadow-xl ring-1 ring-line sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((a, i) => (
            <Link
              key={a.title}
              href={a.href}
              {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`group flex items-center gap-4 rounded-2xl p-4 transition ${
                i === 0 ? "bg-flag-red text-white hover:bg-flag-red-dark" : "hover:bg-paper"
              }`}
            >
              <span
                className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${
                  i === 0 ? "bg-white/15" : "bg-flag-blue-soft text-flag-blue"
                }`}
              >
                <Icon name={a.icon} />
              </span>
              <span className="leading-tight">
                <span className={`block font-bold ${i === 0 ? "" : "text-flag-blue"}`}>{a.title}</span>
                <span className={`text-sm ${i === 0 ? "text-white/80" : "text-muted"}`}>{a.text}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Services"
            title="Complete care for every stage of life"
            intro="From newborn checkups to managing chronic conditions, our team has your family covered."
          />
          <Link href="/services" className="flex shrink-0 items-center gap-2 font-bold text-flag-red hover:text-flag-red-dark">
            View all services <Icon name="arrow" className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="group overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative p-6 pt-8">
                <span className="absolute -top-6 left-6 flex size-12 items-center justify-center rounded-xl bg-white text-flag-red shadow-md ring-1 ring-line">
                  <Icon name={s.icon} />
                </span>
                <h3 className="font-display text-lg font-bold text-flag-blue">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/reception.jpg"
                alt="The bright, modern reception area at S Clinic"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-6 right-6 grid grid-cols-3 divide-x divide-line rounded-2xl bg-white py-5 text-center shadow-lg sm:left-auto sm:right-8 sm:w-96">
              {[
                ["25+", "Years"],
                ["40k", "Patients"],
                ["4.9★", "Rating"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display text-2xl font-extrabold text-flag-blue">{v}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-8 lg:pt-0">
            <SectionHeading
              eyebrow="Why S Clinic"
              title="Hometown values, modern medicine"
              intro="We started as a small family practice and still run like one — with the technology and specialists of a full-service clinic."
            />
            <ul className="mt-8 space-y-6">
              {whyUs.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-flag-red shadow-sm ring-1 ring-line">
                    <Icon name={f.icon} className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-flag-blue">{f.title}</h3>
                    <p className="text-muted">{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href="/about" variant="blue">
                About Our Clinic <Icon name="arrow" className="size-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Providers"
            title="Meet the doctors who care for you"
            intro="Experienced, board-certified and genuinely invested in your health."
          />
          <Link href="/about#team" className="flex shrink-0 items-center gap-2 font-bold text-flag-red hover:text-flag-red-dark">
            Meet the whole team <Icon name="arrow" className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <article key={m.name} className="group">
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-paper">
                <Image
                  src={m.image}
                  alt={`Portrait of ${m.name}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-flag-blue">{m.name}</h3>
              <p className="text-sm font-semibold text-flag-red">{m.role}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <TrustBadges />
        </div>
      </section>

      {/* Offers teaser */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeading
          center
          eyebrow="Special Offers"
          title="Quality care at honest prices"
          intro="Transparent self-pay pricing and seasonal specials for our community."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offers.slice(0, 3).map((o) => (
            <div
              key={o.title}
              className={`rounded-2xl p-8 ${
                o.featured ? "bg-flag-blue text-white shadow-xl" : "border border-line bg-white"
              }`}
            >
              <h3 className={`font-display text-xl font-bold ${o.featured ? "text-white" : "text-flag-blue"}`}>{o.title}</h3>
              <p className="mt-4">
                <span className={`font-display text-5xl font-extrabold ${o.featured ? "text-white" : "text-flag-red"}`}>{o.price}</span>{" "}
                <span className={o.featured ? "text-white/70" : "text-muted"}>{o.priceNote}</span>
              </p>
              <p className={`mt-3 text-sm ${o.featured ? "text-white/80" : "text-muted"}`}>{o.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/offers" variant="outline">See All Offers</ButtonLink>
        </div>
      </section>

      {/* Video + testimonials */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-start lg:py-24">
          <div>
            <SectionHeading eyebrow="Watch & Learn" title={featuredVideo.title} intro={featuredVideo.description} />
            <div className="mt-8 overflow-hidden rounded-2xl shadow-lg">
              <YouTubeEmbed id={featuredVideo.youtubeId} title={featuredVideo.title} />
            </div>
            <Link href="/videos" className="mt-6 inline-flex items-center gap-2 font-bold text-flag-red hover:text-flag-red-dark">
              More health videos <Icon name="arrow" className="size-4" />
            </Link>
          </div>
          <div className="space-y-5">
            <h2 className="font-display text-2xl font-bold text-flag-blue">What our patients say</h2>
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line">
                <div className="flex gap-0.5 text-flag-red" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" className="size-4" />
                  ))}
                </div>
                <blockquote className="mt-3 leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-3 text-sm">
                  <span className="font-bold text-flag-blue">{t.name}</span>{" "}
                  <span className="text-muted">· {t.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
        <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-muted">Insurance plans we accept</p>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {insurers.map((name) => (
            <li key={name} className="rounded-full border border-line bg-white px-5 py-2 text-sm font-semibold text-flag-blue">
              {name}
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
