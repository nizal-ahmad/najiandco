import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Naji & Co" },
      { name: "description", content: "Articles, tutorials and educational essays on trading and investing from Naji & Co." },
      { property: "og:title", content: "Naji & Co Blog" },
      { property: "og:description", content: "Articles and tutorials on markets and trading." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const posts = [
  { t: "How to read a candlestick chart (the right way)", d: "Charts seem intimidating until they don't. Here's how to actually read them.", date: "Jun 2026", cat: "Technical" },
  { t: "Why risk management beats prediction", d: "The traders who survive aren't the ones who guess best — they're the ones who lose smart.", date: "May 2026", cat: "Risk" },
  { t: "Investing vs trading: which one suits you?", d: "Different mindsets, different timeframes, different skills.", date: "May 2026", cat: "Beginner" },
  { t: "What central banks actually do", d: "The plain-language guide to interest rates, QE and why markets react.", date: "Apr 2026", cat: "Macro" },
  { t: "Bitcoin explained without the hype", d: "What it is, how it works, and how to think about owning it.", date: "Apr 2026", cat: "Crypto" },
  { t: "Building a long-term portfolio plan", d: "A framework for thinking about diversification, time and goals.", date: "Mar 2026", cat: "Investing" },
];

function BlogPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Blog" title="Insights, essays and tutorials" subtitle="Long-form writing on financial markets — no clickbait, no hot takes." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.t} className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="aspect-[16/10] gradient-navy relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.25),transparent_60%)]" />
                <span className="absolute top-4 left-4 bg-gold text-navy-deep text-xs font-semibold px-2.5 py-1 rounded">{p.cat}</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground">{p.date}</p>
                <h2 className="mt-2 font-display text-lg font-semibold text-navy-deep group-hover:text-gold transition">{p.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy">Read more <ArrowRight className="h-3.5 w-3.5" /></span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}