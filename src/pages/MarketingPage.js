import React, { useState } from "react";
import Footer from "../components/Footer";
import { homeObjThree } from "../components/InfoSection/Data";
import Sidebar from "../components/Sidebar";
import HeroSectionMarketing from "../components/HeroSectionMarketing";
import { InfoSectionMarketing } from "../components/InfoSectionMarketing";
import InfoSection from "../components/InfoSection";
import NavbarComponents from "../components/NavbarComponents";

export const MarketingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarComponents toggle={toggle} />
      <HeroSectionMarketing />
      <InfoSectionMarketing />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};
