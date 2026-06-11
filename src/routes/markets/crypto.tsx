import { createFileRoute } from "@tanstack/react-router";
import { MarketPage } from "@/components/site/MarketPage";

export const Route = createFileRoute("/markets/crypto")({
  head: () => ({
    meta: [
      { title: "Crypto Market Explained — Naji & Co" },
      { name: "description", content: "Learn cryptocurrency basics, blockchain, Bitcoin, altcoins, volatility and risk management." },
      { property: "og:title", content: "Crypto Market Explained" },
      { property: "og:description", content: "Blockchain, Bitcoin, altcoins and crypto risk management." },
      { property: "og:url", content: "/markets/crypto" },
    ],
    links: [{ rel: "canonical", href: "/markets/crypto" }],
  }),
  component: () => (
    <MarketPage
      eyebrow="Crypto market"
      title="The Cryptocurrency Market"
      subtitle="A 24/7 global market built on blockchain technology — with extraordinary innovation and extraordinary volatility."
      sections={[
        { title: "Cryptocurrency Basics", body: "Cryptocurrencies are digital assets that use cryptography to secure transactions and verify ownership. They operate independently of central banks and governments." },
        { title: "Blockchain Introduction", body: "A blockchain is a distributed, append-only ledger maintained by a network of computers. It enables trustless verification — no single party controls the data." },
        { title: "Bitcoin and Altcoins", body: "Bitcoin (BTC) is the original cryptocurrency and remains the largest by market cap. Altcoins refers to everything else — from Ethereum to thousands of smaller projects with widely varying quality.", bullets: ["Bitcoin: digital store of value","Ethereum: programmable smart contracts","Stablecoins: pegged to fiat currencies","High-risk altcoins: speculative, often illiquid"] },
        { title: "Market Volatility & Risk", body: "Crypto can move 10-20% in a day. Position sizing, cold-storage security, and ignoring social-media hype are all essential parts of responsible participation." },
      ]}
      opportunities={["Exposure to a fast-evolving technology","24/7 global accessibility","Low barriers to entry","Self-custody and financial sovereignty"]}
      risks={["Extreme price volatility","Scams, rug-pulls and fraudulent projects","Regulatory uncertainty across jurisdictions","Lost keys = permanently lost funds"]}
    />
  ),
});