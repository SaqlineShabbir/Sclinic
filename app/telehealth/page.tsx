import type { Metadata } from "next";
import Image from "next/image";
import { Icon, type AnyIcon } from "@/components/icons";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { doctor, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Telehealth",
  description: `Secure video visits with ${doctor.name} at ${site.name} — see the doctor from home.`,
};

const conditions = [
  "Follow-up visits",
  "Medication refills & reviews",
  "Cold, flu & allergy symptoms",
  "Lab & test result reviews",
  "Blood pressure & diabetes check-ins",
  "Minor skin concerns & rashes",
  "Urinary tract symptoms",
  "General health questions",
];

const steps: { icon: AnyIcon; title: string; text: string }[] = [
  { icon: "calendar", title: "Request a visit", text: `Call ${site.phone} or send a request online and choose “Telehealth”.` },
  { icon: "mail", title: "Get your link", text: "We'll send you a secure video link by text or email before your appointment." },
  { icon: "video", title: "Meet the doctor", text: `Join from your phone, tablet or computer and talk with ${doctor.shortName} face to face.` },
];

const needs: { icon: AnyIcon; text: string }[] = [
  { icon: "portal", text: "A smartphone, tablet or computer with a camera" },
  { icon: "bolt", text: "A stable internet or mobile data connection" },
  { icon: "shield", text: "Your insurance card and a list of current medications" },
  { icon: "users", text: "A quiet, private place for your visit" },
];

export default function TelehealthPage() {
  return (
    <>
      <PageHero
        eyebrow="Telehealth"
        title="See the doctor from the comfort of home"
        intro={`Secure video visits with ${doctor.name} — no waiting room, no commute. Ideal for follow-ups and common health concerns.`}
        image="/images/svc-telehealth.jpg"
      />

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading center eyebrow="How It Works" title="Three simple steps" />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-line bg-white p-8 shadow-sm">
              <span className="absolute right-6 top-6 font-display text-5xl font-extrabold text-flag-blue/10">{i + 1}</span>
              <span className="flex size-12 items-center justify-center rounded-xl bg-flag-red text-white">
                <Icon name={s.icon} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-flag-blue">{s.title}</h3>
              <p className="mt-2 text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* What we treat */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Good for Telehealth"
              title="What we can help with by video"
              intro="Many common concerns can be handled without an office visit. If you need an in-person exam, we'll schedule one for you."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {conditions.map((c) => (
                <li key={c} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 font-medium text-ink shadow-sm ring-1 ring-line">
                  <Icon name="check" className="size-5 shrink-0 text-flag-red" /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/hero-doctor-patient.jpg"
              alt="A doctor speaking with a patient"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* What you need */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <SectionHeading eyebrow="Before Your Visit" title="What you'll need" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {needs.map((n) => (
              <li key={n.text} className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-flag-blue-soft text-flag-blue">
                  <Icon name={n.icon} className="size-5" />
                </span>
                <p className="font-medium text-ink">{n.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 rounded-2xl bg-flag-red-soft px-6 py-4 text-sm text-flag-red-dark">
          <strong>Telehealth is not for emergencies.</strong> If you have chest pain, trouble breathing, severe bleeding or
          another emergency, call <strong>911</strong> or go to the nearest emergency room.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
