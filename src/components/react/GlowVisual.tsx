export default function GlowVisual({ icon }: { icon: string }) {
  return (
    <div className="relative w-85 h-85 flex items-center justify-center overflow-visible">

      {/* GRID */}
      <div className="absolute inset-0 rounded-full grid-bg opacity-35 mask-circle" />

      {/* Ondas */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="ring" />
        <div className="ring delay-1" />
        <div className="ring delay-2" />
      </div>

      {/* Rotating halo */}
      <div className="rotating-halo pointer-events-none opacity-70" />

      {/* Ambient glow */}
      <div
        className="
          absolute inset-0 rounded-full
          bg-[radial-gradient(circle,rgba(185,138,37,0.12),transparent_65%)]
          blur-[80px]
        "
      />

      {/* Central glass */}
      <div
        className="
          relative z-10
          w-28 h-28
          rounded-xl
          card-glass
          flex items-center justify-center
        "
      >
      <img
        key={icon}
        src={icon}
        alt=""
        className="w-24 h-24 opacity-95 rounded-xl animate-text-enter"
        />
      </div>

    </div>
  );
}
