import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0A1A0C] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full translate-x-0.5 -translate-y-0.5" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight">
                DEVID AGRO
              </span>
            </div>
            <p className="text-white/60 leading-relaxed font-medium">
              From Farm to Market, Freshness You Can Trust. Premium sourcing and distribution across Bihar.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#about" className="hover:text-primary-light transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary-light transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-primary-light transition-colors">Why Choose Us</a></li>
              <li><a href="#business-flow" className="hover:text-primary-light transition-colors">Supply Chain</a></li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#products" className="hover:text-primary-light transition-colors">Fresh Vegetables</a></li>
              <li><a href="#products" className="hover:text-primary-light transition-colors">Fresh Fruits</a></li>
              <li><a href="#products" className="hover:text-primary-light transition-colors">Bulk Orders</a></li>
              <li><a href="#products" className="hover:text-primary-light transition-colors">Seasonal Specials</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-6 text-white/60 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Bilash Bhawan, Rashulpur Zilani<br />Majhauliya Road<br />Muzaffarpur Bihar 842001</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:devidagrofresh@gmail.com" className="hover:text-white transition-colors">devidagrofresh@gmail.com</a>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="tel:+918076664037" className="hover:text-white transition-colors">+91 8076664037</a>
                </div>
                <div className="flex items-center gap-4 pl-9">
                  <a href="tel:+919199322495" className="hover:text-white transition-colors">+91 9199322495</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} DeVid Agro Fresh. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
