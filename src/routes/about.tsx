import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Target, Eye, HeartHandshake, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Naji & Co — Our Mission in Financial Education" },
      { name: "description", content: "Naji & Co helps people understand financial markets responsibly through clear, honest, beginner-friendly education." },
      { property: "og:title", content: "About Naji & Co" },
      { property: "og:description", content: "Our mission, vision and commitment to responsible financial education." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Target, title: "Our Mission", body: "Make financial markets understandable for everyone — regardless of background — through clear, honest education that builds real understanding." },
  { icon: Eye, title: "Our Vision", body: "A world where financial literacy is a foundation, not a privilege. Where people make informed decisions instead of following hype." },
  { icon: HeartHandshake, title: "Why It Matters", body: "Markets affect everyone. Understanding how they work helps you protect what you have and grow it responsibly over time." },
  { icon: ShieldCheck, title: "Our Commitment", body: "We always teach risk before reward, transparency before promises, and education before action. No shortcuts, no hype." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="About us" title="Financial education, built on trust and clarity" subtitle="Naji & Co exists to help people navigate the real world of financial markets — without confusion, hype or hidden agendas." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-8 hover:shadow-lg transition">
              <div className="grid h-12 w-12 place-items-center rounded-lg gradient-navy text-gold"><p.icon className="h-5 w-5" /></div>
              <h2 className="mt-5 font-display text-2xl font-bold text-navy-deep">{p.title}</h2>
              <p className="mt-3 text-foreground/80 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-2xl gradient-navy p-10 text-white">
          <h2 className="font-display text-3xl font-bold">Our promise</h2>
          <p className="mt-4 text-white/80 leading-relaxed max-w-3xl">
            Everything we publish is designed to make you a more informed market participant — not to push a product. We teach you how markets work, the risks involved, and how to think critically about your decisions.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}