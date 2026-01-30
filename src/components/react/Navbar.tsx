import { useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

type Props = {
  lang: "en" | "es";
  translations: any;
};

export default function Navbar({ lang, translations }: Props) {
  const [open, setOpen] = useState(false);

  const t = (key: string): string => {
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

  const prefix = lang === "es" ? "/es" : "";

  const links = [
    { label: t("navbar.home"), href: `${prefix}/` },
    { label: t("navbar.services"), href: `${prefix}/services` },
    { label: t("navbar.about"), href: `${prefix}/about` },
    { label: t("navbar.contact"), href: `${prefix}/contact` },
  ];

  return (
    <div className="relative z-20">
      <NavbarMobile
        links={links}
        open={open}
        onToggle={() => setOpen(!open)}
        onClose={() => setOpen(false)}
        lang={lang}
      />

      <NavbarDesktop
        links={links}
        lang={lang}
        translations={translations}
      />
    </div>
  );
}
