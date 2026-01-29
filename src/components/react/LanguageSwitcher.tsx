import { Globe } from "lucide-react";

type Props = {
  currentLang: "en" | "es";
};

export default function LanguageSwitcher({ currentLang }: Props) {
  
  const toggleLanguage = () => {
    const { pathname, search } = window.location;
    
    let newPath;
    if (currentLang === "en") {
      newPath = `/es${pathname === "/" ? "" : pathname}`;
    } else {
      newPath = pathname.replace(/^\/es/, "") || "/";
    }
    window.location.href = newPath + search;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-xs font-medium uppercase tracking-wider"
      aria-label="Change language"
    >
      <Globe size={14} className="text-(--color-gold)" />
      <span>{currentLang === "en" ? "EN" : "ES"}</span>
    </button>
  );
}