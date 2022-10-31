import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#f2f2f2' : 'transparent')};
  height: 100px;
  margin-top: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  justify-content: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
   height: 80px;
`

export const NavLinks = styled(LinkS)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  
  
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #20A6DA;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;


  @media screen and (max-width: 768px) {
    display: none
  }
`

export const NavBtnLink = styled(LinkR)`
  display: flex;
  border-radius: 50px;
  background: #20A6DA;
  white-space: nowrap;
  padding: 12px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  gap: 10px ;
  align-items: center;
  text-align: center;
  cursor: pointer;
  
  p {

  }

  transition: all 0.2s ease-in-out;
  text-decoration: none; 


  &:hover {
    transition: all 0.2 ease-in-out;
    background: #000;
    color: #fff;
  }
`