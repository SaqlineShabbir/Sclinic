import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { InsuranceSection } from "@/components/sections";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Primary care, urgent care, telehealth, vaccinations, lab work, chronic health and physical examinations at ${site.name}.`,
};

const steps = [
  { title: "Call or book online", text: `Call ${site.phone} or send us an appointment request.` },
  { title: "See the doctor", text: "An unhurried visit with a board-certified physician — in person or by video." },
  { title: "Follow-up care", text: "Clear next steps, prescriptions and results explained in plain language." },
];

export default function ServicesPage() {
  const physicals = services.find((s) => s.slug === "physical-examinations")!;
  const others = services.filter((s) => s !== physicals);

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything your family needs, under one roof"
        intro="Comprehensive medical care for adults — in person or by secure video."
        image="/images/svc-primary.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {others.map((s) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid scroll-mt-40 overflow-hidden rounded-2xl border border-line bg-white transition hover:shadow-lg sm:grid-cols-[2fr_3fr]"
            >
              <div className="relative aspect-16/10 sm:aspect-auto">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 20vw, (min-width: 640px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <span className="flex size-11 items-center justify-center rounded-xl bg-flag-red-soft text-flag-red">
                  <Icon name={s.icon} />
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold text-flag-blue">{s.title}</h2>
                <p className="mt-2 leading-relaxed text-muted">{s.summary}</p>
                <ul className="mt-4 space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm font-medium text-ink">
                      <Icon name="check" className="size-4 text-flag-red" /> {d}
                    </li>
                  ))}
                </ul>
                {s.slug === "telehealth" && (
                  <Link href="/telehealth" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-flag-red hover:text-flag-red-dark">
                    Learn about telehealth <Icon name="arrow" className="size-4" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Physical examinations — one service, five types */}
        <article
          id={physicals.slug}
          className="mt-8 grid scroll-mt-40 overflow-hidden rounded-3xl bg-flag-blue text-white shadow-xl lg:grid-cols-[2fr_3fr]"
        >
          <div className="relative min-h-64">
            <Image src={physicals.image} alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <div className="p-8 sm:p-12">
            <span className="flex size-12 items-center justify-center rounded-xl bg-white/15">
              <Icon name={physicals.icon} />
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold">{physicals.title}</h2>
            <p className="mt-3 max-w-xl text-white/80">{physicals.summary}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {physicals.details.map((d) => (
                <li key={d} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 font-semibold">
                  <Icon name="check" className="size-5 text-flag-red-soft" /> {d}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-flag-blue transition hover:bg-flag-blue-soft"
            >
              Schedule a Physical <Icon name="arrow" className="size-4" />
            </Link>
          </div>
        </article>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionHeading center eyebrow="How It Works" title="Getting care is simple" />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-line">
                <span className="flex size-12 items-center justify-center rounded-full bg-flag-red font-display text-xl font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-flag-blue">{step.title}</h3>
                <p className="mt-2 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <InsuranceSection />
      <CtaBand />
    </>
  );
}
