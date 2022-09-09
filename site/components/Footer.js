import Image from "next/image"
import Link from "next/link"
import styled from "@emotion/styled"

function Footer() {

  const Container = styled.div`
  display: flex;
  background-color: #403C3B;
  padding: 10px;
  color: #FFFFFF;
  text-align: end;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    gap: 20px;
    padding: 10px;
    text-align: center;
  }
  li {
    list-style: none;
  }
  ` 


  return (
    <Container>

      <div>

        <ul>
          <li>
            <Link href="/">Sobre Nós</Link>
          </li>
          <li>
            <Link href="/carreiras">Carreiras</Link>
          </li>
          <li>
            <Link href="/contatos">Contactos</Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/luanda_office_center">Instagram</Link>
          </li>
          <li>
            <Link href="/">Facebook</Link>
          </li>
          <li>
            <Link href="/">Linkedin</Link>
          </li>
        </ul>

      </div>


      <h3> &copy; 2022 Luanda Office Center. Todos Direitos Reservados</h3>
    </Container>
  )
}

export default Footer
