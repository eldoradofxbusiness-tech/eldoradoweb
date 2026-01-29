import { Menu, X } from "lucide-react";

type Props = {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  links: { label: string; href: string }[];
};

export default function MobileMenu({ open, onToggle, onClose, links }: Props) {
  return (
    <div className="relative">
     
     <div className="relative flex items-center justify-center rounded-full  p-2 backdrop-blur">
        <button
            onClick={onToggle}
            className="relative h-6 w-6 cursor-pointer"
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
            z-50
            absolute
            -right-1
            mt-4
            w-[90vw]
            max-w-xl
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
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-1xl">
            <div className="absolute inset-0 rounded-1xl blur-2xl bg-[radial-gradient(ellipse_at_top,rgba(185,138,37,0.25),transparent_70%)]" />
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
