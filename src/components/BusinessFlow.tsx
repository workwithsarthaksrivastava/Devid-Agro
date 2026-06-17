import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";

const FLOW_STEPS = [
  "Farmers & Mandis",
  "Procurement",
  "Sorting & Grading",
  "Packaging",
  "Distribution",
  "Retail Chains & B2B"
];

export function BusinessFlow() {
  return (
    <section id="business-flow" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl lg:text-5xl font-extrabold text-text-dark tracking-tight mb-6"
          >
            Supply Chain Operations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted"
          >
            A transparent and efficient farm-to-market journey.
          </motion.p>
        </div>

        {/* Desktop Pipeline view */}
        <div className="hidden lg:flex items-center justify-between relative group">
          {FLOW_STEPS.map((step, idx) => (
            <div key={step} className="flex-1 flex flex-col items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="w-20 h-20 bg-primary/5 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary font-bold text-xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-500 hover:scale-110 shadow-lg cursor-default"
              >
                0{idx + 1}
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 + 0.2 }}
                className="font-bold text-center text-text-dark max-w-[120px]"
              >
                {step}
              </motion.p>

              {/* Connecting Line Desktop */}
              {idx < FLOW_STEPS.length - 1 && (
                <div className="absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-gray-100 -z-10">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: idx * 0.15 + 0.3 }}
                    className="h-full bg-primary"
                  />
                  <ArrowRight className="absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Vertical Pipeline */}
        <div className="lg:hidden flex flex-col items-center gap-10">
           {FLOW_STEPS.map((step, idx) => (
            <div key={step} className="flex flex-col items-center relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-primary/10 rounded-full border-2 border-primary flex items-center justify-center text-primary font-bold text-xl mb-3 shadow-lg"
              >
                0{idx + 1}
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-bold text-center text-text-dark text-lg"
              >
                {step}
              </motion.p>
              
              {/* Connecting Line Mobile */}
              {idx < FLOW_STEPS.length - 1 && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: 40, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-[2px] bg-primary mt-4 flex items-end justify-center relative"
                >
                  <ArrowDown className="absolute -bottom-4 text-primary w-4 h-4" />
                </motion.div>
              )}
            </div>
           ))}
        </div>

      </div>
    </section>
  );
}
