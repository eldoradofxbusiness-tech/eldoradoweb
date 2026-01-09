import { Menu, X } from "lucide-react";

type Props = {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
};

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu({ open, onToggle, onClose }: Props) {
  return (
    <div className="relative">
     
     <div className="relative flex items-center justify-center rounded-full  p-2 backdrop-blur">
        <button
            onClick={onToggle}
            className="relative h-6 w-6"
            aria-label="Toggle menu"
        >
            <Menu
            size={24}
            className={`
                absolute inset-0 transition-all duration-300
                ${open ? "rotate-90 scale-0 opacity-0" : "opacity-100"}
            `}
            />
            <X
            size={24}
            className={`
                absolute inset-0 transition-all duration-300
                ${open ? "opacity-100" : "-rotate-90 scale-0 opacity-0"}
            `}
            />
        </button>
    </div>


      {/* DROPDOWN */}
        <div
        className={`
            absolute
            right-1/4
            top-full
            mt-4
            w-[90vw]
            max-w-md
            -translate-x-1/2
            rounded-2xl
            border
            border-(--color-white-transparent)
            bg-black/85
            backdrop-blur-xl
            shadow-xl
            transition-all
            duration-300
            origin-top
            ${
            open
                ? "scale-100 opacity-100 translate-y-0"
                : "pointer-events-none scale-95 opacity-0 -translate-y-2"
            }
        `}
        >
        {/* GOLD GLOW */}
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl">
            <div className="absolute inset-0 rounded-2xl blur-2xl bg-[radial-gradient(ellipse_at_top,rgba(185,138,37,0.25),transparent_70%)]" />
        </div>

        <nav className="flex flex-col py-2">
            {links.map((l) => (
            <a
                key={l.href}
                href={l.href}
                onClick={onClose}
                className="
                px-6
                py-4
                text-base
                text-(--color-grey-light)
                transition
                duration-200
                hover:text-white
                hover:brightness-110
                "
            >
                {l.label}
            </a>
            ))}
        </nav>
        </div>
</div>
  );
}
