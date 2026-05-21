import { setRequestLocale } from 'next-intl/server';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import WorkCarousel from '@/components/WorkCarousel';
import Guarantee from '@/components/Guarantee';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return (
    <main>
      <Nav />
      <Hero />
      <Portfolio />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <WorkCarousel />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
