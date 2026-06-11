import { createFileRoute } from "@tanstack/react-router";
import { MarketPage } from "@/components/site/MarketPage";

export const Route = createFileRoute("/markets/commodities")({
  head: () => ({
    meta: [
      { title: "Commodities Market Explained — Naji & Co" },
      { name: "description", content: "Learn how commodity markets work: gold, silver, oil, natural gas and agricultural products." },
      { property: "og:title", content: "Commodities Market" },
      { property: "og:description", content: "Gold, silver, oil, gas and agriculture — how commodity trading works." },
      { property: "og:url", content: "/markets/commodities" },
    ],
    links: [{ rel: "canonical", href: "/markets/commodities" }],
  }),
  component: () => (
    <MarketPage
      eyebrow="Commodities market"
      title="The Commodities Market"
      subtitle="Raw materials that power the global economy — traded across spot, futures and derivatives markets."
      sections={[
        { title: "Precious Metals: Gold & Silver", body: "Gold has been a store of value for thousands of years and is often seen as a hedge against inflation and currency debasement. Silver combines monetary and industrial demand." },
        { title: "Energy: Oil & Natural Gas", body: "Crude oil (WTI, Brent) and natural gas are the world's most important energy commodities. Their prices are driven by supply (OPEC, US shale, geopolitics) and demand (global growth, weather)." },
        { title: "Agricultural Commodities", body: "Wheat, corn, coffee, sugar and soybeans are traded globally — heavily affected by weather, harvests and trade policy.", bullets: ["Grains: wheat, corn, soybeans","Softs: coffee, sugar, cocoa","Livestock contracts","Seasonality matters"] },
        { title: "How Commodity Trading Works", body: "Most retail exposure happens through futures contracts, ETFs or CFDs — not physical delivery. Each instrument has its own contract specifications, expiry and risk profile." },
      ]}
      opportunities={["Portfolio diversification beyond stocks and bonds","Inflation hedging with precious metals","Exposure to global supply/demand dynamics","Multiple instruments to suit different risk levels"]}
      risks={["Sharp moves driven by weather, geopolitics or OPEC","Futures contracts have leverage and expiry risk","Storage and rollover costs can erode returns","Highly cyclical — timing matters"]}
    />
  ),
});