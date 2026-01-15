import React, { useState } from 'react';

interface PhoneMockupProps {
  videoUrl?: string;
}

export default function PhoneMockup({ videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ' }: PhoneMockupProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotX = ((y - centerY) / centerY) * 8;
    const rotY = ((centerX - x) / centerX) * 8;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <div
      className="flex items-center justify-center perspective w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-64 h-[520px] transition-transform duration-300"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        {/* Phone Frame */}
        <div className="absolute inset-0 rounded-[40px] border-8 border-gray-800 bg-black shadow-2xl overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20"></div>

          {/* Screen Content */}
          <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-gradient-to-b from-gray-900 to-black">
            {/* Video or Content */}
            <div className="w-full h-full flex items-center justify-center bg-black">
              <iframe
                width="100%"
                height="100%"
                src={videoUrl}
                title="ElDoradoFx Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="pointer-events-none"
              />
            </div>
          </div>

          {/* Shine Effect */}
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Shadow under phone */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full h-8 bg-gradient-to-t from-black/20 to-transparent blur-lg rounded-full"></div>

        {/* Subtle glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/10 via-transparent to-white/10 rounded-[48px] blur-2xl pointer-events-none opacity-0 group-hover/phone:opacity-100 transition-opacity"></div>
      </div>
    </div>
  );
}
