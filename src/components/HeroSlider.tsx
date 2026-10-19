import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import b1 from "@/assets/banner-1.jpg";
import b2 from "@/assets/banner-2.jpg";
import b3 from "@/assets/banner-3.jpg";

const slides = [
  { img: b1, alt: "Modern pharmaceutical manufacturing plant", eyebrow: "Your trusted partner in pharmaceutical excellence", title: "From concept to compliance.", sub: "Greenfield projects and plant modernization for pharmaceutical, API, excipient, packaging, nutraceutical and veterinary manufacturers." },
  { img: b2, alt: "Quality control scientist reviewing GMP documents", eyebrow: "Quality • Compliance • Integrity", title: "WHO-GMP, Revised Schedule M & ISO 15378 readiness.", sub: "Gap analysis, documentation, validation and inspection readiness that holds up to regulators and customer audits." },
  { img: b3, alt: "Engineers reviewing a plant layout blueprint", eyebrow: "35+ years of practical experience", title: "Plant engineering that's built to pass inspection.", sub: "Facility layout, HVAC, clean rooms, utilities and microbiology labs designed to regulatory guidelines." },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="relative h-[560px] md:h-[620px] overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {slides.map((s, idx) => (
        <div key={s.title} className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`} aria-hidden={idx !== i}>
          <img src={s.img} alt={s.alt} width={1600} height={912} loading={idx === 0 ? "eager" : "lazy"} className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[6000ms] ${idx === i ? "scale-105" : "scale-100"}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />
          <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6 text-primary-foreground">
            {idx === i && (
              <div key={i}>
                <p className="hero-text-in text-accent text-sm font-semibold uppercase tracking-[0.25em]">{s.eyebrow}</p>
                <h1 className="hero-text-in-d1 mt-4 max-w-3xl text-4xl md:text-6xl font-bold leading-tight">{s.title}</h1>
                <p className="hero-text-in-d2 mt-6 max-w-xl text-lg opacity-85">{s.sub}</p>
                <div className="hero-text-in-d2 mt-8 flex flex-wrap gap-3">
                  <Link to="/contact" className="rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-lg transition hover:opacity-90">Discuss your project</Link>
                  <Link to="/projects" className="rounded-md border border-primary-foreground/40 px-6 py-3 font-semibold backdrop-blur-sm transition hover:bg-primary-foreground/10">See our projects</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
      <button aria-label="Previous banner" onClick={() => setI((i - 1 + slides.length) % slides.length)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-primary-foreground/30 bg-ink/30 px-3 py-2 text-2xl text-primary-foreground backdrop-blur-sm transition hover:bg-primary-foreground/20">‹</button>
      <button aria-label="Next banner" onClick={() => setI((i + 1) % slides.length)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-primary-foreground/30 bg-ink/30 px-3 py-2 text-2xl text-primary-foreground backdrop-blur-sm transition hover:bg-primary-foreground/20">›</button>
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((s, idx) => (
          <button key={s.title} aria-label={`Show banner ${idx + 1}`} onClick={() => setI(idx)} className={`h-2.5 rounded-full transition-all ${idx === i ? "w-8 bg-accent" : "w-2.5 bg-primary-foreground/50 hover:bg-primary-foreground/80"}`} />
        ))}
      </div>
      {!paused && (
        <div key={i} aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-full bg-primary-foreground/15">
          <div className="hero-progress h-full w-full bg-accent" />
        </div>
      )}
    </section>
  );
}
