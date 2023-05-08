import React from "react";
import { Card, InfoSectionMarketingContainer } from "./InfoSectionElements";

import MarketingImage1 from "../../images/MarketingImage1.jpg";
import { ImageBg } from "../HeroSectionMarketing/HeroElements";

export const InfoSectionMarketing = () => {
  return (
    <InfoSectionMarketingContainer>
      <Card>
        <ImageBg src={MarketingImage1} alt="Marketing image1"></ImageBg>
      </Card>

      <h2>
        Soluções de publicidade e marketing para a sua empresa <br />
        <p>
          Dispomos pacotes de imagem corporartiva digital para que sua marca
          fique na mente de seus clientes e colaboradores
        </p>
      </h2>
    </InfoSectionMarketingContainer>
  );
};
