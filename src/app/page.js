import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import PositioningSection from '@/components/PositioningSection';
import RevenueModelSection from '@/components/RevenueModelSection';
import StrategicPillarsSection from '@/components/StrategicPillarsSection';
import IndustriesSection from '@/components/IndustriesSection';
import EngagementModelSection from '@/components/EngagementModelSection';
import AIEnhancedSection from '@/components/AIEnhancedSection';
import WhySection from '@/components/WhySection';
import TrustSection from '@/components/TrustSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <PositioningSection />
        <RevenueModelSection />
        <StrategicPillarsSection />
        <IndustriesSection />
        <EngagementModelSection />
        <AIEnhancedSection />
        <WhySection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
