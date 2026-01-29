import TestimonialCard, { type Testimonial } from "./TestimonialCard";

// Usamos la misma data
const testimonials: Testimonial[] = [
  { id: 1, image: "/result_carousel/results_carousel_image_1.webp", label: "XAUUSD", subLabel: "VIP SIGNALS" },
  { id: 2, image: "/result_carousel/results_carousel_image_2.webp", label: "XAUUSD", subLabel: "VIP SIGNALS" },
  { id: 3, image: "/result_carousel/results_carousel_image_3.webp", label: "XAUUSD", subLabel: "VIP SIGNALS" },
  { id: 4, image: "/result_carousel/results_carousel_image_4.webp", label: "XAUUSD", subLabel: "VIP SIGNALS" },
  { id: 5, image: "/result_carousel/results_carousel_image_5.webp", label: "XAUUSD", subLabel: "VIP SIGNALS" },
  { id: 6, image: "/result_carousel/results_carousel_image_6.webp", label: "XAUUSD", subLabel: "VIP SIGNALS" },
  { id: 7, image: "/result_carousel/results_carousel_image_7.webp", label: "XAUUSD", subLabel: "VIP SIGNALS" },
  { id: 8, image: "/result_carousel/results_carousel_image_8.webp", label: "XAUUSD", subLabel: "VIP SIGNALS" },
  { id: 9, image: "/result_carousel/results_carousel_image_9.webp", label: "XAUUSD", subLabel: "VIP SIGNALS" },
  { id: 10, image: "/result_carousel/results_carousel_image_10.webp", label: "XAUUSD", subLabel: "VIP SIGNALS" },
  { id: 11, image: "/result_carousel/results_carousel_image_11.webp", label: "XAUUSD", subLabel: "VIP SIGNALS" },
  { id: 12, image: "/result_carousel/results_carousel_image_12.webp", label: "XAUUSD", subLabel: "VIP SIGNALS" },
  { id: 13, image: "/result_carousel/results_carousel_image_13.webp", label: "XAUUSD", subLabel: "VIP SIGNALS" },
  { id: 14, image: "/result_carousel/results_carousel_image_14.webp", label: "XAUUSD", subLabel: "VIP SIGNALS" },
  { id: 15, image: "/result_carousel/results_carousel_image_15.webp", label: "XAUUSD", subLabel: "VIP SIGNALS" },
];

export default function TestimonialsCarouselAuto() {
  return (
    <div className="w-full py-16 overflow-hidden relative group bg-black/20">
      
      {/* TÍTULO (Opcional, bórralo si quieres solo las cartas) */}
      <div className="mb-10 text-center px-4">
        <h3 className="text-2xl md:text-4xl font-black text-white font-heading italic uppercase tracking-tighter">
          Live Market <span className="text-[#B98A25]">Execution</span>
        </h3>
      </div>

      {/* GRADIENT MASKS (Para desvanecer los bordes) */}
      <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

      {/* TRACK (Contenedor que se mueve) */}
      {/* Usamos w-max para que el div sea tan ancho como su contenido */}
      <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
        
        {/* BLOQUE 1 DE IMÁGENES */}
        <div className="flex gap-6 px-3">
          {testimonials.map((t) => (
            // Forzamos un ancho fijo para que se vea uniforme en el carrusel
            <div key={`original-${t.id}`} className="w-[280px] md:w-[320px] flex-shrink-0 transform transition-transform duration-300 hover:scale-[1.02]">
              <TestimonialCard 
                testimonial={t} 
                // Pasamos active={true} o false según como quieras que se vean por defecto. 
                // Normalmente en auto-scroll se ven todas iguales.
                active={false} 
              />
            </div>
          ))}
        </div>

        {/* BLOQUE 2 DE IMÁGENES (DUPLICADO PARA EL LOOP INFINITO) */}
        <div className="flex gap-6 px-3">
          {testimonials.map((t) => (
            <div key={`dupe-${t.id}`} className="w-[280px] md:w-[320px] flex-shrink-0 transform transition-transform duration-300 hover:scale-[1.02]">
              <TestimonialCard 
                testimonial={t} 
                active={false} 
              />
            </div>
          ))}
        </div>

      </div>

      {/* DEFINICIÓN DE ANIMACIÓN EN LÍNEA PARA EVITAR CONFIGURAR TAILWIND */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%); /* Se mueve la mitad (un bloque entero) */
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite; /* Ajusta '60s' para cambiar la velocidad */
        }
      `}</style>
    </div>
  );
}