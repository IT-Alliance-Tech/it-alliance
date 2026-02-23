import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExecutiveProblem from "@/components/ExecutiveProblem";
import RevenueArchitecture from "@/components/RevenueArchitecture";
import StrategicPillars from "@/components/StrategicPillars";
import Industries from "@/components/Industries";
import EngagementModel from "@/components/EngagementModel";
import AIEnhanced from "@/components/AIEnhanced";
import WhyUs from "@/components/WhyUs";
import Trust from "@/components/Trust";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingSocialNav from "@/components/FloatingSocialNav";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <ExecutiveProblem />
            <RevenueArchitecture />
            <StrategicPillars />
            <Industries />
            <EngagementModel />
            <AIEnhanced />
            <WhyUs />
            <Trust />
            <FinalCTA />
            <Footer />
            <FloatingSocialNav />
        </main>
    );
}
