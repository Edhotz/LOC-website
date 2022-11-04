import React, { useEffect, useState } from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'

import { IconContext } from 'react-icons/lib'
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll'

import logo from '../../images/logo.png'

const Navbar = ({ toggle }) => {
    const [ scrollNav, setScrollNav ] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scrollNav.scrollToTop()
    }

  return (
    <>
        <IconContext.Provider value={{ color: "#fff"}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <img src={logo} alt="imagem de logo"  width={140} height={70}/>	
                    </NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars size={38}/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" 
                            smooth={true}
                            duration={500}
                            spy={true} exact='true' offset={-80}
                            activeClass="active"
                            >Sobre Nós</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover"
                            smooth={true}
                            duration={500}
                            spy={true} exact='true' offset={-80}
                            activeClass="active"
                            >Porque escolher-nos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                            smooth={true}
                            duration={500}
                            spy={true} exact='true' offset={-80}
                            activeClass="active"
                            >Serviços</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup"
                            smooth={true}
                            duration={500}
                            spy={true} exact='true' offset={-80}
                            activeClass="active"
                            >Entre em Contacto</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="contact"><IoLogoWhatsapp size={30} /><p>Mensagem</p></NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar