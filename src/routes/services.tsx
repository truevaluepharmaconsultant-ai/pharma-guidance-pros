import { documentationValidation, plantProject, qmsIllustration, trainingCompetency, vialFilling } from "@/lib/images";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CheckList, PageHeader, SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { serviceGroups } from "@/lib/site";

const cardIllustrations: Partial<Record<string, { src: string; alt: string; width: number; height: number }>> = {
  "Quality Management Systems": { src: qmsIllustration, alt: "Quality management systems illustration: QC checklist, tablet press and measuring instruments", width: 722, height: 558 },
  "Documentation & Validation": { src: documentationValidation, alt: "Documentation and validation illustration: SOPs, validation agenda checklist, stamp and folder", width: 524, height: 494 },
  "Training & Competency Development": { src: trainingCompetency, alt: "Training and competency development illustration: a team learning session around a presentation screen", width: 588, height: 536 },
};

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
        <div className="mx-auto max-w-6xl grid items-center gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr]">
          <div>
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
          <Reveal delay={150} className="h-full">
            <figure className="card-hover h-full overflow-hidden rounded-lg border bg-card">
              <img src={plantProject} alt="Pharmaceutical plant with stainless vessels, a hard hat, rolled blueprints, vials and tablets" width={536} height={748} loading="lazy" className="img-hover aspect-[3/4] w-full object-cover" />
              <figcaption className="px-5 py-4 text-sm font-semibold text-ink">Plant engineering, blueprints &amp; compliance planning</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {serviceGroups.map((g, i) => {
          const ill = cardIllustrations[g.title];
          return (
          <Reveal key={g.title} delay={(i % 3) * 100} className="h-full">
            <div className="card-hover flex h-full flex-col overflow-hidden rounded-lg border bg-card">
              <div className="p-6">
                <span className="font-display text-3xl font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-2 text-xl font-bold text-ink">{g.title}</h2>
                <CheckList items={g.items} />
              </div>
              {ill && (
                <img src={ill.src} alt={ill.alt} width={ill.width} height={ill.height} loading="lazy" className="img-hover mt-auto w-full border-t bg-white" />
              )}
            </div>
          </Reveal>
          );
        })}
      </section>
      <section className="border-y bg-background" aria-labelledby="filling-line-heading">
        <div className="mx-auto max-w-6xl grid items-center gap-10 px-6 py-16 md:grid-cols-2">
          <Reveal>
            <figure className="card-hover overflow-hidden rounded-lg border bg-card">
              <img src={vialFilling} alt="Stainless steel filling nozzles filling blue glass vials on a production line" width={832} height={568} loading="lazy" className="img-hover aspect-[4/3] w-full object-cover" />
              <figcaption className="px-5 py-4 text-sm font-semibold text-ink">Vial filling &amp; packaging lines</figcaption>
            </figure>
          </Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Equipment &amp; line qualification</p>
            <h2 id="filling-line-heading" className="mt-3 text-3xl font-bold text-ink">Filling, packaging &amp; production lines</h2>
            <p className="mt-4 text-base text-muted-foreground">Lines planned, qualified and documented so they are ready for inspection.</p>
            <CheckList items={["Clean Room Design & Qualification", "Validation Master Plans", "Qualification Protocols (IQ/OQ/PQ)"]} />
          </div>
        </div>
      </section>
      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-16">
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
