/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Founders } from './components/Founders';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BusinessFlow } from './components/BusinessFlow';
import { ScrollStorytelling } from './components/ScrollStorytelling';
import { Clients } from './components/Clients';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="w-full min-h-screen bg-background-soft">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Founders />
      <Products />
      <Services />
      <WhyChooseUs />
      <BusinessFlow />
      <ScrollStorytelling />
      <Clients />
      <CTA />
      <Footer />
    </main>
  );
}

