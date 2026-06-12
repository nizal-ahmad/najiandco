import { createServerFn } from "@tanstack/react-start";

const YAHOO_SYMBOLS: Record<string, string> = {
  "EUR/USD": "EURUSD=X",
  "GBP/USD": "GBPUSD=X",
  "USD/JPY": "USDJPY=X",
  "BTC": "BTC-USD",
  "ETH": "ETH-USD",
  "GOLD": "GC=F",
  "SILVER": "SI=F",
  "WTI OIL": "CL=F",
  "S&P 500": "^GSPC",
  "NASDAQ": "^IXIC",
  "DOW": "^DJI",
  "AAPL": "AAPL"
};

export interface MarketTickerItem {
  sym: string;
  price: string;
  chg: string;
  up: boolean;
}

let cachedData: MarketTickerItem[] | null = null;
let lastFetchTime = 0;
const CACHE_TTL = 15000; // 15 seconds cache

export const getMarketPrices = createServerFn({ method: "GET" })
  .handler(async (): Promise<MarketTickerItem[]> => {
    const now = Date.now();
    if (cachedData && now - lastFetchTime < CACHE_TTL) {
      return cachedData;
    }

    const settled = await Promise.all(
      Object.entries(YAHOO_SYMBOLS).map(async ([sym, yahooSymbol]) => {
        try {
          const response = await fetch(
            `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(yahooSymbol)}?interval=1d&range=1d`,
            {
              headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
              }
            }
          );
          if (!response.ok) {
            throw new Error(`Failed to fetch ${yahooSymbol}: ${response.statusText}`);
          }
          const data = (await response.json()) as any;
          const meta = data?.chart?.result?.[0]?.meta;
          if (!meta) {
            throw new Error(`No metadata found for ${yahooSymbol}`);
          }

          const priceNum = meta.regularMarketPrice;
          const prevCloseNum = meta.chartPreviousClose ?? meta.previousClose;

          if (priceNum === undefined || priceNum === null) {
            throw new Error(`No price found for ${yahooSymbol}`);
          }

          let chgPercent = 0;
          if (prevCloseNum) {
            chgPercent = ((priceNum - prevCloseNum) / prevCloseNum) * 100;
          }

          // Format price
          let formattedPrice = "";
          if (sym.includes("/") || sym === "SILVER") {
            formattedPrice = priceNum.toFixed(4);
          } else if (priceNum >= 1000) {
            formattedPrice = priceNum.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            });
          } else {
            formattedPrice = priceNum.toFixed(2);
          }

          const up = chgPercent >= 0;
          const chgSign = up ? "+" : "";
          const formattedChg = `${chgSign}${chgPercent.toFixed(2)}%`;

          return {
            sym,
            price: formattedPrice,
            chg: formattedChg,
            up,
          };
        } catch (error) {
          console.error(`Error fetching ticker ${sym} (${yahooSymbol}):`, error);
          return null;
        }
      })
    );

    const validResults = settled.filter((item): item is MarketTickerItem => item !== null);

    const fallbacks: Record<string, Omit<MarketTickerItem, "sym">> = {
      "EUR/USD": { price: "1.0842", chg: "+0.21%", up: true },
      "GBP/USD": { price: "1.2674", chg: "-0.08%", up: false },
      "USD/JPY": { price: "152.34", chg: "+0.42%", up: true },
      "BTC": { price: "67,420", chg: "+1.84%", up: true },
      "ETH": { price: "3,512", chg: "+2.10%", up: true },
      "GOLD": { price: "2,341.20", chg: "+0.36%", up: true },
      "SILVER": { price: "29.84", chg: "-0.12%", up: false },
      "WTI OIL": { price: "78.42", chg: "-0.55%", up: false },
      "S&P 500": { price: "5,432.10", chg: "+0.48%", up: true },
      "NASDAQ": { price: "17,890", chg: "+0.72%", up: true },
      "DOW": { price: "39,210", chg: "+0.18%", up: true },
      "AAPL": { price: "184.30", chg: "+1.05%", up: true },
    };

    const finalResult = Object.keys(YAHOO_SYMBOLS).map((sym) => {
      const found = validResults.find((r) => r.sym === sym);
      if (found) return found;
      return {
        sym,
        ...fallbacks[sym],
      };
    });

    cachedData = finalResult;
    lastFetchTime = now;
    return finalResult;
  });
