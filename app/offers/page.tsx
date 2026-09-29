import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { CtaBand, PageHero } from "@/components/ui";
import { offers, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Special Offers",
  description: `Transparent self-pay pricing and seasonal specials at ${site.name}.`,
};

export default function OffersPage() {
  return (
    <>
      <PageHero
        eyebrow="Special Offers"
        title="Honest prices. No surprises."
        intro="Uninsured or on a high-deductible plan? Our self-pay specials make quality care affordable for every family."
        image="/images/svc-vaccines.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((o) => (
            <article
              key={o.title}
              className={`relative flex flex-col rounded-2xl p-8 ${
                o.featured
                  ? "bg-flag-blue text-white shadow-2xl ring-4 ring-flag-red"
                  : "border border-flag-blue/10 bg-white shadow-sm"
              }`}
            >
              {o.featured && (
                <span className="absolute -top-3.5 left-8 rounded-full bg-flag-red px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </span>
              )}
              <h2 className={`font-display text-2xl font-bold ${o.featured ? "" : "text-flag-blue"}`}>{o.title}</h2>
              <p className="mt-4 flex items-baseline gap-2">
                <span className={`font-display text-5xl font-bold ${o.featured ? "" : "text-flag-red"}`}>{o.price}</span>
                <span className={o.featured ? "text-white/70" : "text-muted"}>{o.priceNote}</span>
              </p>
              <p className={`mt-3 ${o.featured ? "text-white/80" : "text-muted"}`}>{o.description}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {o.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Icon name="check" className={`mt-0.5 size-4 shrink-0 ${o.featured ? "text-flag-red-soft" : "text-flag-red"}`} />
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className={`mt-6 rounded-lg border-2 border-dashed px-4 py-2 text-center text-sm ${
                  o.featured ? "border-white/40" : "border-flag-blue/25"
                }`}
              >
                Use code <strong className="font-mono tracking-wider">{o.code}</strong>
              </div>
              <Link
                href={`/contact?offer=${o.code}`}
                className={`mt-4 rounded-full px-6 py-3 text-center font-bold transition ${
                  o.featured
                    ? "bg-white text-flag-blue hover:bg-flag-blue-soft"
                    : "bg-flag-red text-white hover:bg-flag-red-dark"
                }`}
              >
                Claim Offer
              </Link>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-xs leading-relaxed text-muted">
          Offers apply to self-pay patients unless stated otherwise and cannot be combined. Lab work
          beyond what is listed is billed separately. Prices subject to change. Please mention your
          code when booking.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
