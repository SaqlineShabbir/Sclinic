import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Primary care, urgent care, pediatrics, women's health, telehealth and more at ${site.name}.`,
};

const steps = [
  { title: "Book or walk in", text: "Schedule online, call us, or simply walk in during open hours." },
  { title: "See your provider", text: "Unhurried visits with a board-certified doctor or nurse practitioner." },
  { title: "Follow-up care", text: "Results, prescriptions and next steps — all in your patient portal." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything your family needs, under one roof"
        intro="Comprehensive medical care for adults and children — in person or by secure video."
        image="/images/svc-primary.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s) => (
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
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionHeading center eyebrow="How It Works" title="Getting care is simple" />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-flag-blue/10">
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

      <CtaBand />
    </>
  );
}
