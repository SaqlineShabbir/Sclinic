import { Icon } from "@/components/icons";
import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <Icon name="star" className="size-12 text-flag-red" />
      <h1 className="mt-6 font-display text-5xl font-bold text-flag-blue">Page not found</h1>
      <p className="mt-4 text-lg text-muted">Sorry, we couldn&rsquo;t find the page you were looking for.</p>
      <div className="mt-8">
        <ButtonLink href="/">Back to Home</ButtonLink>
      </div>
    </section>
  );
}
