import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Mail, Phone, MessageCircle, MapPin, Youtube, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Naji & Co" },
      { name: "description", content: "Get in touch with Naji & Co — email, phone, WhatsApp and social media." },
      { property: "og:title", content: "Contact Naji & Co" },
      { property: "og:description", content: "Email, phone, WhatsApp and social media." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1).max(150),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

function ContactPage() {
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      setStatus({ ok: false, msg: parsed.error.issues[0]?.message ?? "Please check the form." });
      return;
    }
    setStatus({ ok: true, msg: "Thanks! We'll get back to you shortly." });
    form.reset();
  }

  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="We'd love to hear from you" subtitle="Have a question, suggestion or want guidance on where to start? Send us a message." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-xl border border-border bg-card p-8">
          <h2 className="font-display text-2xl font-bold text-navy-deep">Send a message</h2>
          <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Name" required />
            <Field name="email" label="Email" type="email" required />
            <Field name="subject" label="Subject" required className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-navy-deep mb-1.5">Message *</label>
              <textarea name="message" required maxLength={1000} rows={5} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between gap-4">
              <button type="submit" className="rounded-md gradient-navy px-6 py-3 text-sm font-semibold text-white hover:opacity-90">Send message</button>
              {status && <p className={`text-sm ${status.ok ? "text-emerald-600" : "text-red-600"}`}>{status.msg}</p>}
            </div>
          </form>
        </div>
        <aside className="space-y-4">
          <Info icon={Mail} title="Email" body="official@najiandco.com" href="mailto:official@najiandco.com" />
          <Info icon={Phone} title="Phone" body="+1 (555) 012-3456" href="tel:+15550123456" />
          <Info icon={MessageCircle} title="WhatsApp" body="Chat with us" href="https://wa.me/15550123456" gold />
          <Info icon={MapPin} title="Location" body="Global · Remote first" />
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-sm font-semibold text-navy-deep mb-3">Follow us</p>
            <div className="flex gap-2">
              {[Youtube, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-md border border-border hover:border-gold hover:text-gold transition"><Icon className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
        </aside>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
        <div className="rounded-xl overflow-hidden border border-border h-80">
          <iframe title="Map" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.16%2C51.49%2C-0.07%2C51.52&layer=mapnik" />
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ name, label, type = "text", required, className }: { name: string; label: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-navy-deep mb-1.5">{label}{required && " *"}</label>
      <input name={name} type={type} required={required} maxLength={255} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
    </div>
  );
}

function Info({ icon: Icon, title, body, href, gold }: { icon: React.ComponentType<{ className?: string }>; title: string; body: string; href?: string; gold?: boolean }) {
  const inner = (
    <div className={`rounded-xl border p-5 flex items-start gap-4 transition ${gold ? "border-gold bg-gold/5" : "border-border bg-card hover:border-gold"}`}>
      <div className="grid h-10 w-10 place-items-center rounded-md gradient-navy text-gold flex-shrink-0"><Icon className="h-5 w-5" /></div>
      <div>
        <p className="text-sm font-semibold text-navy-deep">{title}</p>
        <p className="text-sm text-muted-foreground">{body}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner;
}