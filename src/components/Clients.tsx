import { motion } from "motion/react";

const CLIENTS = [
  "Blinkit", "Instamart", "BigBasket", "Taj Hotels", 
  "Hyatt", "Reliance Fresh", "More Retail", "Zepto"
];

export function Clients() {
  return (
    <section id="clients" className="py-20 bg-background-soft border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-10 text-center">
        <h3 className="text-xl font-bold tracking-tight text-text-muted">Trusted by leading enterprises</h3>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="py-8 animate-marquee whitespace-nowrap flex items-center gap-16 lg:gap-32 pl-16 lg:pl-32 group-hover:[animation-play-state:paused]">
          {/* Double the list for seamless looping */}
          {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, idx) => (
             <span 
              key={`${client}-${idx}`} 
              className="text-3xl lg:text-5xl font-heading font-extrabold text-gray-200/80 hover:text-primary transition-colors cursor-default"
             >
               {client}
             </span>
          ))}
        </div>
      </div>
    </section>
  );
}
