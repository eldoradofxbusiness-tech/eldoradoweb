import React, { useState, useEffect } from 'react';

interface Props {
  targetDate: string;
  title?: string;
}

const CountdownTimer: React.FC<Props> = ({ targetDate, title = "OFFER EXPIRES IN" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center px-4">
      <div className="relative group">
        <div className="absolute -inset-2 bg-yellow-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <span className="relative text-4xl md:text-6xl font-black italic tracking-tighter text-white font-heading">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] uppercase tracking-[0.3em] text-yellow-500/60 font-bold mt-2">
        {label}
      </span>
    </div>
  );

  return (
    <div className="w-full max-w-2xl mx-auto p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
      <div className="text-center mb-8">
        <span className="text-[10px] tracking-[0.5em] text-white/40 font-bold uppercase">
          {title}
        </span>
      </div>
      <div className="flex justify-center items-center divide-x divide-white/10">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
};

export default CountdownTimer;