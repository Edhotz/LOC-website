import Link from "next/link";
import Navbar from "../Navbar";
import { Contact, Container, Content, FormItems, Social } from "./styles";

import { BsTelephoneFill } from 'react-icons/bs'
import { AiOutlineGithub, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'
import { AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai'



export default function Form({title, children}) {
  return (
      <Container>
        
            
            <Contact>
                <Content>
                    <h2>Informação de Contactos</h2>
                    <p>Entre em contato conosco para qualquer informação ou pedido de orçamento</p>
                    
                    <div>
                        <span>
                            <BsTelephoneFill size={28} /> <p>924 676 351</p>
                        </span>
                        <span>
                            <AiOutlineMail size={28} /> <a href="mailto:geral.invesparso@gmail.com">geral.invesparso@gmail.com</a>
                        </span>
                        <span>
                            <ImLocation size={28} /> <p>Avenida Fidel Castro Cruz, Residencial Jardim de Rosas</p>
                        </span>
                    </div>

                    <Social>
                        <div>
                            <Link href="/">
                                <AiOutlineLinkedin size={50} />
                            </Link>
                            <Link href="https://www.instagram.com/luanda_office_center">
                                <AiOutlineInstagram size={50} />
                            </Link>
                            <Link href="https://wa.me/244953529112">
                                <AiOutlineWhatsApp size={50} />
                            </Link>
                            <Link href="/">
                                <AiOutlineGithub size={50} />
                            </Link>
                        </div>
                    </Social>
                </Content>
            </Contact>
            <FormItems>
            <form action="">
                <fieldset>
                    <div>
                        <label>Nome</label>
                        <input type="text" placeholder="Insira o seu primeiro nome" />
                
                        <label>Segundo Nome</label>
                        <input type="text" placeholder="Insira o seu ultimo nome" />
                    </div>
                    <span>
                        <label>E-mail</label>
                        <input type="email" placeholder="Insira o seu Email" />
                
                
                        <label>Telefone</label>
                        <input type="text" placeholder="Insira o seu numero de telefone" />
                    </span>
                
                    <div>
                        <label>Mensagem</label>
                        <textarea placeholder="Escreva aqui a sua mensagem" />
                    </div>
                    <button>Enviar</button>
                </fieldset>
            </form>
            </FormItems>
        
    </Container>
  )
}
