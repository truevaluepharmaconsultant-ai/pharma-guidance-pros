import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { contact, services } from "@/lib/site";
import digitalCard from "@/assets/true-value-digital-card.png.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — True Value Pharma Consultant, Vapi" },
      { name: "description", content: "Contact Mr. Divyesh Shah: +91 98250 77025, truevaluepharmaconsultant@gmail.com, Chala, Vapi, Gujarat." },
      { property: "og:title", content: "Contact True Value Pharma Consultant" },
      { property: "og:description", content: "Let's build quality together — discuss your pharmaceutical plant or compliance project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const input = "w-full rounded-md border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-primary";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    data.set("subject", `New project enquiry from ${data.get("name") || "website visitor"}`);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(`Submission failed: ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <SiteLayout>
      <PageHeader eyebrow="Contact" title="Let's build quality together" sub="Planning a new facility, upgrading a plant, or implementing WHO-GMP, ISO 15378, FAMI-QS or a QMS? We're ready to support you." />
      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-2">
        <Reveal className="space-y-5">
          <a href={digitalCard.url} target="_blank" rel="noopener noreferrer" aria-label="View True Value Pharma Consultant digital card at full size" className="block">
            <img src={digitalCard.url} alt="True Value Pharma Consultant digital card — Divyesh Shah, contact details, services and expertise" width={768} height={1152} className="img-hover h-auto w-full rounded-md" />
          </a>
          <div><p className="text-xl font-bold text-ink">{contact.name}</p><p className="text-muted-foreground">{contact.role}</p></div>
          <p><span className="block text-xs font-bold uppercase tracking-widest text-primary">Office</span><a href="tel:+919825077025" className="text-lg font-semibold">{contact.phone}</a></p>
          <p><span className="block text-xs font-bold uppercase tracking-widest text-primary">Alternate</span><a href="tel:+919879952202" className="text-lg font-semibold">{contact.phoneAlt}</a></p>
          <p><span className="block text-xs font-bold uppercase tracking-widest text-primary">Email</span><a href={`mailto:${contact.email}`} className="text-lg font-semibold break-all">{contact.email}</a></p>
          <p><span className="block text-xs font-bold uppercase tracking-widest text-primary">Address</span>{contact.address}</p>
        </Reveal>
        {status === "sent" ? (
          <p className="rounded-lg border bg-card p-8 text-center text-lg self-start">Thank you — your project requirements have been sent. We'll get back to you shortly.</p>
        ) : (
          <Reveal delay={120}>
            <form name="project-enquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-4 rounded-lg border bg-card p-6 shadow-sm" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="project-enquiry" />
              <p className="hidden"><label>Don't fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
              <input required name="name" placeholder="Your name" aria-label="Your name" className={input} />
              <input required name="email" type="email" placeholder="Email" aria-label="Email" className={input} />
              <input name="phone" type="tel" placeholder="Phone / WhatsApp" aria-label="Phone or WhatsApp" className={input} />
              <input name="company" placeholder="Company" aria-label="Company" className={input} />
              <select name="service" defaultValue="" aria-label="Service required" className={input}>
                <option value="">Service required (optional)</option>
                {services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                <option value="Other">Other</option>
              </select>
              <textarea required name="message" rows={5} placeholder="Project details & requirements" aria-label="Project details and requirements" className={input} />
              {status === "error" && (
                <p role="alert" className="text-sm text-destructive">Sorry, something went wrong. Please try again or email us at {contact.email}.</p>
              )}
              <button type="submit" disabled={status === "sending"} className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60">
                {status === "sending" ? "Sending…" : "Send enquiry"}
              </button>
            </form>
          </Reveal>
        )}
      </section>
    </SiteLayout>
  );
}
