import { motion } from "motion/react";
import { MoveRight } from "lucide-react";
import warehouseImage from "../assets/images/warehouse_produce_1781689188026.jpg";

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-text-dark/80 z-10" />
        <img 
          src={warehouseImage} 
          alt="Premium Warehouse" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight mb-10 leading-tight"
        >
          Ready to Partner With Bihar's Trusted Fresh Produce Supplier?
        </motion.h2>
        
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary hover:bg-primary-light text-white px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 transition-colors shadow-[0_0_40px_rgba(46,125,50,0.4)]"
        >
          Request Partnership <MoveRight className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
}
