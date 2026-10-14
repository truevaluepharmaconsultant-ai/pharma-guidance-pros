import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
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
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-3 px-6 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="True Value logo" className="h-10 w-auto rounded" />
            <span className="hidden sm:block font-display text-lg font-bold text-ink leading-tight">True Value<br /><span className="text-xs font-sans font-semibold uppercase tracking-widest text-primary">Pharma Consultant</span></span>
          </Link>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
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
