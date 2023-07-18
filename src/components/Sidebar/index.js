import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute,
  SidebarMenu,
} from "./SidebarElement";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaArrowAltCircleLeft, FaHome, FaLink } from "react-icons/fa";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon size={38} />
      </Icon>
      <SidebarBtnWrap>
        <SidebarRoute href="/">
          {" "}
          <FaHome size={30} />
        </SidebarRoute>
      </SidebarBtnWrap>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            Sobre Nós
          </SidebarLink>

          <SidebarLink to="discover" onClick={toggle}>
            Porque escolher-nos
          </SidebarLink>

          <SidebarLink to="services" onClick={toggle}>
            Serviços
          </SidebarLink>

          <SidebarLink to="signup" onClick={toggle}>
            Entre em Contacto
          </SidebarLink>

          <SidebarBtnWrap>
            <SidebarRoute href="/marketing">
              {" "}
              <FaLink size={30} /> Marketing
            </SidebarRoute>
          </SidebarBtnWrap>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute href="https://wa.me/244924676351">
            <IoLogoWhatsapp size={30} />
            Mensagem
          </SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
