
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

type Props = {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  links: { label: string; href: string }[];
  lang: "en" | "es";
};

export default function NavbarMobile({ open, onToggle, onClose, links, lang }: Props) {
  return (
    <div className="flex items-center justify-between p-6 md:hidden relative z-50">
      {/* LEFT */}
      <Logo size="lg" />

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <LanguageSwitcher currentLang={lang} />
        <MobileMenu open={open} onToggle={onToggle} onClose={onClose} links={links} />
      </div>
    </div>
  );
}