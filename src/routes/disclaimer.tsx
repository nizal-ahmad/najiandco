import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Naji & Co" },
      { name: "description", content: "Important disclaimer: content is educational only and not financial advice." },
      { property: "og:title", content: "Disclaimer" },
      { property: "og:description", content: "Educational purposes only — not financial advice." },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Disclaimer" />
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <div className="rounded-xl border border-amber-300 bg-amber-50/60 p-6 flex gap-4">
          <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0" />
          <p className="text-foreground/80 leading-relaxed">All content on Naji &amp; Co is for educational and informational purposes only. <strong>It does not constitute financial, investment, trading, legal or tax advice.</strong></p>
        </div>
        <article className="mt-8 space-y-6 text-foreground/80 leading-relaxed">
          <p>Trading and investing in financial markets involves significant risk, including the possible loss of your entire capital. Past performance is never a reliable indicator of future results.</p>
          <p>Before making any financial decision, you should carefully consider your financial situation, objectives and risk tolerance, and seek advice from a qualified, licensed professional in your jurisdiction.</p>
          <p>Naji &amp; Co, its founders, employees and contributors are not liable for any losses or damages arising from the use of any information published on this site or in our videos.</p>
          <p>You are solely responsible for your own decisions and actions in the markets.</p>
        </article>
      </section>
    </SiteLayout>
  ),
});