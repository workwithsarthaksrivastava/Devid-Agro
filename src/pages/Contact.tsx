import { motion } from "motion/react";
import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    produceType: "",
    quantity: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, businessName, email, produceType, quantity, message } = formData;
    
    const text = `*New Partnership/Quote Request*\n\n*Name:* ${name}\n*Business:* ${businessName}\n*Email:* ${email}\n*Produce Interest:* ${produceType}\n*Estimated Quantity:* ${quantity}\n*Message:* ${message}`;
    
    // Replace with the actual WhatsApp number
    const waNumber = "918076664037"; 
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(waUrl, "_blank");
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl lg:text-6xl font-extrabold text-primary mb-6">Contact & Queries</h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Get a quote or reach out to us for bulk inquiries, supply chain partnerships, or general questions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-text-dark mb-4">Get in Touch</h3>
            <p className="text-text-muted mb-8">
              Based in Muzaffarpur, we are redefining the fresh produce supply chain. Connect with us directly.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-text-dark">Headquarters</h4>
                <p className="text-text-muted">Bilash Bhawan, Rashulpur Zilani<br/>Majhauliya Road, Muzaffarpur Bihar 842001</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-text-dark">Email</h4>
                <p className="text-text-muted">devidagrofresh@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Query Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
        >
          <h3 className="text-2xl font-bold text-text-dark mb-6">Get a Quote</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-dark">Name</label>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-dark">Business Name</label>
                <input 
                  type="text" 
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Company XYZ"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-text-dark">Email</label>
              <input 
                required
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-dark">Produce of Interest</label>
                <select
                  required
                  name="produceType"
                  value={formData.produceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Select Produce</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Fruits">Fruits</option>
                  <option value="Both">Both (Vegetables & Fruits)</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-dark">Est. Quantity / Freq.</label>
                <input 
                  type="text" 
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="e.g. 500kg Weekly"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-text-dark">Additional Details</label>
              <textarea 
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your sourcing needs..."
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 mt-2 bg-primary hover:bg-primary-light text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send to WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
