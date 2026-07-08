import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import logo from "../assets/images/logo.png";

const NAV_LINKS = [
  "Home", "About", "Products", "Services", "Why Us", "Business Flow", "Clients"
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[90px] flex items-center transition-colors duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer relative group z-[60]">
          <img src={logo} alt="DeVid Agro Fresh Logo" className="h-14 lg:h-16 w-auto object-contain mix-blend-multiply" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const anchor = link.toLowerCase().replace(' ', '-');
            const href = isHomePage ? `#${anchor}` : `/#${anchor}`;
            return (
              <a 
                key={link} 
                href={href}
                className="text-sm font-medium text-text-dark/80 hover:text-primary transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            );
          })}
          <Link
            to="/contact"
            className="text-sm font-medium text-text-dark/80 hover:text-primary transition-colors relative group"
          >
            Queries
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        {/* Action Button */}
        <div className="hidden lg:block">
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-text-dark text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary transition-colors duration-300 shadow-md"
            >
              Contact
            </motion.button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-text-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="absolute top-[90px] left-0 w-full bg-white shadow-xl lg:hidden flex flex-col px-6 py-4"
        >
          {NAV_LINKS.map((link) => {
            const anchor = link.toLowerCase().replace(' ', '-');
            const href = isHomePage ? `#${anchor}` : `/#${anchor}`;
            return (
              <a 
                key={link} 
                href={href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-lg font-medium border-b border-gray-100 text-text-dark"
              >
                {link}
              </a>
            );
          })}
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="mt-6 bg-primary text-white w-full py-4 rounded-xl font-semibold">
              Contact / Queries
            </button>
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
