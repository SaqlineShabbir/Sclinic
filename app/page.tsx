import Image from "next/image";
import Link from "next/link";
import { FacebookVideo } from "@/components/facebook-video";
import { Icon, type AnyIcon } from "@/components/icons";
import { DoctorSection, GoogleReviews, InsuranceSection, VisitUs } from "@/components/sections";
import { ButtonLink, CtaBand, SectionHeading, TrustBadges } from "@/components/ui";
import { doctor, services, site, videos } from "@/lib/site";

const quickActions: { icon: AnyIcon; title: string; text: string; href: string; external?: boolean }[] = [
  { icon: "calendar", title: "Book an Appointment", text: "Request a visit online", href: "/contact" },
  { icon: "video", title: "Telehealth Visit", text: "See the doctor from home", href: "/telehealth" },
  { icon: "stethoscope", title: "Our Services", text: "Primary, urgent & physicals", href: "/services" },
  { icon: "pin", title: "Get Directions", text: `${site.address.city}, Queens`, href: site.directionsUrl, external: true },
];

const whyUs = [
  { icon: "users", title: "Personal attention", text: "Dr. Hossain takes the time to listen and fully understand your concerns." },
  { icon: "shield", title: "Insurance accepted", text: "Medicare, Medicaid, EmblemHealth, Fidelis Care, Healthfirst, Aetna and Anthem." },
  { icon: "video", title: "Telehealth available", text: "Secure video visits for follow-ups and minor concerns — no travel needed." },
] as const;

export default function Home() {
  const featured = services.filter((s) => s.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-b from-white to-paper">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-28 pt-12 sm:px-6 lg:grid-cols-2 lg:pb-36 lg:pt-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-flag-blue-soft px-4 py-1.5 text-sm font-semibold text-flag-blue">
              <Icon name="pin" className="size-4 text-flag-red" />
              {site.tagline}
            </p>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] text-flag-blue sm:text-6xl">
              Compassionate care for your <span className="text-flag-red">whole family.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Primary care, urgent care, physicals and telehealth with {doctor.name}, a board-certified
              physician who takes the time to listen.
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
          </div>

          <div className="relative">
            <div className="stripes absolute -right-4 -top-4 hidden h-40 w-56 rounded-3xl opacity-80 sm:block" aria-hidden="true" />
            <div className="absolute -bottom-4 -left-4 hidden size-32 rounded-3xl bg-flag-blue sm:block" aria-hidden="true" />
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-2xl sm:aspect-5/4">
              <Image
                src="/images/hero-doctor-patient.jpg"
                alt="A doctor reviewing results with a patient"
                fill
                preload
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:right-8">
              <span className="flex size-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Icon name="video" className="size-5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">Can&rsquo;t come in?</p>
                <Link href="/telehealth" className="font-bold text-flag-blue hover:text-flag-red">
                  Telehealth visits available
                </Link>
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
              className={`flex items-center gap-4 rounded-2xl p-4 transition ${
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

      {/* Featured services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Services"
            title="Complete care for you and your family"
            intro="From routine check-ups to managing chronic conditions, we have you covered."
          />
          <Link href="/services" className="flex shrink-0 items-center gap-2 font-bold text-flag-red hover:text-flag-red-dark">
            View all services <Icon name="arrow" className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <Link
              key={s.slug}
              href={s.slug === "telehealth" ? "/telehealth" : `/services#${s.slug}`}
              className="group overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-16/9 overflow-hidden">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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

      <DoctorSection />

      {/* Why us */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/reception.jpg"
            alt="A bright, modern clinic reception area"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow={`Why ${site.shortName}`}
            title="Hometown values, modern medicine"
            intro="A neighborhood family practice where you're treated like a person, not a number."
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
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <TrustBadges />
        </div>
      </section>

      <GoogleReviews />
      <InsuranceSection />

      {videos.length > 0 && (
        <section className="bg-paper">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading eyebrow="Watch & Learn" title="Videos from our clinic" />
              <Link href="/videos" className="flex shrink-0 items-center gap-2 font-bold text-flag-red hover:text-flag-red-dark">
                All videos <Icon name="arrow" className="size-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {videos.slice(0, 2).map((v) => (
                <div key={v.facebookUrl} className="overflow-hidden rounded-2xl shadow-lg">
                  <FacebookVideo url={v.facebookUrl} title={v.title} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <VisitUs />
      <CtaBand />
    </>
  );
}
