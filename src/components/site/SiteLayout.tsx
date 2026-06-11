import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Ticker } from "./Ticker";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Ticker />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="gradient-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">{eyebrow}</p>}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-5 text-lg text-white/75 max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}