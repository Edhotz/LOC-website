import React, { useState } from "react";
import Video from "../../videos/video.jpg";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>*/}

        <img src={Video} alt="imagem de luanda" width={1900} height={1200} />
      </HeroBg>
      <HeroContent>
        <HeroH1>A Luanda Office Center</HeroH1>
        <HeroP>
          pretende iniciar um novo conceito de prestação de serviços necessarios
          para o sucesso profissional, pessoal e fundamental para o
          desenvolvimento.
          <br />
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Saiba mais {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
