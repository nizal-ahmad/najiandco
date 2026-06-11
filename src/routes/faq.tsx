import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Naji & Co" },
      { name: "description", content: "Common questions about Naji & Co's financial education content and approach." },
      { property: "og:title", content: "FAQ — Naji & Co" },
      { property: "og:description", content: "Answers to common questions." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "Is Naji & Co a broker or financial advisor?", a: "No. We are an educational platform. We do not provide brokerage services or personalised financial advice." },
  { q: "Is the content suitable for complete beginners?", a: "Yes. Our content is designed to be accessible to people with no prior financial markets background, while still being useful for intermediate learners." },
  { q: "Do I need to pay to access lessons?", a: "Much of our content — including our YouTube videos and articles — is free. Some structured programs may be offered separately." },
  { q: "Which markets do you cover?", a: "Forex, stocks, crypto, commodities and global indices. We focus on understanding rather than predictions." },
  { q: "Can you recommend a broker or platform?", a: "We don't recommend specific brokers. We do teach you how to evaluate one — regulation, fees, custody and reputation." },
  { q: "Do you guarantee trading profits?", a: "Absolutely not. Anyone who guarantees profits in the market is misleading you. We teach risk-aware participation." },
];

function FAQPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" />
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-navy-deep">{f.q}</AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </SiteLayout>
  );
}