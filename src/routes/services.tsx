import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckList, PageHeader, SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
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
      <section className="border-b bg-secondary" aria-labelledby="special-services-heading">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Special services</p>
          <h2 id="special-services-heading" className="mt-3 max-w-3xl text-3xl font-bold text-ink">How True Value Pharma Consultant Can Help You</h2>
          <p className="mt-6 text-lg font-semibold text-ink">Are you planning to…</p>
          <ul className="mt-5 grid gap-x-12 gap-y-4 md:grid-cols-2">
            {[
              "Build a new pharmaceutical plant?",
              "Upgrade your factory as per Revised Schedule M?",
              "Obtain WHO-GMP certification?",
              "Implement ISO 15378?",
              "Prepare for an FDA audit?",
              "Design a clean room?",
              "Prepare documentation?",
              "Validate equipment?",
            ].map((service) => (
              <li key={service} className="flex items-start gap-3 text-foreground">
                <span aria-hidden="true" className="font-bold text-primary">✓</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <p className="text-lg font-semibold text-ink">Let's discuss your project in detail.</p>
            <Button asChild size="lg"><Link to="/contact">Discuss your project <span aria-hidden="true">→</span></Link></Button>
          </div>
        </div>
      </section>
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
            <CheckList items={serviceGroups[1]?.items ?? []} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
