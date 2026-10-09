/** Embeds a public Facebook video using Facebook's video player. */
export function FacebookVideo({ url, title }: { url: string; title: string }) {
  return (
    <iframe
      className="aspect-video w-full bg-flag-blue-deep"
      src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=734`}
      title={title}
      loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
