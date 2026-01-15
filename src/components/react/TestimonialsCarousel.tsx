import { useRef, useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsCarousel() {
    const testimonials = [
  {
    id: 1,
    name: "Daniel R.",
    role: "Private trader",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Clear rules, no noise. I know exactly when a trade makes sense and when it doesn’t."
  },
  {
    id: 2,
    name: "Laura M.",
    role: "Swing trader",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "What I value most is the focus on risk. No pressure, no overtrading."
  },
  {
    id: 3,
    name: "Alex P.",
    role: "Forex trader",
    avatar: "https://randomuser.me/api/portraits/men/61.jpg",
    message:
      "The process is transparent. You can follow the logic behind every setup."
  },
    {
    id: 1,
    name: "Daniel R.",
    role: "Private trader",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Clear rules, no noise. I know exactly when a trade makes sense and when it doesn’t."
  },
  {
    id: 2,
    name: "Laura M.",
    role: "Swing trader",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "What I value most is the focus on risk. No pressure, no overtrading."
  },
  {
    id: 3,
    name: "Alex P.",
    role: "Forex trader",
    avatar: "https://randomuser.me/api/portraits/men/61.jpg",
    message:
      "The process is transparent. You can follow the logic behind every setup."
  },
    {
    id: 4,
    name: "Daniel R.",
    role: "Private trader",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Clear rules, no noise. I know exactly when a trade makes sense and when it doesn’t."
  },
  {
    id: 5,
    name: "Laura M.",
    role: "Swing trader",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "What I value most is the focus on risk. No pressure, no overtrading."
  },
  {
    id: 6,
    name: "Alex P.",
    role: "Forex trader",
    avatar: "https://randomuser.me/api/portraits/men/61.jpg",
    message:
      "The process is transparent. You can follow the logic behind every setup."
  }
];

 const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateActive = () => {
      const center = container.scrollLeft + container.offsetWidth / 2;

      let closest = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const cardCenter =
          card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(center - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closest = index;
        }
      });

      setActiveIndex(closest);
    };

    container.addEventListener("scroll", updateActive);
    updateActive(); // 🔑 MUY IMPORTANTE

    return () => container.removeEventListener("scroll", updateActive);
  }, []);

  const scroll = (dir: "left" | "right") => {
    containerRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">

      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">What traders say</h3>
        <div className="flex gap-2">
      <div className="flex gap-3">
      <button
        onClick={() => scroll("left")}
        className="
          h-9 w-9
          flex items-center justify-center
          rounded-md
          border border-white/20
          bg-white/[0.04]
          text-white/80
          hover:bg-white/[0.08]
          hover:border-white/40
          transition
        "
        aria-label="Scroll left"
      >
        ←
      </button>

      <button
        onClick={() => scroll("right")}
        className="
          h-9 w-9
          flex items-center justify-center
          rounded-md
          border border-white/20
          bg-white/[0.04]
          text-white/80
          hover:bg-white/[0.08]
          hover:border-white/40
          transition
        "
        aria-label="Scroll right"
      >
        →
      </button>
    </div>

        </div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto no-scrollbar pb-10"
      >
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={i}
            testimonial={t}
            active={i === activeIndex}
            ref={(el) => (cardRefs.current[i] = el!)}
          />
        ))}
      </div>
    </div>
  );
}