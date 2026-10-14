import { createFileRoute } from "@tanstack/react-router";
import { CheckList, PageHeader, SiteLayout } from "@/components/SiteLayout";
import { partners, phases } from "@/lib/site";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Methodology & Partners — True Value Pharma Consultant" },
      { name: "description", content: "Our six-phase project methodology from requirement study to certification readiness, and our strategic partners." },
      { property: "og:title", content: "Project Execution Methodology" },
      { property: "og:description", content: "From concept to compliance — a structured six-phase approach." },
    ],
  }),
  component: Approach,
});

const docs = ["SOP Preparation", "Validation Documents", "Qualification Documents", "Regulatory Documentation", "GMP Documentation"];

function Approach() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Our methodology" title="From concept to compliance" sub="A structured approach so every project is delivered efficiently, compliantly and sustainably." />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <ol className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {phases.map((p, i) => (
            <li key={p} className="rounded-lg border-t-4 border-accent bg-card p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Phase {i + 1}</p>
              <p className="mt-2 font-semibold text-ink">{p}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">Strategic partnerships</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {partners.map((p) => (
              <div key={p.name} className="rounded-lg bg-card p-6"><h3 className="text-lg font-bold text-ink">{p.name}</h3><CheckList items={p.items} /></div>
            ))}
            <div className="rounded-lg bg-card p-6"><h3 className="text-lg font-bold text-ink">Documentation Support Team</h3><CheckList items={docs} /></div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
