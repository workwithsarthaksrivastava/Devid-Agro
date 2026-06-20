import { motion } from "motion/react";
import { User } from "lucide-react";

const FOUNDERS = [
  {
    name: "Devansh Kumar",
    role: "Procurement & Supply Chain",
    responsibilities: [
      "Farmer Network Development",
      "Procurement Operations",
      "Quality Control",
      "Distribution"
    ]
  },
  {
    name: "Vidhan Raj",
    role: "Food Technologist",
    responsibilities: [
      "Operations",
      "Business Development",
      "Client Management"
    ]
  }
];

export function Founders() {
  return (
    <section className="py-24 lg:py-32 bg-primary/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl lg:text-5xl font-extrabold text-text-dark tracking-tight mb-6"
          >
            Meet the Founders
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted"
          >
            Led by experts in food technology and supply chain operations, ensuring the highest standards of quality from farm to market.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
          {FOUNDERS.map((founder, idx) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/60 backdrop-blur-xl border border-white/40 p-8 lg:p-12 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(46,125,50,0.1)] transition-all duration-500 overflow-hidden"
            >
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/0 to-primary-accent/0 group-hover:from-primary-light/10 group-hover:to-primary-accent/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <User className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-text-dark mb-2">{founder.name}</h3>
                <p className="text-primary font-semibold mb-8 tracking-wide">{founder.role}</p>
                
                <ul className="space-y-4">
                  {founder.responsibilities.map((task) => (
                    <li key={task} className="flex items-center gap-3 text-text-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                      <span className="font-medium">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
