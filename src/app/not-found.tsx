import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="eyebrow">Not Found</p>
        <h1 className="section-title">That page is not part of the new route map.</h1>
        <p className="section-copy mx-auto pt-5">
          If this was an old WordPress URL, the final launch should route it through the redirect
          map. For now, return to a core page.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/" className="button-primary">
            Go home
          </Link>
          <Link href="/service/" className="button-secondary">
            Browse services
          </Link>
        </div>
      </div>
    </section>
  );
}
