import { Link } from "@tanstack/react-router";
import { Youtube, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="gradient-navy text-white/80 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Trusted financial market education for beginners and intermediate learners. Forex, stocks, crypto, commodities and indices — explained simply.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-md bg-white/5 hover:bg-gold hover:text-navy-deep transition"><Youtube className="h-4 w-4" /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-md bg-white/5 hover:bg-gold hover:text-navy-deep transition"><Twitter className="h-4 w-4" /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-md bg-white/5 hover:bg-gold hover:text-navy-deep transition"><Instagram className="h-4 w-4" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-md bg-white/5 hover:bg-gold hover:text-navy-deep transition"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
              <li><Link to="/learning-center" className="hover:text-gold">Learning Center</Link></li>
              <li><Link to="/market-insights" className="hover:text-gold">Market Insights</Link></li>
              <li><Link to="/youtube" className="hover:text-gold">YouTube Channel</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-gold">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Markets</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/markets/forex" className="hover:text-gold">Forex</Link></li>
              <li><Link to="/markets/stocks" className="hover:text-gold">Stocks</Link></li>
              <li><Link to="/markets/crypto" className="hover:text-gold">Crypto</Link></li>
              <li><Link to="/markets/commodities" className="hover:text-gold">Commodities</Link></li>
              <li><Link to="/markets/indices" className="hover:text-gold">Indices</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> <a href="mailto:official@najiandco.com" className="hover:text-gold">official@najiandco.com</a></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +1 (555) 012-3456</li>
            </ul>
            <div className="mt-5">
              <h5 className="text-white text-sm font-semibold mb-2">Legal</h5>
              <ul className="space-y-1 text-sm">
                <li><Link to="/privacy" className="hover:text-gold">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-gold">Terms &amp; Conditions</Link></li>
                <li><Link to="/disclaimer" className="hover:text-gold">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© Naji &amp; Co. All Rights Reserved.</p>
          <p>Educational content only — not financial advice.</p>
        </div>
      </div>
    </footer>
  );
}