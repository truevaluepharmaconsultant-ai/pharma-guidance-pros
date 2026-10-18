import { createFileRoute } from "@tanstack/react-router";
import { CheckList, PageHeader, SiteLayout } from "@/components/SiteLayout";
import { serviceGroups } from "@/lib/site";
import exhibitionWide from "@/assets/true-value-exhibition-wide.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Consultancy Services — True Value Pharma Consultant" },
      { name: "description", content: "Project consultancy, facility design, regulatory compliance, QMS (ISO 9001, ISO 15378, FAMI-QS), documentation & validation and GMP training." },
      { property: "og:title", content: "Pharmaceutical Consultancy Services" },
      { property: "og:description", content: "Integrated consultancy across the full pharmaceutical project lifecycle." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl grid items-center gap-10 px-6 py-16 md:grid-cols-2">
          <img src={exhibitionWide} alt="Mr. Divyesh Shah alongside a clean room display with True Value branding" width={768} height={1029} loading="lazy" className="mx-auto aspect-[3/4] w-full max-w-sm rounded-md object-contain" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Engineering & facility design</p>
            <h2 className="mt-3 text-3xl font-bold text-ink">Clean room & HVAC consultancy</h2>
            <CheckList items={serviceGroups[1].items} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
