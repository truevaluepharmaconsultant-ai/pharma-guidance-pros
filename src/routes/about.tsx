import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Founder — True Value Pharma Consultant" },
      { name: "description", content: "Vision, mission, values and founder Mr. Divyesh Shah — 35+ years with Cadila, Sun Pharma, Wockhardt and more." },
      { property: "og:title", content: "About True Value Pharma Consultant" },
      { property: "og:description", content: "Founded by Mr. Divyesh Shah, B.Pharm, with 35+ years of pharmaceutical industry experience." },
    ],
  }),
  component: About,
});

const values = ["Compliance", "Innovation", "Customer Success", "Integrity", "Professionalism", "Quality"];
const companies = ["Cadila", "Sun Pharma", "Wockhardt", "Umedica Laboratories", "Vapi Care Pharma", "PharmAlliance – Algeria"];

function About() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="About us" title="Experience transformed into excellence" sub="A professionally managed pharmaceutical consultancy providing engineering, regulatory, quality assurance and compliance solutions." />
      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-2">
        <div className="space-y-4 text-lg leading-relaxed">
          <p>True Value Pharma Consultant serves pharmaceutical formulation manufacturers, API and excipient manufacturers, primary packaging material manufacturers, nutraceutical companies, veterinary healthcare product manufacturers and animal feed supplement industries.</p>
          <p>Our expertise spans Quality Assurance, Quality Control, Manufacturing Operations, Plant Engineering, Regulatory Compliance, Documentation Systems, Project Management and Technical Training.</p>
          <p className="text-muted-foreground">We partner with clients from project concept through regulatory compliance, delivering practical, technically sound and sustainable solutions that improve product quality, operational efficiency and inspection readiness.</p>
        </div>
        <div className="space-y-6">
          <div className="border-l-4 border-accent pl-4"><h2 className="text-xl font-bold text-ink">Vision</h2><p className="text-muted-foreground">To become one of India's most trusted pharmaceutical consultancy organizations by delivering innovative, practical and regulatory-compliant solutions that create long-term value for our clients.</p></div>
          <div className="border-l-4 border-accent pl-4"><h2 className="text-xl font-bold text-ink">Mission</h2><p className="text-muted-foreground">To support pharmaceutical and allied industries through technical excellence, regulatory expertise and customer-focused consultancy, enabling operational excellence and sustainable business growth.</p></div>
          <div>
            <h2 className="text-xl font-bold text-ink">Core Values</h2>
            <div className="mt-3 flex flex-wrap gap-2">{values.map((v) => <span key={v} className="rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-primary">{v}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Founder profile</p>
            <h2 className="mt-2 text-3xl font-bold">Mr. Divyesh Shah</h2>
            <p className="mt-1 font-semibold text-ink">Founder & Principal Pharmaceutical Consultant</p>
            <p className="mt-3 text-sm text-muted-foreground">B.Pharm — L.M. College of Pharmacy, Ahmedabad (1987)<br />35+ years of pharmaceutical industry experience</p>
          </div>
          <div className="md:col-span-2 space-y-4 leading-relaxed">
            <p>Mr. Divyesh Shah has over three decades of diversified experience across Quality Assurance, Quality Control, Manufacturing Operations, Plant Management, Regulatory Compliance, Project Engineering, Quality Systems and Technical Consultancy.</p>
            <p>He served as Director of Industries at PharmAlliance, Algeria (North Africa), contributing to pharmaceutical manufacturing projects including a beta-lactam formulation facility developed with guidance from German consultants — international experience that further strengthened his expertise in project management and regulatory compliance.</p>
            <p>Following his retirement from corporate service in 2022, he established True Value Pharma Consultant to provide independent consultancy to the pharmaceutical and allied industries.</p>
            <div>
              <h3 className="font-bold text-ink">Career highlights</h3>
              <div className="mt-3 flex flex-wrap gap-2">{companies.map((c) => <span key={c} className="rounded-md border bg-card px-3 py-1.5 text-sm">{c}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <blockquote className="font-display text-2xl text-ink">"Quality is not achieved by inspection alone; it is built through knowledge, commitment, integrity, and continuous improvement."</blockquote>
      </section>
    </SiteLayout>
  );
}
