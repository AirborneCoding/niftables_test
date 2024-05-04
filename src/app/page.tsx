import AdvantagesSection from "@/components/home/AdvantagesSection";
import AI from "@/components/home/AI";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeaderSection from "@/components/home/HeaderSection";
import InnovationSection from "@/components/home/InnovationSection";
import Projects from "@/components/home/Projects";
import Footer from "@/components/layouts/Footer";
import React from "react";

const HomePage = () => {
  return (
    <main className="w-full bg-black-900">

      <div className="flex items-start md:flex-col">
        <div className="flex flex-1 flex-col items-center md:self-stretch">
          {/* HEADER SECTION */}
          <HeaderSection />
          {/* FEATURES SECTION */}
          <FeaturesSection />
          {/* INNOVATION SECTION */}
          <InnovationSection />
          {/* ADVANTAGE SECTION */}
          <AdvantagesSection />
          {/* UPCOMING PROJECTS SECTION */}
          <Projects />

          {/* AI MARKET ANALYSIS SECTION */}
          <AI />

        </div>
      </div>
    </main>
  )
};

export default HomePage;
