import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CheckList, PageHeader, SiteLayout } from "@/components/SiteLayout";
import { partners, phases } from "@/lib/site";
import corridor from "@/assets/approach/clean-room-corridor.jpg.asset.json";
import productionHall from "@/assets/approach/clean-room-production-hall.jpg.asset.json";
import chemicalLab from "@/assets/approach/chemical-testing-lab.jpg.asset.json";
import instrumentLab from "@/assets/approach/instrument-lab.jpg.asset.json";
import steelStructure from "@/assets/approach/greenfield-steel-structure.jpg.asset.json";
import office from "@/assets/approach/consultation-office.jpg.asset.json";
import qcBench from "@/assets/approach/qc-lab-bench.jpg.asset.json";
import instrumentBench from "@/assets/approach/instrument-bench.jpg.asset.json";
import cornerBench from "@/assets/approach/chemical-lab-corner-bench.jpg.asset.json";
import stability from "@/assets/approach/stability-room.jpg.asset.json";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Methodology & Partners — True Value Pharma Consultant" },
      {
        name: "description",
        content:
          "Our six-phase project methodology from requirement study to certification readiness, the facilities we deliver, and our strategic partners.",
      },
      { property: "og:title", content: "Project Execution Methodology" },
      {
        property: "og:description",
        content: "From concept to compliance — a structured six-phase approach.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Approach,
});

const docs = [
  "SOP Preparation",
  "Validation Documents",
  "Qualification Documents",
  "Regulatory Documentation",
  "GMP Documentation",
];

type Photo = { src: string; alt: string; caption: string };

const tallPhotos: Photo[] = [
  {
    src: corridor.url,
    alt: "Clean room corridor with blue GMP doors and glossy epoxy flooring",
    caption: "Clean room corridor — GMP partitions & epoxy flooring",
  },
  {
    src: productionHall.url,
    alt: "Clean room production hall with stainless steel equipment enclosure",
    caption: "Production hall — clean room envelope & utilities",
  },
  {
    src: chemicalLab.url,
    alt: "Blue door with signboard reading Chemical Testing Lab",
    caption: "Chemical testing lab",
  },
  {
    src: instrumentLab.url,
    alt: "Blue door with signboard reading Instrument Lab",
    caption: "Instrument lab",
  },
];

const widePhotos: Photo[] = [
  {
    src: office.url,
    alt: "Consultation cabin with meeting table, sofas and glass partition",
    caption: "Project review & consultation cabin",
  },
  {
    src: qcBench.url,
    alt: "Quality control laboratory worktop with ovens, muffle furnace and water bath",
    caption: "QC laboratory — ovens, furnace & water bath",
  },
  {
    src: instrumentBench.url,
    alt: "Laboratory bench with analytical balance and conductivity meter",
    caption: "Instrument bench — balance & conductivity meter",
  },
  {
    src: cornerBench.url,
    alt: "Corner laboratory worktop with glassware and testing equipment",
    caption: "Chemical lab worktop & glassware",
  },
  {
    src: stability.url,
    alt: "Stability room door with stored sample bottles in the laboratory",
    caption: "Stability room",
  },
];

function PhotoCard({ photo, ratio }: { photo: Photo; ratio: string }) {
  return (
    <Reveal>
      <figure
        className={`card-hover group relative overflow-hidden rounded-lg border bg-card shadow-sm ${ratio}`}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="img-hover h-full w-full object-cover"
        />
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/45 to-transparent px-4 pb-3 pt-10 text-sm font-semibold text-primary-foreground">
          {photo.caption}
        </figcaption>
      </figure>
    </Reveal>
  );
}

function Approach() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our methodology"
        title="From concept to compliance"
        sub="A structured approach so every project is delivered efficiently, compliantly and sustainably."
      />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <ol className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {phases.map((p, i) => (
            <Reveal key={p} delay={i * 80}>
              <li className="card-hover h-full rounded-lg border-t-4 border-accent bg-card p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  Phase {i + 1}
                </p>
                <p className="mt-2 font-semibold text-ink">{p}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <Reveal>
          <figure className="card-hover group relative overflow-hidden rounded-lg border bg-card shadow-sm">
            <img
              src={steelStructure.url}
              alt="Steel structural framework of a new pharmaceutical plant under construction"
              loading="lazy"
              className="img-hover h-64 w-full object-cover sm:h-80 lg:h-[26rem]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/45 to-transparent px-6 pb-4 pt-14">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                Greenfield execution
              </p>
              <p className="mt-1 text-lg font-semibold text-primary-foreground">
                Structural framework of a new plant — from drawings to site
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Facilities we deliver
            </p>
            <h2 className="mt-2 text-3xl font-bold text-ink">
              Designed, built and validated by our team
            </h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Clean rooms, quality control laboratories and support areas delivered as part of our
              turnkey project execution — photographed on our own sites.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tallPhotos.map((photo) => (
              <PhotoCard key={photo.caption} photo={photo} ratio="aspect-[3/4]" />
            ))}
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {widePhotos.map((photo, i) => (
              <Reveal
                key={photo.caption}
                delay={i * 60}
                className={`sm:col-span-1 ${i >= widePhotos.length - 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
              >
                <figure className="card-hover group relative overflow-hidden rounded-lg border bg-card shadow-sm aspect-[4/3]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="img-hover h-full w-full object-cover"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/45 to-transparent px-4 pb-3 pt-10 text-sm font-semibold text-primary-foreground">
                    {photo.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">Strategic partnerships</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div className="card-hover h-full rounded-lg border bg-card p-6">
                  <h3 className="text-lg font-bold text-ink">{p.name}</h3>
                  <CheckList items={p.items} />
                </div>
              </Reveal>
            ))}
            <Reveal delay={partners.length * 80}>
              <div className="card-hover h-full rounded-lg border bg-card p-6">
                <h3 className="text-lg font-bold text-ink">Documentation Support Team</h3>
                <CheckList items={docs} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
