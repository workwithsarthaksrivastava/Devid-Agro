import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
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
      <Helmet>
        <title>DeVid Agro Fresh | Premium Fruits & Vegetables Sourcing & Distribution</title>
        <meta name="description" content="DeVid Agro Fresh is a leading fresh produce supply chain partner based in Muzaffarpur, Bihar. We bridge the gap between local farmers and bulk buyers, supplying premium, sorted, and graded fruits and vegetables." />
        <meta name="keywords" content="DeVid Agro, DeVid Agro Fresh, Muzaffarpur fruits, Bihar agricultural produce, fresh vegetables bulk supply, seasonal fruits distributor, farm to market Bihar" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DeVid Agro Fresh | Premium Fruits & Vegetables Sourcing" />
        <meta property="og:description" content="Direct from local farms in Bihar to national markets. High-quality graded fruits & vegetables you can trust." />
        <meta property="og:url" content="https://devidagrofresh.com/" />
        <meta property="og:image" content="/android-chrome-512x512.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DeVid Agro Fresh | Premium Fruits & Vegetables Sourcing" />
        <meta name="twitter:description" content="Direct from local farms in Bihar to national markets. High-quality graded fruits & vegetables you can trust." />
        <meta name="twitter:image" content="/android-chrome-512x512.png" />
      </Helmet>

      <Hero />
      <About />
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
