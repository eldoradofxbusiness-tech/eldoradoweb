import Logo from "./Logo";
import ContactButton from "./ContactButton";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = {
  links: { label: string; href: string }[];
  lang: "en" | "es";
  translations: any;
};

export default function NavbarDesktop({ links, lang, translations }: Props) {
  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  return (
    <div className="hidden h-16 md:flex items-center justify-center gap-12 py-4">
      <Logo size="md" />

      <nav className="flex justify-center gap-8">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-sm text-(--color-grey-light) hover:text-white transition">
            {l.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <LanguageSwitcher currentLang={lang} />
        <ContactButton label={lang === "es" ? "Contáctanos" : "Talk to Us"} size="md" href="https://t.me/RPomaFX" />
      </div>
    </div>
  );
}