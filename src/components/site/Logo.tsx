import { Link } from "@tanstack/react-router";
import logoImg from "../../assets/logo.png";

export function Logo({ 
  light = false,
  className = ""
}: { 
  light?: boolean;
  className?: string;
}) {
  return (
    <Link to="/" className={`inline-flex items-center group ${className}`}>
      {light ? (
        // Footer variation: Render transparent logo inside a soft white card to contrast with the dark navy background
        <div className="bg-white p-2 rounded-xl shadow-sm transition hover:bg-white/95 flex items-center justify-center">
          <img 
            src={logoImg} 
            alt="Naji & Co." 
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </div>
      ) : (
        // Header variation: Merges directly with light background, and adds a white backing card in dark mode
        <div className="dark:bg-white/95 dark:p-1.5 dark:rounded-lg dark:shadow-sm transition-all duration-200 flex items-center justify-center">
          <img 
            src={logoImg} 
            alt="Naji & Co." 
            className="h-16 sm:h-[100px] w-auto object-contain transition group-hover:opacity-90 dark:h-12 dark:sm:h-[84px]"
          />
        </div>
      )}
    </Link>
  );
}