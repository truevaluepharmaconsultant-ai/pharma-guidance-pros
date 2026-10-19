import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CheckList, PageHeader, SiteLayout } from "@/components/SiteLayout";
import { projects } from "@/lib/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Success Stories — True Value Pharma Consultant" },
      { name: "description", content: "Greenfield, WHO-GMP, Revised Schedule M, ISO 15378 and FAMI-QS projects across Vapi, Silvassa, Sarigam and Valsad." },
      { property: "og:title", content: "Major Consultancy Projects" },
      { property: "og:description", content: "Success stories from pharmaceutical, API, excipient, packaging and veterinary clients." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Success stories" title="Major consultancy projects" sub="Over the past four years we have delivered practical, compliant and sustainable results for pharmaceutical, API, excipient, packaging and veterinary manufacturers." />
      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const done = p.status.toLowerCase().includes("complete") && !p.status.includes("Phase");
          return (
            <Reveal key={p.client} delay={(i % 3) * 100}>
              <article className="card-hover flex h-full flex-col rounded-lg border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">{p.place}</p>
                <h2 className="mt-1 text-xl font-bold text-ink">{p.client}</h2>
                <p className="mt-1 text-sm font-semibold">{p.project}</p>
                <CheckList items={p.scope} />
                <span className={`mt-5 self-start rounded-full px-3 py-1 text-xs font-bold ${done ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}>{p.status}</span>
              </article>
            </Reveal>
          );
        })}
      </section>
    </SiteLayout>
  );
}
