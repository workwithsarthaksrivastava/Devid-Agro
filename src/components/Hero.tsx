import { motion } from "motion/react";
import { MoveRight } from "lucide-react";
import heroFruitsImage from '../assets/images/hero_fruits_1781689123894.jpg';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white/50 px-6 lg:px-20 overflow-x-hidden">
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

      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8 h-full pt-20 pb-10">
        
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
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              Explore Products
              <MoveRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-md border border-gray-100"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="w-full lg:w-[55%] h-[40vh] lg:h-full relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="w-full h-full max-h-[600px] relative z-20 flex items-center justify-center"
          >
             <motion.img 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src={heroFruitsImage}
                alt="Premium fresh fruits composition" 
                className="w-full h-full object-contain mix-blend-multiply drop-shadow-2xl opacity-90"
                style={{ filter: 'contrast(1.1) brightness(1.05)' }}
                referrerPolicy="no-referrer"
             />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
