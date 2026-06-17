import { motion } from "motion/react";
import { MoveRight } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import farmImage from "../assets/images/modern_farm_1781689145319.jpg";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-[30px] translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
            <div className="relative rounded-[30px] overflow-hidden shadow-2xl">
              <img 
                src={farmImage} 
                alt="Modern Farming" 
                className="w-full h-auto aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </motion.div>

          {/* Right: Text & Stats */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
             >
                <h2 className="text-4xl lg:text-5xl font-extrabold text-text-dark tracking-tight mb-6">
                  Who We Are
                </h2>
                <p className="text-lg text-text-muted leading-relaxed mb-10">
                  DeVid Agro Fresh is a Muzaffarpur-based fresh produce sourcing and distribution company specializing in procurement, grading, sorting, packaging and bulk supply. We bridge the gap between local farmers and large-scale buyers, ensuring quality and transparency at every step.
                </p>
             </motion.div>

             {/* Stats Grid */}
             <div className="grid grid-cols-2 gap-8 mb-10">
                {[
                  { value: 500, suffix: "+", label: "Farmers Network" },
                  { value: 50, suffix: "+", label: "Institutional Clients" },
                  { value: 100, suffix: "%", label: "Quality Checked" },
                  { value: 24, suffix: "/7", label: "Supply Support" },
                ].map((stat, i) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="border-l-2 border-primary-light pl-4"
                  >
                    <p className="text-4xl font-extrabold text-primary mb-1">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-sm font-semibold text-text-muted">{stat.label}</p>
                  </motion.div>
                ))}
             </div>

             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
             >
               <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300">
                 Learn More About Us <MoveRight className="w-5 h-5" />
               </a>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
