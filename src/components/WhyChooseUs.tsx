import { motion } from "motion/react";
import truckImage from "../assets/images/logistics_truck_1781689170522.jpg";
import { CheckCircle2 } from "lucide-react";

const FEATURES = [
  "Food Technology Expertise",
  "Direct Farmer & Mandi Sourcing",
  "Quality Assured Produce",
  "Competitive Pricing",
  "Reliable Supply Chain",
  "Daily Fresh Deliveries",
  "Professional Handling",
  "Farm-to-Market Approach"
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-background-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Text & Features */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
             >
                <h2 className="text-4xl lg:text-5xl font-extrabold text-text-dark tracking-tight mb-6">
                  Why Choose Us
                </h2>
                <p className="text-lg text-text-muted leading-relaxed mb-10">
                  We don't just supply produce; we deliver trust, consistency, and volume. Our technology-backed operations ensure zero compromise on quality.
                </p>
             </motion.div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
               {FEATURES.map((feature, idx) => (
                 <motion.div
                   key={feature}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ duration: 0.4, delay: idx * 0.05 }}
                   className="flex items-center gap-3"
                 >
                   <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                   <span className="font-semibold text-text-dark">{feature}</span>
                 </motion.div>
               ))}
             </div>
          </div>

          {/* Right: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 order-1 lg:order-2 relative"
          >
            <div className="relative rounded-[30px] overflow-hidden shadow-2xl">
              <img 
                src={truckImage} 
                alt="Logistics Truck delivering fresh produce" 
                className="w-full h-auto aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
