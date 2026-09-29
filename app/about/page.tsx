import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { site, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.name}, our mission, our values and the team who cares for you.`,
};

const values = [
  { icon: "heart", title: "Compassion", text: "Every patient is treated like family — with dignity, patience and respect." },
  { icon: "shield", title: "Integrity", text: "Honest advice, transparent pricing and no surprise bills." },
  { icon: "users", title: "Community", text: "We're your neighbors. We sponsor local schools, sports and veteran programs." },
  { icon: "star", title: "Excellence", text: "Board-certified providers and continuous training in modern medicine." },
] as const;

const milestones = [
  { year: "2001", text: "Dr. Carter opens a two-room family practice on Liberty Avenue." },
  { year: "2009", text: "Urgent care wing opens with on-site X-ray and lab." },
  { year: "2016", text: "Pediatrics and women's health departments added." },
  { year: "2020", text: "Telehealth launched, serving patients across the state." },
  { year: "Today", text: "A team of 40+ caring for over 40,000 patients." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A family practice built on American values"
        intro={`For more than two decades, ${site.name} has provided honest, neighborly healthcare to the families of ${site.address.city} and beyond.`}
        image="/images/reception.jpg"
      />

      {/* Mission */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/svc-chronic.jpg"
            alt="A physician talking with a patient during a visit"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <SectionHeading eyebrow="Our Mission" title="Accessible, personal care for everyone" />
          <p>
            We believe great healthcare starts with a relationship. That&rsquo;s why our providers take the
            time to know you, your family and your goals — not just your symptoms.
          </p>
          <p>
            Whether you walk in with a fever on a Saturday, need a sports physical before the season, or
            want help managing a chronic condition, you&rsquo;ll find the same warm welcome and expert care.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <SectionHeading center eyebrow="Our Values" title="What we stand for" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-flag-blue/10">
                <span
                  className={`mx-auto flex size-14 items-center justify-center rounded-full ${
                    i % 2 === 0 ? "bg-flag-blue text-white" : "bg-flag-red text-white"
                  }`}
                >
                  <Icon name={v.icon} />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-flag-blue">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="mx-auto max-w-7xl scroll-mt-32 px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Our Team"
          title="Meet your care providers"
          intro="Experienced, board-certified and genuinely invested in your health."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <article key={m.name} className="overflow-hidden rounded-2xl border border-line bg-white">
              <div className="relative aspect-4/5 bg-paper">
                <Image
                  src={m.image}
                  alt={`Portrait of ${m.name}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-flag-blue">{m.name}</h3>
                <p className="text-sm font-semibold text-flag-red">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="star-field text-white">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Our story</h2>
          <ol className="mt-12 space-y-8 border-l-2 border-flag-red pl-8">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[41px] top-1 flex size-5 items-center justify-center rounded-full bg-white">
                  <span className="size-2.5 rounded-full bg-flag-red" />
                </span>
                <p className="font-display text-2xl font-bold text-flag-red-soft">{m.year}</p>
                <p className="mt-1 text-white/85">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
