import { useQuery } from "@tanstack/react-query";
import { getMarketPrices } from "../../lib/api/market.functions";

const defaultItems = [
  { sym: "EUR/USD", price: "1.0842", chg: "+0.21%", up: true },
  { sym: "GBP/USD", price: "1.2674", chg: "-0.08%", up: false },
  { sym: "USD/JPY", price: "152.34", chg: "+0.42%", up: true },
  { sym: "BTC", price: "67,420", chg: "+1.84%", up: true },
  { sym: "ETH", price: "3,512", chg: "+2.10%", up: true },
  { sym: "GOLD", price: "2,341.20", chg: "+0.36%", up: true },
  { sym: "SILVER", price: "29.84", chg: "-0.12%", up: false },
  { sym: "WTI OIL", price: "78.42", chg: "-0.55%", up: false },
  { sym: "S&P 500", price: "5,432.10", chg: "+0.48%", up: true },
  { sym: "NASDAQ", price: "17,890", chg: "+0.72%", up: true },
  { sym: "DOW", price: "39,210", chg: "+0.18%", up: true },
  { sym: "AAPL", price: "184.30", chg: "+1.05%", up: true },
];

export function Ticker() {
  const { data: items = defaultItems } = useQuery({
    queryKey: ["marketPrices"],
    queryFn: () => getMarketPrices(),
    refetchInterval: 30000, // Refetch every 30 seconds
    refetchOnWindowFocus: true,
    initialData: defaultItems,
  });

  const loop = [...items, ...items];
  return (
    <div className="bg-navy-deep text-white/90 border-b border-white/10 overflow-hidden">
      <div className="flex ticker whitespace-nowrap py-2 text-xs font-medium">
        {loop.map((i, idx) => (
          <div key={idx} className="flex items-center gap-2 px-5">
            <span className="text-white/60">{i.sym}</span>
            <span className="text-white">{i.price}</span>
            <span className={i.up ? "text-emerald-400" : "text-rose-400"}>{i.chg}</span>
          </div>
        ))}
      </div>
      <p className="sr-only">Live financial market rates ticker.</p>
    </div>
  );
}