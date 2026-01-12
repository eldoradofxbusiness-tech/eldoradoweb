import { useState } from "react";
import GlowVisual from "./GlowVisual";
import { LineChart, UserRound, Bot, Coins, Bitcoin } from "lucide-react";


const services = [
  {
    id: "signals",
    tab: "Signals",
    title: "Free & Premium Trading Signals",
    description:
      "Structured trading signals built around risk management, clarity, and disciplined execution. Free insights for learning, premium access for consistency.",
    icon: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg",
    tabIcon: LineChart,
  },
  {
    id: "coaching",
    tab: "1:1 Coaching",
    title: "One-to-One Trading Coaching",
    description:
      "Personal guidance focused on mindset, capital protection, and process refinement — adapted to your trading level and objectives.",
    icon: "https://images.pexels.com/photos/4100653/pexels-photo-4100653.jpeg",
    tabIcon: UserRound,
  },
  {
    id: "bot",
    tab: "Trading Bot",
    title: "Premium Automated Trading",
    description:
      "Rule-based automated strategies designed to remove emotional bias while respecting strict risk and capital preservation rules.",
    icon: "https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg",
    tabIcon: Bot,
  },
];

export default function ServicesTabs() {
  const [active, setActive] = useState(services[0]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-16 relative z-10">

      {/* LEFT — TABS + TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-start gap-4">

       <p
        className="
            max-w-xl font-bold
            bg-[linear-gradient(90deg,var(--color-gold),#ffffff)]
            bg-clip-text text-transparent"
            >
                Forex like never before
        </p>
        <div className="flex items-center gap-4 text-xs tracking-widest text-white/40 uppercase animate-drift">
            <span className="flex items-center gap-1">
                <Coins className="w-3.5 h-3.5 text-(--color-gold)" />
                XAUUSD
            </span>

            <span className="opacity-30">·</span>

            <span className="flex items-center gap-1">
                <Bitcoin className="w-3.5 h-3.5" />
                BTC/USD
            </span>
        </div>

       <div
            key={active.id}
            className="animate-text-enter"
            >
            <h2 className="text-5xl mb-4 font-semibold">
                {active.title}
            </h2>

            <p className="text-(--color-grey-light) max-w-xl">
                {active.description}
            </p>
        </div>


        {/* Tabs */}
        <div className="flex flex-col gap-3 mb-8 w-3/4">
          {services.map((s) => {
            const Icon = s.tabIcon;

            return (
                <button
                key={s.id}
                onClick={() => setActive(s)}
                className={`
                    px-4 py-2 border rounded-sm border-white/60 text-sm transition font-bold
                    text-left w-full flex items-center gap-3
                    ${
                    active.id === s.id
                        ? "border border-gold text-white shadow-amber-400/30 shadow-md"
                        : "text-white/60 hover:text-white hover:border-white/95"
                    }
                `}
                >
                <Icon className="w-4 h-4" />
                <span>{s.tab}</span>
                </button>
            );
            })}
        </div>
      </div>

      {/* RIGHT — VISUAL */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <GlowVisual icon={active.icon} />
      </div>

    </div>
  );
}
