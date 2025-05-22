import ClientSection from "@/sections/ClientSection/ClientSection";
import CustomerReviewSection from "@/sections/CustomerReviewSection/CustomerReviewSection";
import DiscoverSection from "@/sections/DiscoverSection/DiscoverSection";
import FrequentlySection from "@/sections/FrequentlySection/FrequentlySection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import HowItWorkSection from "@/sections/HowItWorkSection/HowItWorkSection";
import TalentSection from "@/sections/TalentSection/TalentSection";
import WhySection from "@/sections/WhySection/WhySection";

export default function Home() {
  return (
    <div className="mt-20 lg:mt-0">
      <HeroSection />
      <DiscoverSection />
      <WhySection />
      <ClientSection />
      <HowItWorkSection />
      <TalentSection />
      <CustomerReviewSection />
      <FrequentlySection />
    </div>
  );
}
