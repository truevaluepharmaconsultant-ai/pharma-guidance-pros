import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — True Value Pharma Consultant" },
      { name: "description", content: "Who we are: pharmaceutical plant consultants focused on compliance, engineering and quality." },
      { property: "og:title", content: "About True Value Pharma Consultant" },
      { property: "og:description", content: "Pharmaceutical plant consultants focused on compliance, engineering and quality." },
    ],
  }),
  component: About,
});

const values = [
  ["Compliance first", "Every design decision is checked against WHO-GMP, Revised Schedule M and applicable standards."],
  ["Practical engineering", "Solutions that are buildable, cost-effective and easy to operate."],
  ["End-to-end support", "From concept and layout to qualification, documentation and inspection readiness."],
];

function About() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="About us" title="True value in every plant we build" />
      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-2">
        <p className="text-lg leading-relaxed">
          True Value Pharma Consultant helps pharmaceutical and feed additive manufacturers set up new facilities and
          upgrade existing ones to global regulatory standards. We combine plant engineering know-how with deep
          quality and regulatory expertise.
        </p>
        <div className="space-y-6">
          {values.map(([t, d]) => (
            <div key={t} className="border-l-4 border-accent pl-4">
              <h2 className="text-xl font-bold text-ink">{t}</h2>
              <p className="text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
