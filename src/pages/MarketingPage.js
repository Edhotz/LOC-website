import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import { homeObjOne, homeObjThree } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import { Services } from "../components/Services";
import Sidebar from "../components/Sidebar";
import HeroSectionMarketing from "../components/HeroSectionMarketing";
import { InfoSectionMarketing } from "../components/InfoSectionMarketing";
import InfoSection from "../components/InfoSection";

export const MarketingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSectionMarketing />
      <InfoSectionMarketing />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};
