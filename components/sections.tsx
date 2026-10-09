import Image from "next/image";
import { doctor, insurers, reviews, site } from "@/lib/site";
import { GoogleLogo, Icon } from "./icons";
import { ButtonLink, Eyebrow, SectionHeading } from "./ui";

function Stars({ className = "size-5" }: { className?: string }) {
  return (
    <span className="flex gap-0.5 text-amber-400" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className={className} />
      ))}
    </span>
  );
}

export function DoctorSection() {
  return (
    <section id="doctor" className="scroll-mt-32 bg-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[2fr_3fr] lg:items-center lg:py-24">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="stripes absolute -right-4 -top-4 h-32 w-40 rounded-3xl opacity-80" aria-hidden="true" />
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-flag-blue shadow-xl">
            {doctor.photo ? (
              <Image
                src={doctor.photo}
                alt={`Portrait of ${doctor.name}`}
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="object-cover object-top"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-white">
                <span className="flex size-36 items-center justify-center rounded-full bg-white font-display text-5xl font-extrabold text-flag-blue">
                  {doctor.initials}
                </span>
                <Icon name="stethoscope" className="size-8 text-white/70" />
              </div>
            )}
          </div>
          <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-2xl bg-white px-5 py-3 text-center shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Certified by the</p>
            <p className="font-bold text-flag-blue">American Board of Family Medicine</p>
          </div>
        </div>

        <div className="pt-6 lg:pt-0">
          <Eyebrow>Your Physician</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-flag-blue sm:text-4xl">Meet {doctor.name}</h2>
          <p className="mt-2 font-semibold text-flag-red">{doctor.title}</p>
          <p className="mt-5 text-lg leading-relaxed text-muted">{doctor.bio}</p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {doctor.credentials.map((c) => (
              <div key={c.label} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-line">
                <dt className="text-xs font-bold uppercase tracking-wider text-flag-red">{c.label}</dt>
                <dd className="mt-1 font-semibold text-flag-blue">{c.text}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <ButtonLink href="/contact">
              Book with {doctor.shortName} <Icon name="arrow" className="size-4" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InsuranceSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHeading
        center
        eyebrow="Insurance Accepted"
        title="We accept most major plans"
        intro="Not sure if your plan is covered? Call us and our staff will check for you."
      />
      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
        {insurers.map((ins) => (
          <li
            key={ins.name}
            className="flex h-28 items-center justify-center rounded-2xl border border-line bg-white p-4 text-center shadow-sm"
          >
            {ins.logo ? (
              <Image src={ins.logo} alt={ins.name} width={200} height={80} unoptimized className="h-auto w-full max-w-44" />
            ) : (
              <span className="flex flex-col items-center gap-2">
                <Icon name="shield" className="size-6 text-flag-red" />
                <span className="font-display text-sm font-bold leading-tight text-flag-blue">{ins.name}</span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function GoogleReviews() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Patient Reviews" title="What our patients say" />
          <a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-line transition hover:shadow-md"
          >
            <GoogleLogo className="size-10" />
            <span>
              <span className="flex items-center gap-2">
                <span className="font-display text-2xl font-extrabold text-ink">5.0</span>
                <Stars />
              </span>
              <span className="text-sm text-muted">Rated 5/5 on Google</span>
            </span>
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="relative flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-line">
              <span className="absolute right-6 top-4 font-display text-7xl leading-none text-flag-red/15" aria-hidden="true">
                &ldquo;
              </span>
              <Stars className="size-4" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-ink">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-flag-blue font-bold text-white">
                  {r.name.charAt(0)}
                </span>
                <span className="flex-1 leading-tight">
                  <span className="block font-bold text-flag-blue">{r.name}</span>
                  <span className="text-xs text-muted">Google review</span>
                </span>
                <GoogleLogo className="size-5" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VisitUs() {
  const { address } = site;
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-sm lg:grid-cols-2">
        <div className="p-8 sm:p-12">
          <Eyebrow>Visit Us</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-flag-blue">Conveniently located in Jamaica, Queens</h2>
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-flag-red-soft text-flag-red">
                <Icon name="pin" className="size-5" />
              </span>
              <p className="font-semibold text-flag-blue">
                {address.street}
                <br />
                {address.city}, {address.state} {address.zip}
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-flag-red-soft text-flag-red">
                <Icon name="phone" className="size-5" />
              </span>
              <a href={site.phoneHref} className="font-semibold text-flag-blue hover:text-flag-red">{site.phone}</a>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-flag-red-soft text-flag-red">
                <Icon name="mail" className="size-5" />
              </span>
              <a href={`mailto:${site.email}`} className="break-all font-semibold text-flag-blue hover:text-flag-red">{site.email}</a>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-flag-red px-6 py-3 font-bold text-white shadow-sm transition hover:bg-flag-red-dark"
            >
              <Icon name="pin" className="size-5" /> Get Directions
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-flag-blue/20 px-6 py-3 font-bold text-flag-blue transition hover:border-flag-blue"
            >
              <Icon name="phone" className="size-5" /> Call Us
            </a>
          </div>
        </div>
        <iframe
          title={`Map of ${site.name}`}
          src={site.mapEmbedUrl}
          className="min-h-80 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
