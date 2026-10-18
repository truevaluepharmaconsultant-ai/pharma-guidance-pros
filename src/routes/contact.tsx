import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";
import { contact } from "@/lib/site";

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
  const [sent, setSent] = useState(false);
  const input = "w-full rounded-md border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-primary";
  return (
    <SiteLayout>
      <PageHeader eyebrow="Contact" title="Let's build quality together" sub="Planning a new facility, upgrading a plant, or implementing WHO-GMP, ISO 15378, FAMI-QS or a QMS? We're ready to support you." />
      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-2">
        <div className="space-y-5">
          <div><p className="text-xl font-bold text-ink">{contact.name}</p><p className="text-muted-foreground">{contact.role}</p></div>
          <p><span className="block text-xs font-bold uppercase tracking-widest text-primary">Office</span><a href="tel:+919825077025" className="text-lg font-semibold">{contact.phone}</a></p>
          <p><span className="block text-xs font-bold uppercase tracking-widest text-primary">Alternate</span><a href="tel:+919879952202" className="text-lg font-semibold">{contact.phoneAlt}</a></p>
          <p><span className="block text-xs font-bold uppercase tracking-widest text-primary">Email</span><a href={`mailto:${contact.email}`} className="text-lg font-semibold break-all">{contact.email}</a></p>
          <p><span className="block text-xs font-bold uppercase tracking-widest text-primary">Address</span>{contact.address}</p>
        </div>
        {sent ? (
          <p className="rounded-lg border bg-card p-8 text-center text-lg self-start">Thank you — we'll get back to you shortly.</p>
        ) : (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required placeholder="Your name" className={input} />
            <input required type="email" placeholder="Email" className={input} />
            <input placeholder="Company" className={input} />
            <textarea required rows={5} placeholder="Project details" className={input} />
            <button className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">Send enquiry</button>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}
