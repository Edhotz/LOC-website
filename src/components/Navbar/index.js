import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavBtnLoginLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import { IconContext } from "react-icons/lib";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

import logo from "../../images/logo.png";
import { Link, NavLink, Route, Router, Switch } from "react-router-dom";
import { MarketingPage } from "../../pages/MarketingPage";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scrollNav.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <img src={logo} alt="imagem de logo" width={100} height={50} />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars size={38} color="gray" />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Sobre nós
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Porque escolher-nos
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Serviços
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Entre em contacto
                </NavLinks>
              </NavItem>
              <NavItem>
                <li>
                  <a
                    href="/marketing"
                    style={{
                      color: "#000",
                      textDecoration: "none",
                    }}
                  >
                    Marketing & Publicidade
                  </a>
                </li>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink href="https://wa.me/244924676351">
                <IoLogoWhatsapp size={30} />
                <p>Mensagem</p>
              </NavBtnLink>
            </NavBtn>

            <NavBtn>
              <NavBtnLoginLink href="/clients/login">
                <p>Login</p>
              </NavBtnLoginLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
