import type { Metadata } from "next";
import { FacebookVideo } from "@/components/facebook-video";
import { Icon } from "@/components/icons";
import { CtaBand, PageHero } from "@/components/ui";
import { site, videos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Videos",
  description: `Health tips and clinic videos from ${site.name}.`,
};

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Videos"
        title="Health tips from our clinic"
        intro="Short, practical videos to help you stay healthy and get to know our practice."
        image="/images/svc-telehealth.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        {videos.length > 0 && (
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            {videos.map((v) => (
              <article key={v.facebookUrl} className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
                <FacebookVideo url={v.facebookUrl} title={v.title} />
                <div className="p-6">
                  <h2 className="font-display text-xl font-bold text-flag-blue">{v.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="flex flex-col items-center gap-4 rounded-3xl bg-flag-blue-soft px-6 py-14 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-flag-blue text-white">
            <Icon name="play" className="ml-1 size-7" />
          </span>
          <h2 className="font-display text-2xl font-bold text-flag-blue">
            {videos.length > 0 ? "See more on Facebook" : "Watch our videos on Facebook"}
          </h2>
          <p className="max-w-lg text-muted">
            Follow {site.name} on Facebook for health tips, clinic updates and new videos.
          </p>
          <a
            href={site.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-flag-red px-6 py-3 font-bold text-white hover:bg-flag-red-dark"
          >
            Visit our Facebook page <Icon name="arrow" className="size-4" />
          </a>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
