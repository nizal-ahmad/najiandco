import { createFileRoute } from "@tanstack/react-router";
import { MarketPage } from "@/components/site/MarketPage";

export const Route = createFileRoute("/markets/stocks")({
  head: () => ({
    meta: [
      { title: "Stock Market Explained — Naji & Co" },
      { name: "description", content: "Learn how stocks and exchanges work, investing vs trading, dividends and risk factors." },
      { property: "og:title", content: "Stock Market Explained" },
      { property: "og:description", content: "Shares, exchanges, investing vs trading, dividends and risks." },
      { property: "og:url", content: "/markets/stocks" },
    ],
    links: [{ rel: "canonical", href: "/markets/stocks" }],
  }),
  component: () => (
    <MarketPage
      eyebrow="Stock market"
      title="The Stock Market"
      subtitle="Where ownership of public companies is bought and sold — and where long-term wealth is most often built."
      sections={[
        { title: "What are Stocks?", body: "A stock represents fractional ownership in a company. When you own shares, you own a piece of the business — entitled to a portion of its future profits, growth and (sometimes) dividends." },
        { title: "How Stock Exchanges Work", body: "Exchanges like NYSE, NASDAQ and LSE match buyers and sellers under strict rules. Companies must meet listing requirements and disclose financials regularly — protecting investors and providing transparency." },
        { title: "Investing vs Trading", body: "Investors hold positions for years to benefit from compounding and business growth. Traders aim to profit from shorter-term price moves. Both can work — but they require very different mindsets and skills." },
        { title: "Dividend Investing", body: "Some companies share profits with shareholders through dividends. Dividend investing focuses on steady cash flow and long-term compounding, often with lower volatility than growth investing.", bullets: ["Dividend yield","Payout ratio","Dividend growth history","Sector and economic resilience"] },
      ]}
      opportunities={["Long-term wealth building through compounding","Passive income through dividends","Ownership in real businesses you understand","Strong regulatory oversight on major exchanges"]}
      risks={["Individual companies can fail or underperform","Markets can decline sharply during recessions","Concentration in a few stocks increases risk","Emotional reactions to volatility hurt long-term returns"]}
    />
  ),
});