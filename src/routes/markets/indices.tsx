import { createFileRoute } from "@tanstack/react-router";
import { MarketPage } from "@/components/site/MarketPage";

export const Route = createFileRoute("/markets/indices")({
  head: () => ({
    meta: [
      { title: "Indices Market Explained — Naji & Co" },
      { name: "description", content: "Learn what market indices are, major global indices, index trading concepts and sentiment analysis." },
      { property: "og:title", content: "Indices Market" },
      { property: "og:description", content: "S&P 500, NASDAQ, FTSE, DAX and how indices work." },
      { property: "og:url", content: "/markets/indices" },
    ],
    links: [{ rel: "canonical", href: "/markets/indices" }],
  }),
  component: () => (
    <MarketPage
      eyebrow="Indices market"
      title="Market Indices"
      subtitle="Benchmark baskets that summarize the performance of entire markets or sectors in a single number."
      sections={[
        { title: "What are Market Indices?", body: "An index is a weighted basket of securities used to track the performance of a market, sector or strategy. They serve as benchmarks for investors and underlying assets for funds and derivatives." },
        { title: "Major Global Indices", body: "Different indices represent different economies, market caps and sectors.", bullets: ["S&P 500 — 500 large US companies","NASDAQ 100 — US tech-heavy index","Dow Jones Industrial Average","FTSE 100 (UK), DAX (Germany), Nikkei 225 (Japan)","Hang Seng (Hong Kong), Sensex (India)"] },
        { title: "Index Trading Concepts", body: "You can gain exposure to indices through ETFs, index funds, futures, options and CFDs. Each instrument has different costs, leverage and time horizons." },
        { title: "Market Sentiment Analysis", body: "Indices are a key gauge of overall sentiment. Breadth, volatility (VIX), and sector rotation all provide clues about what investors collectively think and feel." },
      ]}
      opportunities={["Broad diversification in a single trade","Easy to combine with macro analysis","Liquid and well-researched markets","Lower idiosyncratic risk than single stocks"]}
      risks={["Indices still decline during recessions","Leveraged products amplify losses quickly","Concentration in top names within an index","Sentiment can shift rapidly with macro news"]}
    />
  ),
});