import React from "react";
import HeroSection from "../Components/HomePageComponents/HeroSection";
import CtaSection from "../Components/AuthPageComponents/CtaSection";
import NewPlantsSection from "../Components/HomePageComponents/NewPlantsSection";

const HomePage = () => {
  return (
    <div className="space-y-18">
      <HeroSection></HeroSection>
      <NewPlantsSection></NewPlantsSection>
      <CtaSection></CtaSection>
    </div>
  );
};

export default HomePage;
