import React from "react";
import HeroSection from "../Components/HomePageComponents/HeroSection";
import CtaSection from "../Components/AuthPageComponents/CtaSection";

const HomePage = () => {
  return (
    <div className="space-y-12">
      <HeroSection></HeroSection>
      <CtaSection></CtaSection>
    </div>
  );
};

export default HomePage;
