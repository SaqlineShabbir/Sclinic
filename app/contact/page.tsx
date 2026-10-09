import type { Metadata } from "next";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Book an appointment or get in touch with ${site.name}.`,
};

export default function ContactPage() {
  const { address } = site;

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We're here to help"
        intro="Request an appointment, ask a question, or stop by — our friendly front desk team is ready for you."
        image="/images/reception.jpg"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.6fr]">
        <aside className="space-y-6">
          <ContactCard icon="phone" title="Call us">
            <a href={site.phoneHref} className="text-lg font-bold text-flag-blue hover:text-flag-red">{site.phone}</a>
            <p className="text-sm text-muted">Call to book or ask a question</p>
          </ContactCard>
          <ContactCard icon="mail" title="Email us">
            <a href={`mailto:${site.email}`} className="break-all font-bold text-flag-blue hover:text-flag-red">{site.email}</a>
            <p className="text-sm text-muted">We reply within one business day</p>
          </ContactCard>
          <ContactCard icon="pin" title="Visit us">
            <p className="font-bold text-flag-blue">
              {address.street}
              <br />
              {address.city}, {address.state} {address.zip}
            </p>
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-flag-red px-4 py-2 text-sm font-bold text-white hover:bg-flag-red-dark"
            >
              <Icon name="pin" className="size-4" /> Get Directions
            </a>
          </ContactCard>
          <ContactCard icon="clock" title="Hours">
            <dl className="space-y-1 text-sm">
              {site.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4">
                  <dt className="font-semibold text-ink">{h.days}</dt>
                  <dd className="text-muted">{h.time}</dd>
                </div>
              ))}
            </dl>
          </ContactCard>
        </aside>

        <div className="rounded-2xl border border-flag-blue/10 bg-white p-6 shadow-sm sm:p-10">
          <div className="flag-rule -mx-6 -mt-6 mb-8 rounded-t-2xl sm:-mx-10 sm:-mt-10" />
          <h2 className="font-display text-3xl font-bold text-flag-blue">Request an appointment</h2>
          <p className="mt-2 text-muted">Fill out the form and we&rsquo;ll call you to confirm a time.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section aria-label="Map" className="border-t border-flag-blue/10">
        <iframe
          title={`Map of ${site.name}`}
          src={site.mapEmbedUrl}
          className="h-96 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}

function ContactCard({
  icon,
  title,
  children,
}: {
  icon: "phone" | "mail" | "pin" | "clock";
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl bg-paper p-6">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-flag-red text-white">
        <Icon name={icon} className="size-5" />
      </span>
      <div className="space-y-1">
        <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-muted">{title}</h3>
        {children}
      </div>
    </div>
  );
}
