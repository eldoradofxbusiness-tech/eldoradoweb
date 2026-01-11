import { Send } from "lucide-react";
import Logo from "./Logo";
import ContactButton from "./ContactButton";

type Props = {
  links: { label: string; href: string }[];
};

export default function NavbarDesktop({ links }: Props) {
  return (
    <div className="hidden h-16  md:flex items-center justify-center gap-48 py-4">
      {/* LOGO */}
      <Logo size="xl" />

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
