import { useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

type Props = {
  lang: "en" | "es";
};

export default function Navbar({ lang }: Props) {
  const [open, setOpen] = useState(false);

  const prefix = lang === "es" ? "/es" : "";

  const links = [
    { label: lang === "es" ? "Inicio" : "Home", href: `${prefix}/` },
    { label: lang === "es" ? "Servicios" : "Services", href: `${prefix}/services` },
    { label: lang === "es" ? "Sobre nosotros" : "About", href: `${prefix}/about` },
    { label: lang === "es" ? "Contacto" : "Contact", href: `${prefix}/contact` },
  ];

  return (
    <div className="relative z-20">
      <NavbarMobile
        links={links}
        open={open}
        onToggle={() => setOpen(!open)}
        onClose={() => setOpen(false)}
      />

      <NavbarDesktop 
        links={links}
      />
    </div>
  );
}
