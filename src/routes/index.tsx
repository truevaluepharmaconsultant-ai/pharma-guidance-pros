import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSlider } from "@/components/HeroSlider";
import { Reveal } from "@/components/Reveal";
import { SiteLayout } from "@/components/SiteLayout";
import { services, strengths } from "@/lib/site";
import exhibitionWide from "@/assets/true-value-exhibition-wide.jpg";
import exhibition from "@/assets/true-value-exhibition.jpg";
import founder from "@/assets/true-value-founder-final.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "True Value Pharma Consultant — Pharma Plant & GMP Consulting, Vapi" },
      { name: "description", content: "35+ years of experience in greenfield pharma projects, plant modernization, WHO-GMP, Revised Schedule M, ISO 15378, FAMI-QS and QMS consulting." },
      { property: "og:title", content: "True Value Pharma Consultant" },
      { property: "og:description", content: "Your trusted partner in pharmaceutical excellence — from concept to compliance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [["35+", "Years of industry experience"], ["9+", "Major consultancy projects"], ["6", "Industry sectors served"], ["1987", "B.Pharm, L.M. College of Pharmacy"]];

function Index() {
  return (
    <SiteLayout>
      <HeroSlider />


      <section className="border-b bg-card">
        <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(([n, l], i) => (
            <Reveal key={l} delay={i * 80}><p className="font-display text-4xl font-bold text-primary">{n}</p><p className="mt-1 text-sm text-muted-foreground">{l}</p></Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">What we do</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Core Expertise</h2>
        </Reveal>
        <div className="mt-10 grid gap-px bg-border border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div key={s.title} className="card-hover bg-card p-6">
              <span className="font-display text-accent text-2xl font-bold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">True Value Pharma Consultant</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Industry gallery</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[exhibitionWide, exhibition, founder].map((photo, i) => (
              <Reveal key={photo} delay={i * 120}>
                <figure>
                  <img src={photo} alt={`Mr. Divyesh Shah at a clean room exhibition display with True Value branding — photo ${i + 1}`} width={768} height={1029} loading="lazy" className="img-hover aspect-[3/4] w-full rounded-md object-contain bg-secondary" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Why clients trust us</h2>
            <blockquote className="mt-6 border-l-4 border-accent pl-5 text-lg italic text-ink">
              "We don't just provide consultancy; we become your project partner, guiding you from concept to compliance with integrity, professionalism, and practical expertise."
            </blockquote>
            <Link to="/about" className="mt-6 inline-block font-semibold text-primary hover:underline">Meet our founder →</Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {strengths.map((s) => (
              <li key={s} className="flex gap-2 rounded-md bg-card p-3 text-sm"><span className="text-accent font-bold">✓</span>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2 className="text-3xl font-bold max-w-xl">Planning a new plant or upgrading to Revised Schedule M? Let's build quality together.</h2>
          <Link to="/contact" className="rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground">Get in touch</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
