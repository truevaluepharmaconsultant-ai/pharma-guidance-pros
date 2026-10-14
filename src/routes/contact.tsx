import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — True Value Pharma Consultant" },
      { name: "description", content: "Talk to True Value Pharma Consultant about your greenfield project, plant upgrade or compliance needs." },
      { property: "og:title", content: "Contact True Value Pharma Consultant" },
      { property: "og:description", content: "Discuss your pharmaceutical plant or compliance project." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const input = "w-full rounded-md border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-primary";
  return (
    <SiteLayout>
      <PageHeader eyebrow="Contact" title="Let's discuss your project" sub="Tell us about your plant, timeline and compliance goals." />
      <section className="mx-auto max-w-2xl px-6 py-16">
        {sent ? (
          <p className="rounded-lg border bg-card p-8 text-center text-lg">Thank you — we'll get back to you shortly.</p>
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
