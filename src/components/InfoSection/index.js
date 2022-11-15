import React from "react";
import { Button } from "../ButtonElement";
import { NavBtnLink } from "../Navbar/NavbarElements";
import { IoLogoWhatsapp } from 'react-icons/io'


import {
  Column2,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  primary,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>

                <BtnWrap>
                  <NavBtnLink>
                    <NavBtnLink href="https://wa.me/244924676351">
                      <IoLogoWhatsapp size={30} color="#fff" />
                      <p>Fale Conosco</p>
                    </NavBtnLink>
                  </NavBtnLink>
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2>
              <ImgWrap imgStart={imgStart}>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};
export default InfoSection;
