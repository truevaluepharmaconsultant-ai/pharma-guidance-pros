import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CheckList, PageHeader, SiteLayout } from "@/components/SiteLayout";
import { industries } from "@/lib/site";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — True Value Pharma Consultant" },
      { name: "description", content: "Consultancy for pharmaceutical formulations, veterinary healthcare, nutraceuticals, API & excipients and primary packaging materials." },
      { property: "og:title", content: "Industries We Serve" },
      { property: "og:description", content: "Regulated and allied industries supported by True Value Pharma Consultant." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Industries,
});

const capabilities = ["Facility Design", "WHO-GMP Compliance", "Regulatory Documentation", "ISO 15378 Implementation", "Greenfield Projects", "Plant Modification", "FAMI-QS Compliance", "GMP Upgradation"];
const benefits = ["Practical Industry Experience", "Regulatory Expertise", "Technical Guidance", "Fast Project Execution", "Sustainable Compliance Systems"];

function Industries() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Industries we serve" title="Regulated and allied industries" />
      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 100}>
            <div className="card-hover h-full rounded-lg border bg-card p-6">
              <h2 className="text-xl font-bold text-ink">{g.title}</h2>
              <CheckList items={g.items} />
            </div>
          </Reveal>
        ))}
      </section>
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Key capabilities</h2>
            <ol className="mt-4 grid grid-cols-2 gap-3">{capabilities.map((c, i) => <li key={c} className="rounded-md bg-card p-3 text-sm font-semibold"><span className="text-accent mr-2">{i + 1}.</span>{c}</li>)}</ol>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Our clients benefit from</h2>
            <CheckList items={benefits} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
