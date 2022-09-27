import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'

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

                        <FooterLinkItems>
                            <FooterLinkTitle>Sobre Nos</FooterLinkTitle>
                            <FooterLink to="about">Como Trabalhamos</FooterLink>
                            <FooterLink to="/signin">Testemunhos</FooterLink>
                            <FooterLink to="/signin">Carreras</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Termos de serviços</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Contacte-nos</FooterLinkTitle>
                            <FooterLink to="/signin">Contacto</FooterLink>
                            <FooterLink to="/signin">Suporte</FooterLink>
                            <FooterLink to="/signin">Reclamações</FooterLink>
                            <FooterLink to="/signin">Portfólio</FooterLink>
                        </FooterLinkItems>


                        <FooterLinkItems>
                            <FooterLinkTitle>Redes Sociais</FooterLinkTitle>
                            <FooterLink to="/signin"> Instagram </FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                            <FooterLink to="/signin">Youtube</FooterLink>
                            <FooterLink to="/signin">Twitter</FooterLink>
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
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkdin">
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