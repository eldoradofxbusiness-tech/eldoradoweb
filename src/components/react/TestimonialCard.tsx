import { forwardRef } from "react";

export type Testimonial = {
  id: number;
  label?: string;     
  subLabel?: string;  
  image?: string;
};

type Props = {
  testimonial: Testimonial;
  active: boolean;
  onClick?: () => void;
};

const TestimonialCard = forwardRef<HTMLDivElement, Props>(({ testimonial, active, onClick }, ref) => {
  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`
        snap-center shrink-0 
        w-[320px] h-[520px] 
        relative 
        rounded-3xl 
        border p-4
        flex flex-col
        transition-all duration-500 ease-out
        cursor-default
        overflow-hidden
        
        /* ESTILOS GLASS (Intactos) */
        backdrop-blur-2xl
        ${
          active
            ? "bg-white/[0.08] border-[#B98A25]/60 shadow-[0_0_50px_-10px_rgba(185,138,37,0.35)] scale-100 opacity-100 z-10"
            : "bg-white/[0.02] border-white/[0.08] scale-95 opacity-50 hover:opacity-80 hover:border-white/20"
        }
      `}
    >

      <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#B98A25] to-transparent transition-opacity duration-500 z-20 ${active ? 'opacity-100' : 'opacity-0'}`} />


      <div className="relative flex-grow w-full rounded-xl overflow-hidden border border-white/10 bg-[#0b0f1a] shadow-inner z-10 group">
        

        <div className="absolute inset-0 z-0">
           <img
             src={testimonial.image}
             alt=""
             className="w-full h-full object-cover opacity-60 blur-xl scale-125"
           />
        </div>


        <img
          src={testimonial.image}
          alt="Trading Result"
          className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
        />
        
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0b0f1a]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>

      
      <div className="absolute -bottom-6 -right-6 text-[#2AABEE] opacity-[0.15] pointer-events-none rotate-[-15deg] z-0 mix-blend-plus-lighter">
        <svg viewBox="0 0 24 24" width="180" height="180" className="fill-current">
          <path d="M9.036 15.864l-.378 5.318c.54 0 .774-.234 1.056-.516l2.538-2.424 5.262 3.858c.966.534 1.656.252 1.896-.888l3.438-16.104.001-.001c.282-1.32-.474-1.836-1.404-1.488L1.44 9.492c-1.296.504-1.278 1.224-.234 1.548l5.1 1.59L18.9 6.78c.594-.396 1.134-.18.69.216z" />
        </svg>
      </div>


      <div className="relative z-10 mt-4 px-1 pb-1">
        <div className="flex items-center justify-between">
            

            <div className="flex flex-col">
                <span className={`text-xs font-bold tracking-widest uppercase mb-0.5 ${active ? 'text-[#B98A25]' : 'text-white/40'}`}>
                    {testimonial.subLabel || "SIGNAL VIP"}
                </span>
                <span className={`text-lg font-bold font-heading leading-none ${active ? 'text-white' : 'text-white/60'}`}>
                    {testimonial.label || "TRADE RESULT"}
                </span>
            </div>

            <div className={`
                flex items-center gap-2 px-3 py-1.5 rounded-lg border backdrop-blur-md transition-all
                ${active 
                    ? 'bg-[#B98A25]/10 border-[#B98A25]/30 text-[#B98A25]' 
                    : 'bg-white/5 border-white/10 text-white/40'}
            `}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-bold tracking-wide">VERIFIED</span>
            </div>
        </div>
      </div>

    </div>
  );
});

TestimonialCard.displayName = "TestimonialCard";
export default TestimonialCard;