import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

const markets = [
  { to: "/markets/forex", label: "Forex" },
  { to: "/markets/stocks", label: "Stocks" },
  { to: "/markets/crypto", label: "Crypto" },
  { to: "/markets/commodities", label: "Commodities" },
  { to: "/markets/indices", label: "Indices" },
] as const;

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/learning-center", label: "Learning Center" },
  { to: "/market-insights", label: "Insights" },
  { to: "/youtube", label: "YouTube" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [marketsOpen, setMarketsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {nav.slice(0, 2).map((n) => (
            <Link key={n.to} to={n.to} className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-navy transition-colors" activeProps={{ className: "text-navy" }} activeOptions={{ exact: true }}>{n.label}</Link>
          ))}
          <div className="relative" onMouseEnter={() => setMarketsOpen(true)} onMouseLeave={() => setMarketsOpen(false)}>
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-navy transition-colors">
              Markets <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {marketsOpen && (
              <div className="absolute left-0 top-full pt-2 w-56">
                <div className="rounded-lg border border-border bg-card shadow-lg p-2 animate-fade-in">
                  {markets.map((m) => (
                    <Link key={m.to} to={m.to} className="block px-3 py-2 text-sm rounded-md hover:bg-secondary text-foreground/80 hover:text-navy">{m.label}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {nav.slice(2).map((n) => (
            <Link key={n.to} to={n.to} className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-navy transition-colors" activeProps={{ className: "text-navy" }}>{n.label}</Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="inline-flex items-center rounded-md gradient-gold px-4 py-2 text-sm font-semibold text-navy-deep shadow-sm hover:opacity-90 transition">Get in touch</Link>
        </div>
        <button className="lg:hidden p-2 -mr-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary">{n.label}</Link>
            ))}
            <div className="pt-2 mt-2 border-t border-border">
              <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Markets</p>
              {markets.map((m) => (
                <Link key={m.to} to={m.to} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-sm hover:bg-secondary">{m.label}</Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}