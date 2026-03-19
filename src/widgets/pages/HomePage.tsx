const cards = [
  {
    title: "FSD-ready structure",
    text: "The template is split into app/processes/widgets/shared layers for predictable growth.",
  },
  {
    title: "OpenAPI code generation",
    text: "Kubb generates typed clients and React Query hooks from your schema.",
  },
  {
    title: "Pragmatic styling",
    text: "Tailwind utilities and SCSS globals work together for fast UI delivery.",
  },
] as const;

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Starter Template</p>
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">Next.js Base Template for Real Projects</h1>
        <p className="max-w-2xl text-slate-300">
          A minimal but scalable baseline with clean architecture, typed API layer, and practical defaults for quick
          product launch.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
            <h2 className="mb-2 text-base font-semibold text-slate-100">{card.title}</h2>
            <p className="text-sm text-slate-300">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
