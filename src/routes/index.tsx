import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-markets.jpg";
import { TrendingUp, BookOpen, ShieldCheck, GraduationCap, LineChart, Coins, Bitcoin, BarChart3, Youtube, ArrowRight, Quote, Sparkles, Globe2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naji & Co — Discover the Real World of Financial Markets" },
      { name: "description", content: "Learn forex, stocks, crypto, commodities and indices through clear, beginner-friendly education from Naji & Co." },
      { property: "og:title", content: "Naji & Co — Financial Markets Education" },
      { property: "og:description", content: "Beginner-friendly financial market education. Forex, stocks, crypto, commodities, indices." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const markets = [
  { to: "/markets/forex", icon: Globe2, title: "Forex", desc: "The world's largest market: currency pairs and global liquidity." },
  { to: "/markets/stocks", icon: LineChart, title: "Stocks", desc: "Own shares of companies and learn investing fundamentals." },
  { to: "/markets/crypto", icon: Bitcoin, title: "Crypto", desc: "Bitcoin, altcoins and the foundations of blockchain markets." },
  { to: "/markets/commodities", icon: Coins, title: "Commodities", desc: "Gold, silver, oil, gas and agricultural products." },
  { to: "/markets/indices", icon: BarChart3, title: "Indices", desc: "Track entire economies through major global indices." },
] as const;

const benefits = [
  { icon: GraduationCap, title: "Beginner-friendly", desc: "Complex concepts explained in plain language, step by step." },
  { icon: ShieldCheck, title: "Responsible education", desc: "We focus on risk management before profits — every time." },
  { icon: TrendingUp, title: "Practical insights", desc: "Real market context, not theory locked in textbooks." },
  { icon: BookOpen, title: "Structured learning", desc: "Clear paths from your first chart to advanced strategies." },
];

const testimonials = [
  { name: "Amira H.", role: "New investor", quote: "Naji & Co made the markets click for me. I finally understand what I'm looking at on a chart." },
  { name: "David M.", role: "Part-time trader", quote: "The risk management content alone changed how I approach every trade. Honest and clear." },
  { name: "Sofia R.", role: "Finance student", quote: "Better than half my coursework. The YouTube videos are gold — pun intended." },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative gradient-navy text-white overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-36">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              <Sparkles className="h-3.5 w-3.5" /> Financial Education Platform
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-white">
              Discover the <span className="text-gold">Real World</span> of Financial Markets
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">
              Learn trading, investing and market analysis with clear, beginner-friendly lessons from Naji &amp; Co. Build real understanding — not hype.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/learning-center" className="inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition">
                Start Learning <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/youtube" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition">
                <Youtube className="h-4 w-4 text-gold" /> Watch YouTube Videos
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
              {[{n: "50K+", l: "Learners"}, {n: "200+", l: "Lessons"}, {n: "5", l: "Markets covered"}].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl sm:text-4xl text-gold font-bold">{s.n}</p>
                  <p className="text-xs text-white/60 mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Why learn financial markets</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-navy-deep">Financial literacy is the new advantage</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Understanding how markets actually work — beyond headlines and tips — is one of the most valuable skills you can build. We make it accessible.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-xl border border-border bg-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="grid h-11 w-11 place-items-center rounded-md gradient-navy text-gold">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-deep">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MARKETS */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Market categories</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-navy-deep">Explore every major market</h2>
            </div>
            <Link to="/learning-center" className="text-sm font-semibold text-navy hover:text-gold inline-flex items-center gap-1">
              View all lessons <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((m) => (
              <Link key={m.to} to={m.to} className="group rounded-xl border border-border bg-card p-7 hover:border-gold hover:shadow-xl transition-all">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-lg gradient-gold text-white">
                    <m.icon className="h-6 w-6" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy-deep">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CONTENT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Featured educational content</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-navy-deep">From your first candle to your first strategy</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our learning paths walk you through the foundations of trading and investing — without skipping the risk-management lessons that matter most.
            </p>
            <ul className="mt-6 space-y-3">
              {["Beginner trading guide & terminology","Technical analysis fundamentals","Fundamental analysis explained","Risk management & position sizing","Trading psychology in practice"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-foreground/80">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/learning-center" className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-deep transition">
              Open Learning Center <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 gradient-gold opacity-20 blur-2xl rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img src={heroImg} alt="Market chart visualization" loading="lazy" width={1920} height={1080} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* YOUTUBE */}
      <section className="gradient-navy text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Latest from YouTube</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">Watch and learn at your own pace</h2>
            </div>
            <Link to="/youtube" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-soft">
              Visit channel <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: "Forex 101: Currency pairs explained", d: "12:34" },
              { t: "Reading candlestick charts the right way", d: "18:02" },
              { t: "Risk management every trader needs", d: "09:48" },
            ].map((v) => (
              <div key={v.t} className="rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-gold transition">
                <div className="aspect-video bg-navy-deep relative grid place-items-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_60%)]" />
                  <div className="relative grid h-14 w-14 place-items-center rounded-full gradient-gold text-white shadow-lg">
                    <Youtube className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-white/60">{v.d}</p>
                  <h3 className="mt-1 text-base font-semibold text-white">{v.t}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Testimonials</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-navy-deep">Learners we've helped along the way</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-xl border border-border bg-card p-7">
              <Quote className="h-7 w-7 text-gold" />
              <blockquote className="mt-4 text-foreground/80 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-5 pt-5 border-t border-border">
                <p className="font-semibold text-navy-deep">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20">
        <div className="relative overflow-hidden rounded-2xl gradient-navy p-10 sm:p-14 text-white">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Ready to take the first step?</h2>
              <p className="mt-3 text-white/75">Get in touch — we'll guide you to the right starting point for your journey.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md gradient-gold px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition">
              Contact Naji &amp; Co <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
