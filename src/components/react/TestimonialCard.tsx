import { forwardRef } from "react";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  message: string;
};

const TestimonialCard = forwardRef<
  HTMLDivElement,
  { testimonial: Testimonial; active: boolean }
>(({ testimonial, active }, ref) => {
  return (
    <div
      ref={ref}
      className={`
        relative min-w-[300px] max-w-[320px]
        rounded-xl border p-6
        flex flex-col justify-between
        overflow-hidden
        transition-all duration-300
        ${
          active
            ? "border-white/25 bg-white/[0.06]"
            : "border-white/10 bg-white/[0.03] opacity-70"
        }
      `}
    >
      {/* INNER GLOW */}
      {active && (
        <div
          className="
            absolute inset-x-0 -bottom-15 h-24
            bg-[radial-gradient(ellipse_at_center,rgba(255,215,120,0.35),transparent_70%)]
            blur-[18px]
          "
        />
      )}

      <p className="relative z-10 text-sm leading-relaxed text-white/85 mb-6">
        “{testimonial.message}”
      </p>

      <div className="relative z-10 flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-9 h-9 rounded-full object-cover opacity-90"
        />
        <div className="leading-tight">
          <p className="text-sm font-semibold">{testimonial.name}</p>
          <p className="text-xs text-white/40">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
});

export default TestimonialCard;
