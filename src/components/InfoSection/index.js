import React from 'react'
import { Button } from '../ButtonElement'

import { 
    Column2, InfoContainer ,InfoWrapper, InfoRow, Column1,
    TextWrapper, TopLine, Heading, Subtitle, 
    BtnWrap, ImgWrap, Img, Column3, Column4, TextWrapper2, TopLine2, Heading2, Subtitle2, BtnWrap2 } from './InfoElements'

const InfoSection = ({ lightBg, id, imgStart, primary, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, dark, dark2,  }) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText} >{description}</Subtitle>

                        <BtnWrap>
                            <Button to="contact" 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}  
                            >
                            {buttonLabel}
                            </Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>

                    <Column2>
                        <ImgWrap imgStart={imgStart}>
                           <Img src={img} alt={alt} />
                        </ImgWrap>                    
                    </Column2>

                    <Column3>
                    <TextWrapper2>
                        <TopLine2>{TopLine}</TopLine2>
                        <Heading2 lightText={lightText}>{headline}</Heading2>
                        <Subtitle2 darkText={darkText} >{description}</Subtitle2>

                        <BtnWrap2>
                            <Button to="contact" 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}  
                            >
                            {buttonLabel}
                            </Button>
                        </BtnWrap2>
                    </TextWrapper2>
                    </Column3>

                    <Column4>
                        <ImgWrap imgStart={imgStart}>
                           <Img src={img} alt={alt} />
                        </ImgWrap>                    
                    </Column4>


                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}
export default InfoSection