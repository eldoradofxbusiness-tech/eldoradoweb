import { useEffect, useRef, ReactNode } from "react";

interface ParallaxElementProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxElement({
  children,
  speed = 0.3,
  className = "",
}: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrolled = windowHeight - rect.top;
        const rate = scrolled * speed;
        element.style.transform = `translateY(${-rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`parallax-element ${className}`}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}
