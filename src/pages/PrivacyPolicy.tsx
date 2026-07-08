import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function PrivacyPolicy() {
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
        <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-6">Privacy Policy</h1>
        <p className="text-text-muted font-medium mb-12">Effective Date: June 20, 2026</p>

        <div className="space-y-8 text-text-dark/80 leading-relaxed bg-white p-8 md:p-12 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100">
          <section>
            <h2 className="text-2xl font-bold text-text-dark mb-4">1. Introduction</h2>
            <p>
              Welcome to Devid Agro ("Company," "we," "our," "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy complies with internationally recognized data protection principles, including ISO/IEC 27701 (Privacy Information Management) and ISO/IEC 27001 (Information Security Management) standards. This policy outlines how we collect, use, process, and secure your data when you use our services or interact with us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-dark mb-4">2. The Data We Collect</h2>
            <p>We may collect, use, store, and transfer different kinds of personal data about you, which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, and title.</li>
              <li><strong>Contact Data:</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
              <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-dark mb-4">3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., fulfilling produce orders).</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-dark mb-4">4. Data Security & Storage</h2>
            <p>
              In alignment with ISO 27001, we have put in place appropriate technical and organizational security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. 
            </p>
            <p className="mt-4">
              We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-dark mb-4">5. Your Legal Rights</h2>
            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-dark mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact our Data Privacy Manager at:
            </p>
            <div className="mt-4 p-6 bg-background-soft rounded-2xl">
              <p className="font-bold text-text-dark">Devid Agro</p>
              <p>Bilash Bhawan, Rashulpur Zilani</p>
              <p>Majhauliya Road, Muzaffarpur Bihar 842001</p>
              <p>Email: devidagrofresh@gmail.com</p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
