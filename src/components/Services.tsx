import { motion } from "motion/react";
import { Leaf, PackageSearch, Truck, Box, Store, Hotel } from "lucide-react";

const SERVICES = [
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Fresh Produce Procurement",
    description: "Direct sourcing from our extensive network of local farmers and mandis."
  },
  {
    icon: <PackageSearch className="w-8 h-8" />,
    title: "Sorting & Grading",
    description: "Meticulous quality control to ensure only the best produce makes the cut."
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Bulk Supply",
    description: "Reliable large-scale fulfillment for enterprise and institutional buyers."
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: "Customized Packaging",
    description: "Tailored packaging solutions to maintain freshness during transit."
  },
  {
    icon: <Store className="w-8 h-8" />,
    title: "B2B Distribution",
    description: "End-to-end logistics for retail chains and quick commerce platforms."
  },
  {
    icon: <Hotel className="w-8 h-8" />,
    title: "Hotel & Restaurant Supply",
    description: "Daily fresh deliveries customized for the hospitality sector."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#1B4B22] text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-white">
          <path d="M44,-76.3C56.6,-69.1,66.2,-55.8,74.9,-42.2C83.7,-28.6,91.6,-14.3,89.8,-1C88,12.3,76.5,24.6,67.1,36.5C57.7,48.4,50.4,59.9,40,67.6C29.6,75.3,16.1,79.2,2.2,75.3C-11.7,71.4,-25.2,59.7,-38.2,51.1C-51.2,42.5,-63.7,37,-72.1,27.4C-80.5,17.8,-84.8,4.1,-82.1,-8.5C-79.4,-21.1,-69.7,-32.6,-59.1,-41.8C-48.5,-51,-37,-57.9,-25.3,-65.7C-13.6,-73.5,-1.7,-82.2,11.2,-80.6C24.1,-79,31.4,-83.5,44,-76.3Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6"
          >
            Services We Offer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70"
          >
            Comprehensive farm-to-market solutions designed for modern agricultural commerce.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group border border-white/10 bg-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
