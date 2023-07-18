import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 300px;
  height: 600px;
  background: #fff;
  display: grid;
  align-items: center;
  border-radius: 0px 0px 18px 18px;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "0%" : "100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #000;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: left;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: start;
  justify-content: left;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transform: 0.2s ease-in-out;
  text-decoration: none;
  color: #000;
  margin-left: 5rem;
  cursor: pointer;

  &:hover {
    color: #0184ba;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled.a`
  display: flex;
  border-radius: 50px;
  background: #0184ba;
  white-space: nowrap;
  padding: 16px 64px;
  color: #000;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 18px;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0166B1;
    color: #fff;
  }
`;
