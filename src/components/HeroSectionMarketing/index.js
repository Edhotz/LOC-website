import React, {useState} from 'react'
import MarketingVideoH from '../../videos/MarketingVideoH.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'

const HeroSectionMarketing = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer id="home">
        <HeroBg>
           <VideoBg autoPlay loop muted src={MarketingVideoH} type='video/mp4'></VideoBg>
    
        </HeroBg>
        <HeroContent>
            <HeroH1>A Luanda Office Center</HeroH1>
            <HeroP>
            pretende iniciar um novo
            conceito de design criativo e publicidade moderno e minimalista para a sua empresa<br />
            </HeroP>
            <HeroBtnWrapper>
                <Button to="about" 
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
  )
}


export default HeroSectionMarketing