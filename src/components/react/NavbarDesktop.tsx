import Logo from "./Logo";
import ContactButton from "./ContactButton";
import LanguageSwitcher from "./LanguageSwitcher";
type Props = {
  links: { label: string; href: string }[];
};

export default function NavbarDesktop({ links, lang }: { links: any[], lang: "en" | "es" }) {
  return (
    <div className="hidden h-16 md:flex items-center justify-center gap-12 py-4">
      <Logo size="xl" />

      <nav className="flex justify-center gap-8">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-sm text-(--color-grey-light) hover:text-white transition">
            {l.label}
          </a>
        ))}
      </nav>

      {/* Selector de idioma e integración con el botón de contacto */}
      <div className="flex items-center gap-4">
        <LanguageSwitcher currentLang={lang} />
        <ContactButton label={lang === "es" ? "Contáctanos" : "Talk to Us"} size="md" href="https://t.me/RPomaFX" />
      </div>
    </div>
  );
}