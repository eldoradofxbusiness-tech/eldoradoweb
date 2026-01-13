
import { useRef } from "react";

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
  }
];

  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const amount = direction === "left" ? -320 : 320;
    containerRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full no-scrollbar">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">
          What traders say
        </h3>

        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="px-3 py-1 text-sm border border-white/20 rounded-md hover:border-white/40 transition"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="px-3 py-1 text-sm border border-white/20 rounded-md hover:border-white/40 transition"
          >
            →
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="
          flex
          gap-6
          overflow-x-auto
          scroll-smooth
          no-scrollbar
          pb-2
        "
      >
        {testimonials.map(t => (
          <div
            key={t.id}
            className="
              min-w-[300px]
              max-w-[320px]
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
              flex
              flex-col
              gap-4
            "
          >
            <p className="text-sm leading-relaxed text-white/80">
              “{t.message}”
            </p>

            <div className="flex items-center gap-3 mt-2">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-9 h-9 rounded-full object-cover opacity-90"
              />
              <div>
                <p className="text-sm font-semibold leading-none">
                  {t.name}
                </p>
                <p className="text-xs text-white/40">
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
