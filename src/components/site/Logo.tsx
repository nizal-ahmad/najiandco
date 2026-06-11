import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <span className="grid place-items-center h-9 w-9 rounded-md gradient-gold text-navy-deep font-display font-bold text-lg shadow-sm">
        N
      </span>
      <span className={`font-display font-bold text-xl tracking-tight ${light ? "text-white" : "text-navy-deep"}`}>
        Naji <span className="text-gold">&amp;</span> Co
      </span>
    </Link>
  );
}