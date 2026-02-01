import { useState } from "react";
import GlowVisual from "./GlowVisual";
import { LineChart, UserRound, Bot, Coins, Bitcoin } from "lucide-react";

const services = [
  {
    id: "signals",
    tab: "Señales",
    title: "Señales de Trading Gratis y Premium",
    description: "Señales estructuradas basadas en la gestión de riesgo, claridad y ejecución disciplinada. Análisis gratuitos para aprender, acceso premium para la consistencia.",
    icon: "/service-icon1.webp",
    tabIcon: LineChart,
  },
  {
    id: "coaching",
    tab: "Coaching 1:1",
    title: "Mentoría Privada con Traders Reales",
    description: "Corrige tus errores, mejora tu enfoque y construye una estrategia rentable con acompañamiento directo. Personalizado según tu experiencia, tiempo y objetivos.",
    icon: "/service-icon2.webp",
    tabIcon: UserRound,
  },
  {
    id: "bot",
    tab: "Bot de Trading",
    title: "Delega el Trading. Mantén el Control.",
    description: "Conecta el bot a tu cuenta y deja que opere por ti con reglas claras, sin emociones y con protección de capital integrada. Operación 100% automática.",
    icon: "/service-icon3.webp",
    tabIcon: Bot,
  }

];

export default function ServicesTabsES() {
  const [active, setActive] = useState(services[0]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-32">
      <div className="flex flex-col flex-1 w-full gap-8">
        <div className="space-y-3">
          <p className="font-bold bg-[linear-gradient(90deg,var(--color-gold),#ffffff)] bg-clip-text text-transparent">
            Forex como nunca antes
          </p>
          <div className="flex items-center gap-4 text-xs tracking-widest text-white/40 uppercase">
            <span className="flex items-center gap-1"><Coins className="w-3.5 h-3.5 text-(--color-gold)" /> XAUUSD</span>
            <span className="opacity-30">·</span>
            <span className="flex items-center gap-1"><Bitcoin className="w-3.5 h-3.5" /> BTC/USD</span>
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-1">
          {services.map((s) => (
            <div key={s.id} className={`col-start-1 row-start-1 transition-all duration-700 ease-in-out ${active.id === s.id ? "opacity-100 blur-0 translate-x-0" : "opacity-0 blur-md -translate-x-4 pointer-events-none"}`}>
              <h2 className="text-4xl lg:text-6xl mb-6 font-semibold text-white leading-[1.1] tracking-tight text-balance">{s.title}</h2>
              <p className="text-(--color-grey-light) max-w-xl text-lg leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 w-full lg:max-w-md pt-4">
          {services.map((s) => {
            const Icon = s.tabIcon;
            const isActive = active.id === s.id;
            return (
              <button key={s.id} onClick={() => setActive(s)} className={`flex items-center gap-4 px-6 py-4 border rounded-xl font-bold transition-all duration-300 ${isActive ? "border-(--color-gold) text-white bg-white/5 shadow-[0_0_20px_rgba(212,175,55,0.15)] scale-[1.02]" : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"}`}>
                <Icon className={`w-5 h-5 transition-colors ${isActive ? "text-(--color-gold)" : ""}`} />
                <span className="text-base">{s.tab}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex-1 flex justify-center lg:justify-end w-full">
        <GlowVisual icon={active.icon} />
      </div>
    </div>
  );
}