import type { Metadata } from "next";
import { Icon } from "@/components/icons";
import { CtaBand, PageHero } from "@/components/ui";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { site, videos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Videos",
  description: `Health tips, patient guides and clinic tours from the ${site.name} YouTube channel.`,
};

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="YouTube Videos"
        title="Health tips from our doctors"
        intro="Short, practical videos to help you prepare for visits, stay healthy and get to know our team."
        image="/images/svc-telehealth.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <article key={v.youtubeId} className="overflow-hidden rounded-2xl border border-flag-blue/10 bg-white shadow-sm">
              <YouTubeEmbed id={v.youtubeId} title={v.title} />
              <div className="p-6">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="rounded-full bg-flag-red-soft px-3 py-1 text-flag-red">{v.category}</span>
                  <span className="text-muted">{v.duration}</span>
                </div>
                <h2 className="mt-4 font-display text-xl font-bold text-flag-blue">{v.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl bg-flag-blue-soft px-6 py-10 text-center">
          <h2 className="font-display text-2xl font-bold text-flag-blue">Never miss a new video</h2>
          <p className="max-w-lg text-muted">Subscribe to our YouTube channel for weekly health tips from our providers.</p>
          <a
            href={site.youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-flag-red px-6 py-3 font-bold text-white hover:bg-flag-red-dark"
          >
            <Icon name="play" className="size-4" /> Subscribe on YouTube
          </a>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
