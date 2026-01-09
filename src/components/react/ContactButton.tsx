import { Send } from "lucide-react";

type Props = {
  label?: string;
  size?: "sm" | "md";
  href?: string;
};

export default function ContactButton({
  label = "Contact",
  size = "md",
  href = "/contact",
}: Props) {
  const sizes = {
    sm: "px-4 py-1 text-sm",
    md: "px-4 py-2 text-sm",
  };

  return (
    <a
      href={href}
      className={`
        group
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-(--color-white-transparent)
        bg-(--color-white-transparent)
        ${sizes[size]}
        text-white
        backdrop-blur
        transition-all
        duration-300
        hover:border-(--color-gold)
        hover:px-4.5
      `}
    >
      {label}

      <Send
        size={14}
        className="
          text-(--color-gold)
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />
    </a>
  );
}
