import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { SiteLayout } from "@/components/SiteLayout";
import { services } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "True Value Pharma Consultant — Pharma Plant & GMP Consulting" },
      { name: "description", content: "Greenfield pharma projects, plant modernization, WHO-GMP, Revised Schedule M, FAMI-QS, plant engineering and QMS consulting." },
      { property: "og:title", content: "True Value Pharma Consultant" },
      { property: "og:description", content: "Expert consulting for compliant pharmaceutical plants: WHO-GMP, Revised Schedule M, FAMI-QS." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <img src={hero} alt="Pharmaceutical cleanroom plant" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40 text-primary-foreground">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest">Pharmaceutical Plant Consultants</p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl font-bold leading-tight">Building compliant pharma plants, from blueprint to approval.</h1>
          <p className="mt-6 max-w-xl text-lg opacity-85">Greenfield projects, modernization, and regulatory readiness for WHO-GMP, Revised Schedule M and FAMI-QS.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground hover:opacity-90">Discuss your project</Link>
            <Link to="/services" className="rounded-md border border-primary-foreground/40 px-6 py-3 font-semibold hover:bg-primary-foreground/10">Our expertise</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">Core Expertise</h2>
        <div className="mt-10 grid gap-px bg-border border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div key={s.title} className="bg-card p-6">
              <span className="font-display text-accent text-2xl font-bold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2 className="text-3xl font-bold max-w-xl">Planning a new plant or an upgrade to meet Revised Schedule M?</h2>
          <Link to="/contact" className="rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground">Get in touch</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
