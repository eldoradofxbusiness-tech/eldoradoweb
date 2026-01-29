import React, { useState, useEffect } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const EvergreenTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const difference = endOfDay.getTime() - now.getTime();

    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { hours: 23, minutes: 59, seconds: 59 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return null;

  const timeUnits = [
    { label: "HRS", value: timeLeft.hours },
    { label: "MIN", value: timeLeft.minutes },
    { label: "SEG", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 md:gap-4 justify-center my-6">
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center bg-white/5 border border-yellow-500/30 backdrop-blur-md rounded-xl shadow-[0_0_15px_rgba(185,138,37,0.2)]">
            <span className="text-xl md:text-3xl font-black text-white font-mono tabular-nums">
              {String(unit.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] text-yellow-500 font-bold tracking-widest mt-2">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default EvergreenTimer;