import { useRef } from "react";

interface PhoneMockupProps {
  videoUrl?: string;
}

export default function PhoneMockup({
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ",
}: PhoneMockupProps) {
  const phoneRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (!phoneRef.current) return;
    phoneRef.current.style.transform =
      "rotateX(20deg) rotateY(-30deg) rotateZ(15deg)";
  };

  const handleLeave = () => {
    if (!phoneRef.current) return;
    phoneRef.current.style.transform =
      "rotateX(0deg) rotateY(-10deg) rotateZ(0deg)";
  };

  return (
    <div
      className="
        relative perspective-[1600px] animate-[floatPro_8s_ease-in-out_infinite]"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* PHONE */}
      <div
        ref={phoneRef}
        className="
          relative
          w-64 h-[520px]
          will-change-transform
          transition-transform
          duration-500
          ease-out
        "
        style={{
          transform: "rotateX(0deg) rotateY(-10deg) rotateZ(0deg) ",
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRAME */}
        <div className="absolute inset-0 rounded-[42px] border-8 border-neutral-800 bg-black shadow-[0_50px_120px_rgba(0,0,0,.65)] overflow-hidden">
          {/* NOTCH */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20" />

          {/* SCREEN */}
          <iframe
            src={videoUrl}
            className="w-full h-full"
            title="ElDoradoFx demo"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>

        
      </div>

      {/* FLOOR SHADOW */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[90%] h-14 bg-black/10 blur-3xl rounded-full" />
    </div>
  );
}
