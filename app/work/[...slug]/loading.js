export default function WorkDetailLoading() {
  return (
    <article
      aria-label="Loading project"
      aria-live="polite"
      className="animate-pulse"
      data-testid="work-detail-loading"
    >
      <div className="mt-1 h-9 w-2/3 rounded bg-brand-plum-dark/15" />
      <div className="mt-3 h-5 w-1/3 rounded bg-brand-plum-dark/10" />
      <div className="mt-4 flex gap-2">
        <div className="h-8 w-8 rounded-full bg-brand-plum-dark/10" />
        <div className="h-8 w-8 rounded-full bg-brand-plum-dark/10" />
        <div className="h-8 w-8 rounded-full bg-brand-plum-dark/10" />
      </div>
      <div className="mt-8 space-y-3">
        <div className="h-4 rounded bg-brand-plum-dark/10" />
        <div className="h-4 w-11/12 rounded bg-brand-plum-dark/10" />
        <div className="h-4 w-4/5 rounded bg-brand-plum-dark/10" />
      </div>
      <span className="sr-only">Loading project details…</span>
    </article>
  );
}
