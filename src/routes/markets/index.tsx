import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Globe2, LineChart, Bitcoin, Coins, BarChart3, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/markets/")({
  head: () => ({
    meta: [
      { title: "Financial Markets — Naji & Co" },
      { name: "description", content: "Explore forex, stocks, crypto, commodities and indices with beginner-friendly education." },
      { property: "og:title", content: "Financial Markets — Naji & Co" },
      { property: "og:description", content: "Forex, stocks, crypto, commodities and indices explained." },
      { property: "og:url", content: "/markets" },
    ],
    links: [{ rel: "canonical", href: "/markets" }],
  }),
  component: MarketsIndex,
});

const markets = [
  { to: "/markets/forex", icon: Globe2, title: "Forex", desc: "The world's most liquid market — currency pairs traded 24/5 across global sessions." },
  { to: "/markets/stocks", icon: LineChart, title: "Stocks", desc: "Shares of companies traded on exchanges around the world." },
  { to: "/markets/crypto", icon: Bitcoin, title: "Crypto", desc: "Bitcoin, Ethereum and altcoins — built on blockchain technology." },
  { to: "/markets/commodities", icon: Coins, title: "Commodities", desc: "Gold, silver, oil, gas and agricultural products." },
  { to: "/markets/indices", icon: BarChart3, title: "Indices", desc: "Benchmark baskets that track the performance of entire markets." },
] as const;

function MarketsIndex() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Markets" title="Understand the five major financial markets" subtitle="Each market has its own rules, participants and risks. Start with the one that interests you most." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {markets.map((m) => (
            <Link key={m.to} to={m.to} className="group rounded-xl border border-border bg-card p-7 hover:border-gold hover:shadow-xl transition-all">
              <div className="grid h-12 w-12 place-items-center rounded-lg gradient-gold text-white"><m.icon className="h-6 w-6" /></div>
              <h2 className="mt-5 font-display text-xl font-semibold text-navy-deep">{m.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-gold">Explore <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}