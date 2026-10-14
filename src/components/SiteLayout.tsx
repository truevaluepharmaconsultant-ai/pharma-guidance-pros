import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Expertise" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-xl font-bold text-primary">
            True Value <span className="text-ink">Pharma Consultant</span>
          </Link>
          <nav className="flex gap-5 text-sm font-semibold">
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
        <div className="mx-auto max-w-6xl px-6 py-10 grid gap-6 md:grid-cols-2">
          <div>
            <p className="font-display text-lg font-bold">True Value Pharma Consultant</p>
            <p className="mt-2 text-sm opacity-70">Engineering compliant pharmaceutical plants — WHO-GMP, Revised Schedule M, FAMI-QS.</p>
          </div>
          <p className="text-sm opacity-70 md:text-right">© {new Date().getFullYear()} True Value Pharma Consultant</p>
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
