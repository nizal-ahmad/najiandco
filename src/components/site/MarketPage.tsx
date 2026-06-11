import { SiteLayout, PageHero } from "./SiteLayout";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import type { ReactNode } from "react";

export interface MarketSection {
  title: string;
  body: string;
  bullets?: string[];
}

export function MarketPage({
  eyebrow,
  title,
  subtitle,
  sections,
  opportunities,
  risks,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  sections: MarketSection[];
  opportunities: string[];
  risks: string[];
  children?: ReactNode;
}) {
  return (
    <SiteLayout>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <div className="space-y-12">
          {sections.map((s) => (
            <article key={s.title}>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-deep">{s.title}</h2>
              <p className="mt-4 text-foreground/80 leading-relaxed">{s.body}</p>
              {s.bullets && (
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
        {children}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-6">
            <div className="flex items-center gap-2 text-emerald-700"><CheckCircle2 className="h-5 w-5" /><h3 className="font-display text-lg font-semibold">Opportunities</h3></div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              {opportunities.map((o) => <li key={o} className="flex gap-2"><span>•</span><span>{o}</span></li>)}
            </ul>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-6">
            <div className="flex items-center gap-2 text-amber-700"><AlertTriangle className="h-5 w-5" /><h3 className="font-display text-lg font-semibold">Risks to know</h3></div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              {risks.map((o) => <li key={o} className="flex gap-2"><span>•</span><span>{o}</span></li>)}
            </ul>
          </div>
        </div>
        <div className="mt-14 rounded-2xl gradient-navy p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-bold">Want to go deeper?</h3>
            <p className="text-sm text-white/75">Browse structured lessons and videos in our Learning Center.</p>
          </div>
          <Link to="/learning-center" className="inline-flex items-center gap-2 rounded-md gradient-gold px-5 py-3 text-sm font-semibold text-navy-deep">Open Learning Center <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </SiteLayout>
  );
}