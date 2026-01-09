import { Send } from "lucide-react";
import Logo from "./Logo";
import ContactButton from "./ContactButton";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NavbarDesktop() {
  return (
    <div className="hidden h-16  md:flex items-center justify-center gap-48 py-4">
      {/* LOGO */}
      <Logo />

      {/* LINKS */}
      <nav className="flex justify-center gap-8">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm text-(--color-grey-light) transition hover:text-white"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <ContactButton label="Contact Us" size="md" />
    </div>
  );
}
