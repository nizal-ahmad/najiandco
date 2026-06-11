import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { BookOpen, LineChart, Newspaper, Brain, ShieldCheck, FileText, Video, Download, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/learning-center")({
  head: () => ({
    meta: [
      { title: "Learning Center — Naji & Co" },
      { name: "description", content: "Structured trading and investing education: guides, technical analysis, risk management, psychology and more." },
      { property: "og:title", content: "Learning Center" },
      { property: "og:description", content: "Articles, guides, videos and resources for financial market learners." },
      { property: "og:url", content: "/learning-center" },
    ],
    links: [{ rel: "canonical", href: "/learning-center" }],
  }),
  component: LearningCenter,
});

const categories = [
  { icon: BookOpen, title: "Beginner Trading Guide", desc: "Start from zero — accounts, orders, charts and terminology." },
  { icon: LineChart, title: "Technical Analysis", desc: "Price action, indicators, patterns and chart reading." },
  { icon: FileText, title: "Fundamental Analysis", desc: "Earnings, economic data, valuation and macro context." },
  { icon: ShieldCheck, title: "Risk Management", desc: "Position sizing, stop-losses and capital preservation." },
  { icon: Brain, title: "Trading Psychology", desc: "Discipline, emotional control and avoiding common traps." },
  { icon: Newspaper, title: "Market News", desc: "How to filter signal from noise in daily news flow." },
  { icon: LineChart, title: "Investment Strategies", desc: "Long-term portfolios, dividend investing and asset allocation." },
];

const resources = [
  { icon: FileText, type: "Article", title: "Reading your first candlestick chart", time: "8 min read" },
  { icon: Video, type: "Video", title: "Risk management every trader needs", time: "10 min" },
  { icon: Download, type: "Resource", title: "Beginner's market cheat-sheet (PDF)", time: "Free" },
  { icon: FileText, type: "Guide", title: "Building a long-term investing plan", time: "15 min read" },
  { icon: Video, type: "Video", title: "Macro news for retail traders", time: "12 min" },
  { icon: Download, type: "Resource", title: "Position sizing calculator", time: "Free" },
];

function LearningCenter() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Learning Center" title="Structured paths from beginner to confident" subtitle="Pick a track and start building real understanding — at your own pace, in plain language." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <h2 className="font-display text-2xl font-bold text-navy-deep">Categories</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-7 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="grid h-11 w-11 place-items-center rounded-md gradient-navy text-gold"><c.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-deep">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy">Browse <ArrowRight className="h-3.5 w-3.5" /></span>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-navy-deep">Featured resources</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <div key={r.title} className="rounded-xl border border-border bg-card p-6 flex gap-4 items-start hover:border-gold transition">
                <div className="grid h-11 w-11 place-items-center rounded-md gradient-gold text-white flex-shrink-0"><r.icon className="h-5 w-5" /></div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">{r.type} · {r.time}</p>
                  <h3 className="mt-1 font-semibold text-navy-deep">{r.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl gradient-navy p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-bold">Subscribe to our newsletter</h3>
              <p className="text-sm text-white/75">Weekly market education — no spam, no hype.</p>
            </div>
            <form className="flex gap-2 w-full sm:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="you@example.com" className="rounded-md bg-white/10 border border-white/20 px-4 py-3 text-sm placeholder-white/50 text-white w-full sm:w-72" />
              <button className="rounded-md gradient-gold px-5 py-3 text-sm font-semibold text-white">Join</button>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}