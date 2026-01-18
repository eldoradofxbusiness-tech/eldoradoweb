import { useEffect, useRef } from "react";

interface ScrollImageProps {
  src: string;
  alt?: string;
}

export default function ScrollImage({ src, alt }: ScrollImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // progreso dentro de la viewport
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
        1
      );

      const translate = progress * 60 - 30; // rango suave
      el.style.transform = `translateY(${translate}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="
        relative
        transition-transform
        duration-200
        will-change-transform
      "
    >
      <img
        src={src}
        alt={alt}
        className="
          w-full
          rounded-2xl
          shadow-[0_40px_120px_rgba(0,0,0,0.6)]
        "
      />

      {/* glow sutil */}
      <div
        className="
          pointer-events-none
          absolute -inset-6
          bg-[radial-gradient(circle_at_center,rgba(255,215,120,0.25),transparent_70%)]
          blur-3xl
        "
      />
    </div>
  );
}
