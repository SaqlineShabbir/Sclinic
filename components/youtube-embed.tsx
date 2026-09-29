"use client";

import { useState } from "react";
import { Icon } from "./icons";

/**
 * Lightweight YouTube player: shows a branded poster and only loads the
 * YouTube iframe once the visitor presses play.
 */
export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="star-field group relative flex aspect-video w-full items-center justify-center overflow-hidden text-white"
      aria-label={`Play video: ${title}`}
    >
      <span className="stripes absolute inset-x-0 bottom-0 h-7 opacity-25" />
      <span className="flex size-16 items-center justify-center rounded-full bg-flag-red shadow-lg ring-4 ring-white/30 transition group-hover:scale-110 group-hover:bg-flag-red-dark">
        <Icon name="play" className="ml-1 size-7" />
      </span>
    </button>
  );
}
