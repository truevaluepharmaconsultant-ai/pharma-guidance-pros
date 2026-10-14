import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import logo from "@/assets/logo.jpg";
import { contact } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/projects", label: "Projects" },
  { to: "/approach", label: "Approach" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const linkCls = "rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary";
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="bg-ink text-primary-foreground text-xs">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-2 px-6 py-2">
          <p className="opacity-80">WHO-GMP • Revised Schedule M • ISO 15378 • FAMI-QS</p>
          <div className="flex gap-4 opacity-90">
            <a href="tel:+919825077025" className="hover:text-accent">📞 {contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="hidden md:inline hover:text-accent">✉ {contact.email}</a>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-30 border-b bg-background/95 shadow-sm backdrop-blur">
        <div className="mx-auto max-w-6xl flex items-center justify-between gap-4 px-6 py-3">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="True Value logo" className="h-14 md:h-16 w-auto rounded-md" />
            <span className="hidden sm:block font-display text-xl font-bold text-ink leading-tight">True Value<br /><span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-primary">Pharma Consultant</span></span>
          </Link>
          <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className={linkCls} activeProps={{ className: "bg-secondary text-primary" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
            <Link to="/contact" className="ml-2 rounded-md bg-accent px-4 py-2 font-bold text-accent-foreground hover:opacity-90">Get a Quote</Link>
          </nav>
          <button aria-label="Open menu" onClick={() => setOpen(!open)} className="lg:hidden rounded-md border px-3 py-2 text-xl text-ink">{open ? "✕" : "☰"}</button>
        </div>
        {open && (
          <nav className="lg:hidden border-t bg-background px-6 py-3 flex flex-col text-sm font-semibold">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className={linkCls} activeProps={{ className: "bg-secondary text-primary" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-ink text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold">True Value Pharma Consultant</p>
            <p className="mt-2 text-sm opacity-70">Quality • Compliance • Integrity • Growth</p>
          </div>
          <div className="text-sm opacity-80 space-y-1">
            <p className="font-semibold">{contact.name}</p>
            <p><a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a> · <a href={`tel:${contact.phoneAlt.replace(/\s/g, "")}`}>{contact.phoneAlt}</a></p>
            <p><a href={`mailto:${contact.email}`} className="underline">{contact.email}</a></p>
          </div>
          <p className="text-sm opacity-70">{contact.address}<br /><br />© {new Date().getFullYear()} True Value Pharma Consultant</p>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <section className="bg-ink text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest">{eyebrow}</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold">{title}</h1>
        {sub && <p className="mt-4 max-w-2xl opacity-80">{sub}</p>}
      </div>
    </section>
  );
}

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
      {items.map((it) => (
        <li key={it} className="flex gap-2"><span className="text-accent font-bold">✓</span>{it}</li>
      ))}
    </ul>
  );
}
