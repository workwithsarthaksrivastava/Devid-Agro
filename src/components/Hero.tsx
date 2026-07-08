import { motion, AnimatePresence } from "motion/react";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1557844352-761f2565b576?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?q=80&w=1600&auto=format&fit=crop"
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center bg-white/50 px-6 lg:px-20 overflow-x-hidden pt-28 lg:pt-0">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1.1, 1], rotate: [0, 5, -5, 0] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-primary-accent/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1.2, 1], rotate: [0, -5, 5, 0] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary-light/10 rounded-full blur-3xl"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background-soft to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 h-full pt-10 pb-16 lg:py-0">
        
        {/* Left Content */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-primary block" />
            <span className="text-xs font-bold tracking-[0.15em] text-primary uppercase">
              Fresh Produce Supply Partner
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-text-dark"
          >
            DEVID <br className="hidden lg:block"/>AGRO FRESH
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-xl lg:text-3xl font-medium text-text-dark/80"
          >
            From Farm to Market,<br/>Freshness You Can Trust
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-base lg:text-lg text-text-muted leading-relaxed max-w-lg"
          >
            Muzaffarpur based sourcing and distribution company specializing in fruits and vegetables for retail chains, quick commerce, hotels and institutional buyers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <a href="#products">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
              >
                Explore Products
                <MoveRight className="w-5 h-5" />
              </motion.button>
            </a>
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-md border border-gray-100"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Right Content - Hero Slideshow */}
        <div className="w-full lg:w-[55%] h-[50vh] min-h-[400px] lg:h-full lg:min-h-[600px] relative flex items-center justify-center p-4 lg:p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="w-full h-full max-h-[600px] relative z-20 flex items-center justify-center rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <AnimatePresence>
              <motion.img 
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                src={HERO_IMAGES[currentImageIndex]}
                alt="Devid Agro Fresh Produce" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            <div className="absolute inset-0 border-2 border-white/10 rounded-[2rem] pointer-events-none z-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
