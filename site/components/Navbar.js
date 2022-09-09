import React from "react";
import Logo from "../public/images/logo.png";
import Image from "next/image";
import styled from "@emotion/styled";
import Link from "next/link";

function Navbar() {
  const NavContainer = styled.div`
  :root {
    --PrimaryColor: #048ABF;
    --SecondaryColor: #049DBF#;
    --ThirdColor: #82C9D9;
    --FourthColor: #403C3B;
    --FifthColor: #F2F2F2;

    --PrimaryFont:'Mulish', sans-serif;
  }
  height: 18vh;
  width: 100%;
  padding: 6em;
  background-color: --FifthColor;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Mulish', sans-serif;

  button {
        margin: 10px;
        background: #20A6DA;
        border-radius: 5px;
        padding: 10px 25px;
        border: none;
        color: #F2F2F2;
        :hover {
          filter: brightness(0.9);
          transition: all .3s;
        }
      }
    `;

  const NavLinks = styled.div`
  a {
    font-size: 18px;
    color: var(--FourthColor);
    margin: 20px;
  :hover{
    border-bottom: 3px #049DBF solid;
    transition :all .3s;
  }}
  `;

  return (
    <NavContainer>
      <Image src={Logo} style={{position: 'fixed',}} width={160} height={80} alt="Imagem de Logo da LOC" />
      <NavLinks>
       <Link href="/"><a>Home</a></Link>
       <Link href="/servicos"><a>Serviços</a></Link>
       <Link href="/about"><a>Quem Somos</a></Link> 
      </NavLinks>
      <button>
        <Link href="/contact">Contatos</Link>
      </button>
    </NavContainer>
  );
}

export default Navbar;
