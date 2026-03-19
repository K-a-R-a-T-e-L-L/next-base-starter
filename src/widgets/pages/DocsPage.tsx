const docsItems = [
  "Update OpenAPI schema in openapi.json or use remote schema in kubb config.",
  "Run npm run generate to refresh clients and hooks.",
  "Implement business logic in widgets/features and call generated hooks there.",
  "Keep shared layer framework-agnostic where possible.",
] as const;

export default function DocsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Workflow Notes</h1>
      <p className="max-w-3xl text-slate-300">
        Follow this baseline workflow to keep the project predictable while requirements evolve.
      </p>
      <ol className="list-decimal space-y-2 pl-5 text-slate-300 marker:text-cyan-300">
        {docsItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </section>
  );
}
