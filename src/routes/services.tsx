import { createFileRoute } from "@tanstack/react-router";
import { CheckList, PageHeader, SiteLayout } from "@/components/SiteLayout";
import { serviceGroups } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Consultancy Services — True Value Pharma Consultant" },
      { name: "description", content: "Project consultancy, facility design, regulatory compliance, QMS (ISO 9001, ISO 15378, FAMI-QS), documentation & validation and GMP training." },
      { property: "og:title", content: "Pharmaceutical Consultancy Services" },
      { property: "og:description", content: "Integrated consultancy across the full pharmaceutical project lifecycle." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Our consultancy services" title="Comprehensive pharmaceutical solutions" sub="Integrated services covering the complete lifecycle — concept, design and regulatory planning through implementation, certification and continuous improvement." />
      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {serviceGroups.map((g, i) => (
          <div key={g.title} className="rounded-lg border bg-card p-6">
            <span className="font-display text-3xl font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="mt-2 text-xl font-bold text-ink">{g.title}</h2>
            <CheckList items={g.items} />
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
