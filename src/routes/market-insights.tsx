import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Calendar, TrendingUp, FileText, Newspaper } from "lucide-react";

export const Route = createFileRoute("/market-insights")({
  head: () => ({
    meta: [
      { title: "Market Insights — Naji & Co" },
      { name: "description", content: "Educational market analysis, weekly outlooks, commentary and the economic calendar." },
      { property: "og:title", content: "Market Insights" },
      { property: "og:description", content: "Daily and weekly educational market commentary." },
      { property: "og:url", content: "/market-insights" },
    ],
    links: [{ rel: "canonical", href: "/market-insights" }],
  }),
  component: InsightsPage,
});

const items = [
  { icon: TrendingUp, tag: "Daily analysis", title: "What moved the markets today", desc: "A clear-eyed look at the day's notable price action across forex, stocks and crypto." },
  { icon: FileText, tag: "Weekly outlook", title: "Setting up the week ahead", desc: "Key events, data releases and themes to watch over the coming five sessions." },
  { icon: Newspaper, tag: "Commentary", title: "Educational market commentary", desc: "Macro themes explained in plain language — what they mean for everyday participants." },
];

const calendar = [
  { date: "Mon", time: "08:30", event: "US CPI Inflation Report", impact: "High" },
  { date: "Wed", time: "14:00", event: "FOMC Interest Rate Decision", impact: "High" },
  { date: "Thu", time: "12:30", event: "ECB Press Conference", impact: "High" },
  { date: "Fri", time: "08:30", event: "US Non-Farm Payrolls", impact: "High" },
  { date: "Fri", time: "10:00", event: "UoM Consumer Sentiment", impact: "Med" },
];

function InsightsPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Market Insights" title="Educational market analysis and commentary" subtitle="Helping you make sense of price moves, news cycles and the events that shape global markets." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((i) => (
            <article key={i.title} className="rounded-xl border border-border bg-card p-7 hover:shadow-lg transition">
              <div className="grid h-11 w-11 place-items-center rounded-md gradient-navy text-gold"><i.icon className="h-5 w-5" /></div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-gold">{i.tag}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-navy-deep">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="h-6 w-6 text-gold" />
            <h2 className="font-display text-2xl font-bold text-navy-deep">Economic calendar — this week</h2>
          </div>
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="gradient-navy text-white">
                <tr className="text-left">
                  <th className="px-5 py-3 font-semibold">Day</th>
                  <th className="px-5 py-3 font-semibold">Time (UTC)</th>
                  <th className="px-5 py-3 font-semibold">Event</th>
                  <th className="px-5 py-3 font-semibold">Impact</th>
                </tr>
              </thead>
              <tbody>
                {calendar.map((c, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="px-5 py-4 font-semibold text-navy-deep">{c.date}</td>
                    <td className="px-5 py-4 text-muted-foreground">{c.time}</td>
                    <td className="px-5 py-4">{c.event}</td>
                    <td className="px-5 py-4"><span className={`px-2 py-1 rounded text-xs font-semibold ${c.impact === "High" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`}>{c.impact}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Calendar is illustrative and provided for educational purposes only.</p>
        </div>
      </section>
    </SiteLayout>
  );
}