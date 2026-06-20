import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function TermsAndConditions() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-medium mb-8 transition-colors">
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-lg max-w-none text-text-dark"
      >
        <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6">Terms & Conditions</h1>
        <p className="text-text-muted font-medium mb-12">Effective Date: June 20, 2026</p>

        <div className="space-y-8 text-text-dark/80 leading-relaxed bg-white p-8 md:p-12 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100">
          <section>
            <h2 className="text-2xl font-bold text-text-dark mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Devid Agro ("Company," "we," "us," or "our"), concerning your access to and use of our supply chain and agricultural sourcing services. By accessing our services, you agree that you have read, understood, and agreed to be bound by all of these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-dark mb-4">2. Quality and Standards (ISO Compliance)</h2>
            <p>
              Devid Agro is committed to maintaining the highest industry standards for agricultural sourcing, food safety, and supply chain management. Our operational procedures are designed to align with ISO 9001 (Quality Management Systems) and ISO 22000 (Food Safety Management Systems) to ensure consistent quality, safety, and traceability of all produce.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-dark mb-4">3. Products and Sourcing</h2>
            <p>
              We act as a sourcing and distribution partner for fresh fruits and vegetables. While we strive to ensure the highest quality and freshness, agricultural products are subject to natural variations in size, color, geometry, and shelf-life. Orders are fulfilled based on availability, seasonal yields, and agreed-upon specifications during the contract phase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-dark mb-4">4. Payment and Logistics</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Pricing:</strong> Prices for produce are subject to daily market fluctuations unless a fixed-term contract is agreed upon.</li>
              <li><strong>Payments:</strong> Payment terms will be detailed in individual purchase orders or service agreements.</li>
              <li><strong>Logistics:</strong> We manage delivery timelines closely; however, transportation delays caused by force majeure events (e.g., severe weather, labor strikes, infrastructural failure) limit our liability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-dark mb-4">5. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the website, brand name, and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-dark mb-4">6. Limitation of Liability</h2>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the website or our sourcing services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-dark mb-4">7. Contact Information</h2>
            <p>
              For commercial inquiries or to resolve a complaint regarding our services, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-background-soft rounded-2xl">
              <p className="font-bold text-text-dark">Devid Agro</p>
              <p>Bilash Bhawan, Rashulpur Zilani</p>
              <p>Majhauliya Road, Muzaffarpur Bihar 842001</p>
              <p>Email: devidagrofresh@gmail.com</p>
              <p>Phone: +91 8076664037 / +91 9199322495</p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
