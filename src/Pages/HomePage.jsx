import React from "react";
import HeroSection from "../Components/HomePageComponents/HeroSection";
import CtaSection from "../Components/AuthPageComponents/CtaSection";
import NewPlantsSection from "../Components/HomePageComponents/NewPlantsSection";
import StatsSection from "../Components/HomePageComponents/StatsSection";

const HomePage = () => {
  return (
    <div className="space-y-18">
      <HeroSection></HeroSection>
      <NewPlantsSection></NewPlantsSection>
      <StatsSection></StatsSection>
      <CtaSection></CtaSection>
    </div>
  );
};

export default HomePage;
