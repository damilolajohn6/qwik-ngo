import HomeHeroSection from "@/components/HomeHero";
import MissionVisionSection from "@/components/MissionVisionImageSection";
import OurValue from "@/components/OurValue";
import PathwaysToFreedomSection from "@/components/PathwaysToFreedomSection";
import SponsorLogosSection from "@/components/SponsorLogosSection";
import StatisticsSection from "@/components/StatisticSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";

export default function Home() {
  return (
    <div className="">
      <HomeHeroSection />
      <MissionVisionSection />
      <PathwaysToFreedomSection />
      <StatisticsSection />
      <SuccessStoriesSection />
      <OurValue />
      <SponsorLogosSection />
    </div>
  );
}
