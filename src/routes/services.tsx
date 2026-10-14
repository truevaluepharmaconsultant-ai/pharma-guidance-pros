import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Expertise — True Value Pharma Consultant" },
      { name: "description", content: "Greenfield projects, plant modernization, WHO-GMP, Revised Schedule M, FAMI-QS, plant engineering, regulatory compliance and QMS." },
      { property: "og:title", content: "Our Expertise — True Value Pharma Consultant" },
      { property: "og:description", content: "End-to-end pharmaceutical plant and compliance consulting services." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Core Expertise" title="What we do" sub="Complete consulting for pharmaceutical facilities — design, engineering, compliance and quality." />
      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-6 md:grid-cols-2">
        {services.map((s, i) => (
          <div key={s.title} className="flex gap-5 rounded-lg border bg-card p-6">
            <span className="font-display text-3xl font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h2 className="text-xl font-bold text-ink">{s.title}</h2>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
