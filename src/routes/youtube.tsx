import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Youtube, Play } from "lucide-react";

export const Route = createFileRoute("/youtube")({
  head: () => ({
    meta: [
      { title: "YouTube Channel — Naji & Co" },
      { name: "description", content: "Watch Naji & Co's financial education videos: trading basics, market analysis, risk management and more." },
      { property: "og:title", content: "Naji & Co on YouTube" },
      { property: "og:description", content: "Free educational videos about trading, investing and financial markets." },
      { property: "og:url", content: "/youtube" },
    ],
    links: [{ rel: "canonical", href: "/youtube" }],
  }),
  component: YoutubePage,
});

const categories = ["All", "Beginner", "Technical Analysis", "Risk Management", "Market News", "Psychology"];
const featured = [
  { t: "Forex 101: Currency pairs explained", d: "12:34", cat: "Beginner" },
  { t: "Reading candlestick charts", d: "18:02", cat: "Technical Analysis" },
  { t: "Risk management every trader needs", d: "09:48", cat: "Risk Management" },
  { t: "Macro news for retail traders", d: "14:20", cat: "Market News" },
  { t: "Trading psychology: managing emotion", d: "11:05", cat: "Psychology" },
  { t: "Investing vs trading explained", d: "07:42", cat: "Beginner" },
];

function YoutubePage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="YouTube" title="Learn from our video library" subtitle="Bite-sized lessons and deep dives covering everything from your first chart to advanced strategy." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <button key={c} className={`px-4 py-2 rounded-full text-sm font-medium border transition ${i === 0 ? "bg-navy text-white border-navy" : "border-border text-foreground/70 hover:border-gold hover:text-navy"}`}>{c}</button>
            ))}
          </div>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"><Youtube className="h-4 w-4" /> Subscribe</a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((v) => (
            <article key={v.t} className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-xl transition group">
              <div className="aspect-video gradient-navy relative grid place-items-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_60%)]" />
                <div className="relative grid h-16 w-16 place-items-center rounded-full gradient-gold text-navy-deep shadow-xl group-hover:scale-110 transition"><Play className="h-7 w-7 ml-1" fill="currentColor" /></div>
                <span className="absolute bottom-3 right-3 bg-navy-deep/90 text-white text-xs px-2 py-1 rounded">{v.d}</span>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">{v.cat}</p>
                <h3 className="mt-1 font-semibold text-navy-deep">{v.t}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}