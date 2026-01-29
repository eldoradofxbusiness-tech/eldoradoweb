import { useRef, useState, useEffect } from "react";
import TestimonialCard, { type Testimonial } from "./TestimonialCard";

const testimonials: Testimonial[] = [
  { 
    id: 1, 
    image: "/result_carousel/results_carousel_image_1.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 2, 
    image: "/result_carousel/results_carousel_image_2.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 3, 
    image: "/result_carousel/results_carousel_image_3.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 4, 
    image: "/result_carousel/results_carousel_image_4.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 5, 
    image: "/result_carousel/results_carousel_image_5.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 6, 
    image: "/result_carousel/results_carousel_image_6.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 7, 
    image: "/result_carousel/results_carousel_image_7.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 8, 
    image: "/result_carousel/results_carousel_image_8.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 9, 
    image: "/result_carousel/results_carousel_image_9.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 10, 
    image: "/result_carousel/results_carousel_image_10.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 11, 
    image: "/result_carousel/results_carousel_image_11.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 12, 
    image: "/result_carousel/results_carousel_image_12.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 13, 
    image: "/result_carousel/results_carousel_image_13.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 14, 
    image: "/result_carousel/results_carousel_image_14.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 15, 
    image: "/result_carousel/results_carousel_image_15.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 16, 
    image: "/result_carousel/results_carousel_image_16.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 17, 
    image: "/result_carousel/results_carousel_image_17.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 18, 
    image: "/result_carousel/results_carousel_image_18.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 19, 
    image: "/result_carousel/results_carousel_image_19.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 20, 
    image: "/result_carousel/results_carousel_image_20.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 21, 
    image: "/result_carousel/results_carousel_image_21.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 22, 
    image: "/result_carousel/results_carousel_image_22.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  },
  { 
    id: 23, 
    image: "/result_carousel/results_carousel_image_23.webp",
    label: "XAUUSD",
    subLabel: "VIP SIGNALS"
  }
];

export default function TestimonialsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      setActiveIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
    };

    container.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100); 

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    if (index < 0 || index >= testimonials.length) return;
    const container = containerRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;

    const containerWidth = container.offsetWidth;
    const cardLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;
    
    const newScrollPosition = cardLeft - (containerWidth / 2) + (cardWidth / 2);

    container.scrollTo({ left: newScrollPosition, behavior: "smooth" });
  };

  return (
    <div className="w-full py-16 relative">
      
      <div className="flex items-center justify-between mb-8 px-4 max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-white font-heading tracking-tight">
          Live <span className="text-[#B98A25]">Results</span>
        </h3>
        
        <div className="flex gap-3">
          <button 
            onClick={() => scrollToIndex(activeIndex - 1)} 
            disabled={activeIndex === 0} 
            className={`w-10 h-10 rounded-md flex items-center justify-center border transition-all ${activeIndex === 0 ? "border-white/5 text-white/20" : "border-white/20 text-white hover:border-[#B98A25] hover:text-[#B98A25]"}`}
          >
            ←
          </button>
          <button 
            onClick={() => scrollToIndex(activeIndex + 1)} 
            disabled={activeIndex === testimonials.length - 1} 
            className={`w-10 h-10 rounded-md flex items-center justify-center border transition-all ${activeIndex === testimonials.length - 1 ? "border-white/5 text-white/20" : "border-white/20 text-white hover:border-[#B98A25] hover:text-[#B98A25]"}`}
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="
          flex gap-6 overflow-x-auto 
          pb-12 pt-4 
          px-[calc(50%-160px)] 
          snap-x snap-mandatory 
          no-scrollbar
        "
      >
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={t.id}
            testimonial={t}
            active={i === activeIndex}
            ref={(el) => { cardRefs.current[i] = el; }}
          />
        ))}
      </div>
    </div>
  );
}