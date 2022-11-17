import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

import { animateScroll as scroll } from 'react-scroll'

import { FooterContainer, FooterWrap, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, SocialMediaWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, WebsiteRights } from './FooterElements'

import logo from '../../images/logo.png'

const Footer = () => {
        const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
{/* 
                        <FooterLinkItems>
                            <FooterLinkTitle>Sobre nós</FooterLinkTitle>
                            <FooterLink to="about">Como Trabalhamos</FooterLink>
                            <FooterLink to="/signin">Testemunhos</FooterLink>
                            <FooterLink to="/signin">Termos e serviços</FooterLink>
                        </FooterLinkItems> */}


                        <FooterLinkItems>
                            <FooterLinkTitle>Redes sociais</FooterLinkTitle>
                            <FooterLink href='https://instagram.com/luanda_office_center?igshid=YmMyMTA2M2Y=' target={'_blank'}> Instagram </FooterLink>
                            <FooterLink href="https://www.facebook.com/profile.php?id=100073874147707">Facebook</FooterLink>
                            <FooterLink href='https://www.linkedin.com/in/luanda-office-center-loc-23763495/?originalSubdomain=ao' target="_blank">Linkedin</FooterLink>
                        </FooterLinkItems>


                        <FooterLinkItems>
                            <FooterLinkTitle>Contactos</FooterLinkTitle>
                            <FooterLink>+244 924 676 351</FooterLink>
                            <FooterLink href='mailto:geral.invesparso@gmail.com' >geral.invesparso@gmail.com</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Localização</FooterLinkTitle>
                            <FooterLink  href='https://goo.gl/maps/9yTTTTezyAdrVURy9' target="_blank">AutoEstrada Circular, Residencial Jardim de Rosas, Luanda - Angola</FooterLink>
                        </FooterLinkItems>
                            
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            <img src={logo} width={150} height={75} alt="Imagem de Logo" />
                        </SocialLogo>
                        <WebsiteRights>Luanda Office Center &copy; {new Date().getFullYear()} All rigths reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/profile.php?id=100073874147707" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://instagram.com/luanda_office_center?igshid=YmMyMTA2M2Y=" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/luanda-office-center-loc-23763495/?originalSubdomain=ao" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer