import { useRef } from "react";

interface PhoneMockupProps {
  src?: string; 
  poster?: string;
  drift?: "left" | "right";
}

export default function PhoneMockup({
  src = "/hero-phone-video.mp4", 
  poster = "/hero-phone-cover.webp",
  drift = "left"
}: PhoneMockupProps) {
  const phoneRef = useRef<HTMLDivElement>(null);


  let initialRotation = "";

  drift === 'left' ? initialRotation = "rotateX(5deg) rotateY(20deg) rotateZ(2deg)" : initialRotation = "rotateX(5deg) rotateY(-20deg) rotateZ(-2deg)";


  const hoverRotation = "rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1.05)";

  return (
    <div
      className="relative perspective-[2000px] py-20 group"
      onMouseEnter={() => phoneRef.current && (phoneRef.current.style.transform = hoverRotation)}
      onMouseLeave={() => phoneRef.current && (phoneRef.current.style.transform = initialRotation)}
    >
      <div
        ref={phoneRef}
        className="relative w-72 h-[580px] mx-auto will-change-transform transition-all duration-1000 cubic-bezier(.16,1,.3,1)"
        style={{
          transform: initialRotation,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Cuerpo del Teléfono */}
        <div className="absolute inset-0 rounded-[3rem] border-[12px] border-neutral-900 bg-black 
                        shadow-[0_50px_100px_rgba(0,0,0,0.8),inset_0_0_2px_1px_rgba(255,255,255,0.1)] 
                        overflow-hidden ring-1 ring-white/10 z-10">
          
          {/* Notch / Dynamic Island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 flex items-center justify-end px-4">
             <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40 blur-[1px]" />
          </div>

          <video
            src={src}
            poster={poster}
            className="w-full h-full object-cover relative z-10"
            autoPlay muted loop playsInline
          />
          
          {/* Brillo de cristal sobre la pantalla */}
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-50" />
        </div>

        {/* Efecto de grosor lateral (Deepness) */}
        <div className={`absolute inset-y-4 rounded-[3rem] border border-white/5 -z-10 bg-neutral-800 w-full transition-transform duration-700
                        ${drift === 'left' ? '-translate-x-4' : 'translate-x-4'}`} />
      </div>

      {/* Sombra de contacto en el suelo */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-black/60 blur-[40px] rounded-full" />
    </div>
  );
}