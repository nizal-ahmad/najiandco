import { createFileRoute } from "@tanstack/react-router";
import { MarketPage } from "@/components/site/MarketPage";

export const Route = createFileRoute("/markets/forex")({
  head: () => ({
    meta: [
      { title: "Forex Market Explained — Naji & Co" },
      { name: "description", content: "Learn how the forex market works: currency pairs, sessions, participants, opportunities and risks." },
      { property: "og:title", content: "Forex Market Explained" },
      { property: "og:description", content: "Currency pairs, trading sessions, participants and risks of forex trading." },
      { property: "og:url", content: "/markets/forex" },
    ],
    links: [{ rel: "canonical", href: "/markets/forex" }],
  }),
  component: () => (
    <MarketPage
      eyebrow="Forex market"
      title="The Foreign Exchange Market"
      subtitle="The largest and most liquid market in the world — trading currency pairs 24 hours a day, 5 days a week."
      sections={[
        { title: "What is Forex?", body: "Forex (foreign exchange) is the global market for trading one currency against another. With trillions of dollars in daily volume, it is the deepest market on the planet — driven by trade, capital flows, central banks and speculation." },
        { title: "Major, Minor and Exotic Pairs", body: "Currencies trade in pairs. Majors involve the US dollar and the most-traded currencies. Minors are pairs that don't include the US dollar. Exotics combine a major currency with an emerging-market one.", bullets: ["Majors: EUR/USD, GBP/USD, USD/JPY, USD/CHF","Minors: EUR/GBP, EUR/JPY, GBP/JPY","Commodity pairs: AUD/USD, NZD/USD, USD/CAD","Exotics: USD/TRY, EUR/ZAR, USD/MXN"] },
        { title: "Market Participants", body: "Central banks, commercial banks, hedge funds, corporations, brokers and individual traders all interact in the forex market — each with different motives and timeframes." },
        { title: "Trading Sessions", body: "Forex follows the sun across four major sessions: Sydney, Tokyo, London and New York. Liquidity and volatility peak when sessions overlap, especially London/New York." },
      ]}
      opportunities={["High liquidity and tight spreads on major pairs","24-hour access across global sessions","Both rising and falling currencies can be traded","Wide range of educational resources"]}
      risks={["Leverage can amplify losses just as quickly as gains","Macro news and central-bank decisions cause sudden volatility","Currency markets reflect complex global dynamics","Overtrading and emotional decisions are common pitfalls"]}
    />
  ),
});