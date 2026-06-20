import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Founders } from '../components/Founders';
import { Products } from '../components/Products';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { BusinessFlow } from '../components/BusinessFlow';
import { ScrollStorytelling } from '../components/ScrollStorytelling';
import { Clients } from '../components/Clients';
import { CTA } from '../components/CTA';

export function Home() {
  return (
    <>
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
    </>
  );
}
