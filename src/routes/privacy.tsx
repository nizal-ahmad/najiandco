import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Naji & Co" },
      { name: "description", content: "How Naji & Co handles your personal information." },
      { property: "og:title", content: "Privacy Policy" },
      { property: "og:description", content: "Naji & Co privacy policy." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <article className="space-y-6 text-foreground/80 leading-relaxed">
          <p>Naji &amp; Co ("we", "us") respects your privacy. This policy explains what data we collect, how we use it, and your rights.</p>
          <h2 className="font-display text-2xl text-navy-deep font-bold">Information we collect</h2>
          <p>We collect information you provide when contacting us or subscribing to our newsletter, and limited technical data automatically (such as analytics on page visits).</p>
          <h2 className="font-display text-2xl text-navy-deep font-bold">How we use information</h2>
          <p>To respond to inquiries, send educational content you've opted in to, and improve the site. We do not sell your personal information.</p>
          <h2 className="font-display text-2xl text-navy-deep font-bold">Your rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data at any time by contacting official@najiandco.com.</p>
          <h2 className="font-display text-2xl text-navy-deep font-bold">Cookies</h2>
          <p>We use minimal cookies for site functionality and anonymous analytics. You can disable cookies in your browser settings.</p>
          <p className="text-sm text-muted-foreground">Last updated: June 2026.</p>
        </article>
      </section>
    </SiteLayout>
  ),
});