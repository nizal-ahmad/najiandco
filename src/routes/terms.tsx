import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Naji & Co" },
      { name: "description", content: "Terms governing your use of the Naji & Co website and content." },
      { property: "og:title", content: "Terms & Conditions" },
      { property: "og:description", content: "Naji & Co terms of use." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <article className="space-y-6 text-foreground/80 leading-relaxed">
          <p>By using najiandco.com you agree to these terms. If you do not agree, please do not use the site.</p>
          <h2 className="font-display text-2xl text-navy-deep font-bold">Educational content only</h2>
          <p>All content is provided for educational and informational purposes only. It is not financial, investment or tax advice. You are responsible for your own decisions.</p>
          <h2 className="font-display text-2xl text-navy-deep font-bold">Intellectual property</h2>
          <p>All content, branding and materials on the site are the property of Naji &amp; Co or its licensors. You may not reproduce or redistribute without permission.</p>
          <h2 className="font-display text-2xl text-navy-deep font-bold">Limitation of liability</h2>
          <p>To the maximum extent permitted by law, Naji &amp; Co shall not be liable for any losses arising from your use of the information on this site.</p>
          <h2 className="font-display text-2xl text-navy-deep font-bold">Changes</h2>
          <p>We may update these terms occasionally. Continued use of the site after changes means you accept the updated terms.</p>
          <p className="text-sm text-muted-foreground">Last updated: June 2026.</p>
        </article>
      </section>
    </SiteLayout>
  ),
});