export default function AboutPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">About This Template</h1>
      <p className="max-w-3xl text-slate-300">
        This starter focuses on architecture and maintainability from day one. You get typed API clients, a ready
        provider layer, modular page composition, and consistent conventions for future features.
      </p>
      <ul className="list-disc space-y-2 pl-5 text-slate-300 marker:text-cyan-300">
        <li>App Router with route groups and reusable shell.</li>
        <li>React Query provider configured for sane defaults.</li>
        <li>Dedicated shared layer for infrastructure and cross-cutting modules.</li>
      </ul>
    </section>
  );
}
