import styled from "@emotion/styled";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import main from '../public/images/main.jpg'
import Bg from "../public/images/bg.png";
import Logo1 from "../public/images/logo.png"
import Quality from "../public/images/Frame.svg"
import Support from "../public/images/support.svg"
import Design from "../public/images/design.svg"

export default function Home() {
  const Page = styled.div`
    :root {
      --PrimaryColor: #048abf;
      --SecondaryColor: #20A6DA;
      --ThirdColor: #82c9d9;
      --FourthColor: #403c3b;
      --FifthColor: #f2f2f2;

      --PrimaryFont: "Mulish", sans-serif;
    }
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Mulish";
  `;
  const Main = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    margin-top: -80px;
    margin-left: 5em;
    align-items: center;
    justify-content: center;
    background: url(${main}) no-repeat center center;
    background-size: cover;
    
  `;
  const Text = styled.div`
    max-height: 50vh;
    max-width: 50%;
    font-size: 39px;
    div {
      margin-top: 40px;
      margin-left: -10px;
      button {
        margin: 10px;
        background: #20A6DA;
        border-radius: 5px;
        padding: 15px;
        border: none;
        color: #f2f2f2;
        :hover {
          transition: all .3s;
          filter: brightness(0.9);
          color: #f2f2f2;
        }
      }
    }
  `;

  const Logo = styled.div`
    max-height: 50vh;
    max-width: 50%;
  `;

  const Section1 = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    margin-top: 100px;
    
    padding: 20px;
    gap: 10px;
    background: #20A6DA;
    align-items: center;
    justify-content: space-around;
  `;

  const Card1 = styled.div`
    margin-top: 10px;
    height: 400px;
    width: 350px;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
    text-align: justify;
    padding: 25px;
    border-radius: 50px 50px 50px 50px;
    h3 {
      font-size: 1.5rem;
      text-align: center;
      margin-top: 2rem;
    }
    p {
      font-size: 1rem;
    } :hover {
      filter: brightness(0.9);
      background-color: #048abf;
      color: #ffffff;
      transition: all .6s;
    }
    `;

  const Section2 = styled.div`
    display: flex;
    margin-top: 10px;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: justify;
    border-radius: 10px;
    div {
      margin-top: 20px;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
    }
    h1 {
      font-size: 2rem;
      text-align: center;
      margin-top: 1rem;
    }
    p {
      font-size: 1rem;
    }
    `

  const Card2 = styled.div`
    display: flex;
    height: 10vh;
    width: 15vw;
    background-color: gray;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    padding: 10px;
    h3 {
      font-size: 1.1rem;
      color: white;
    }
  `;


  const SubCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  div {
    margin: 10px;
    background: #20A6DA;
    border-radius: 5px;
    padding: 10px 15px;
    border: none;
    color: #f2f2f2;
    text-align: center;
    cursor: pointer;
  }div:hover {
        filter: brightness(0.9);
        transition: all .3s;
    }
    span {
    margin: 10px;
    background: #20A6DA;
    border-radius: 5px;
    padding: 10px 15px;
    border: none;
    color: #f2f2f2;
    text-align: center;
    cursor: pointer;
  }span:hover {
        transition: all .3s;
        filter: brightness(0.9);
    }
    `


  const Section3 = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    margin-top: -19rem;
    margin-bottom: 30px;
    background: #ffffff;
    align-items: center;
    justify-content: space-around;
    button {
        margin: 10px;
        background: #20A6DA;
        border-radius: 5px;
        padding: 15px 40px;
        border: none;
        color: #f2f2f2;
        :hover {
          filter: brightness(0.9);
          transition: all .3s;
        }
      }
  `;

  const Card3 = styled.div`
    height: 500px;
    width: 550px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 25px;
    div {
      font-size: 2.2rem;
      margin-top: 10rem;
      margin-left: 4rem;
      align-items: center;
    }
  `;

  const Card4 = styled.div`
    margin: 20px;
    height: 500px;
    width: 550px;
    background-color: #ffffff;
    justify-content: space-between;
    border-radius: 10px;
    padding: 25px;
    h3 {
      font-size: 1.4rem;
      text-align: start;
      font-weight: 400;
      color: #000000;
    strong: {
      font-weight: bold;
    }}
  `;

  const Article = styled.div`
  height: 86vh;
  width: 100%;
 
  boxs {
    box1{
      position: absolute;
      width: 320px;
      height: 342.77px;
      left: 168px;
      top: 1058px;
      background: #20A6DA;
      border-radius: 50px 50px 50px 50px;
      transform: matrix(1, 0, 0, 1, 0, 1);
      h3 {
        position: absolute;
        top: 120px;
        left: 60px;
        color: #FFFFFF;
      }
      p {
        position: absolute;
        top: 160px;
        left: 50px;
        color: #FFFFFF;
      }
      
    } box1:hover {
      background-color: #049dbf;
      transition: all .3s;

    }
    box2 {
      box-sizing: border-box;

    position: absolute;
    width: 320px;
    height: 342.77px;
    left: 655px;
    top: 1058px;

    border: 2px solid #20A6DA;
    border-radius: 50px 50px 50px 50px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    h3 {
        position: absolute;
        top: 120px;
        left: 80px;
        color: #20A6DA;
      }
      p {
        position: absolute;
        top: 160px;
        left: 30px;
        color: #20A6DA;
      }
    } box2:hover {
      background-color: #20A6DA;
      transition: all .3s;
      h3 {
        color: #FFFFFF;
      }
      p {
        color: #FFFFFF;
      }
      
    }
    box3 {
      box-sizing: border-box;

      position: absolute;
      width: 320px;
      height: 342.77px;
      left: 1135px;
      top: 1058px;

      border: 2px solid #82c9d9;
      border-radius: 50px 50px 50px 50px;
      transform: matrix(1, 0, 0, 1, 0, 0);
    }
    h3 {
        position: absolute;
        top: 120px;
        left: 80px;
        color: #20A6DA;
      }
      p {
        position: absolute;
        top: 160px;
        left: 50px;
        color: #20A6DA;
      }
    } box3:hover {
      background-color: #20A6DA;
      transition: all .3s;
      h3 {
        color: #FFFFFF;
      }
      p {
        color: #FFFFFF;
      }
    }
  
  `
  const Text1 = styled.div`
  font-size: 2.5rem;
  text-align: start;
  justify-content: flex-start;
  margin-top: 10px;
  margin-left: 7rem;
  div {
    button {
      margin: 10px;
      background: #20A6DA;
      border-radius: 5px;
      padding: 15px;
      border: none;
      color: #f2f2f2;
      :hover {
        filter: brightness(0.9);
        color: #797979;
      }
    }
  }
  `

  const Elipse = styled.div`
        justify-content: center;
        width: 80px;
        margin-left: 8rem;
        margin-top: 2rem;
        height: 83.09px;
        border-radius: 100%;
  `

  const Elipse2 = styled.div`
    justify-content: center;
    width: 80px;
    margin-left: 8rem;
    margin-top: 1rem;
    height: 83.09px;
    border-radius: 100%;
  `

  const Elipse3 = styled.div`
  align-items: center;
  justify-content: center;
    width: 80px;
    margin-left: 8rem;
    margin-top: 1rem;
    height: 83.09px;
    border-radius: 100%;
    `

const Asection = styled.div`
  width: 100%;
  height: 70vh;
  
  h1 {
    text-align: center;
    margin-top: 30rem;
  }

  box {
    position: absolute;
    width: 401px;
    height: 362px;
    left: 181px;
    top: 3300px;
    background-color: #FFFFFF;

    p {
      position: absolute;
      width: 411px;
      height: 130px;
      left: 870px;
      top: -90px;

      font-style: normal;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 160%;

      letter-spacing: 0.02em;

      color: #787878;
    }

   
  }  
  `
  const Text2 = styled.div`
  font-size: 2.5rem;
  text-align: end;
  justify-content: flex-start;
  margin-top: 60px;
  margin-right: 19rem;
  div {
    button {
      margin: 10px;
      background: #20A6DA;
      border-radius: 5px;
      padding: 15px;
      border: none;
      color: #f2f2f2;
      :hover {
        filter: brightness(0.9);
        color: #787878;
      }
    }
  }
  `


  return (
    <div>
      <Head>
        <title>Luanda Office Center</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;1,200;1,700&display=swap"
          rel="stylesheet"
        />
        <script src="https://maps.googleapis.com/maps/api/js?key=key"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Navbar />
        <Main>
          <Text>
            A <strong>Luanda Office Center</strong> pretende iniciar um novo
            conceito de prestação de serviços necessarios para o sucesso
            profissional e pessoal fundamental para o desenvolvimento de
            qualquer país... <br />
            <div>
              <Link href="/contact"><button>Contatos</button></Link>
              <Link href="/about"><button>Quem Somos</button></Link>
            </div>
          </Text>

          <Logo>
            <Image src={Bg} width="2400" height="1200" alt="Emblema da LOC" />
          </Logo>
        </Main>

        <Article>
          <Text1>
            Porque escolher-nos ?
          </Text1>
          <boxs>
            <box1>
              <Elipse>
                  <Image src={Quality}  alt="imagem qualidade de serviços"/>
              </Elipse>
              <h3>Serviços de Qualidade</h3>
              <p>Serviços de qualidade aliados <br/> ao comprimisso com cliente, <br/>
              alargando um leque de serviços para agregando a sua empresa.
              </p>
            </box1>
            <box2>
              <Elipse2>
              <Image src={Support}  alt="ilustração de serviços"/>
              <h3>Suporte ao cliente</h3>
              <p>Provemos serviços de suporte ao cliente 
                customizados para resolução de problemas, mantendo a excelência dos serviços
              </p>
              </Elipse2>
            </box2>
            <box3>
              <Elipse3>
              <Image src={Design}  alt="ilustração de Design"/>
              <h3>Trabalho Criativo</h3>
              <p>Serviços de qualidade aliados <br/> ao comprimisso com cliente, <br/>
              alargando um leque de serviços para agregando a sua empresa.
              </p>

              </Elipse3>
            </box3>
          </boxs>
        </Article>

        <Section3>
          <Card3>
            <div>
              <h1>Serviços</h1>
              <button>
                <Link href="/servicos">
                  Saiba mais
                </Link>
              </button>
            </div>
          </Card3>
          <Card4>
            <h3>
              A <strong>Luanda Office Center</strong> é uma empresa de direito angolano, criada para
              atender as necessidades <br />
              de prestação de serviços, aliados ao conhecimento e
              profissionalismo para gestão das informações e serviços, <br />
              proporcionando aos clientes, facilidade, agilidade, comodidade e
              segurança nos procedimentos adequados à regularização de seu
              Imóvel.
            </h3>
            <SubCard>
              <div>Formação</div>
              <div>Higiene e segurança no Trabalho</div>
              <div>Certificações de Sistemas</div>
              <div>Eventos</div>
              <div>Relações Publicas</div>  <span>Desenvolvimento de Apps</span> <span>Design</span> <span>WebDesign</span> <span>Desenvolvimento Web</span>
              <div>Publicidade</div>
            </SubCard>
          </Card4>
          
        </Section3>

        <Section1>
         
          <Card1>
            <h3>Missão</h3>
            <p>Prestar um serviço dedicado, onde a paixão pelo que se faz aliada ao cuidado, objectividade, criatividade
              e eficiêcia se se transformam em soluções para a regularização do seu imovel.
            </p>
          </Card1>
          <Card1>
            <h3>Visão</h3>
            <p>
              Tornarmo-nos uma referencia no atendimento às soluções de legalização de imóveis com foco na eficiência e excelência na prestação do serviço
            </p>
          </Card1>
          <Card1>
            <h3>Ética e Confidencialidade</h3>
            <p>A <strong>LOC (Luanda Office Center)</strong> e seus profissionais actuam na defesa dos interesses legítimos dos seus clientes,
              com respeito escrupuloso das regras de natureza ética. <br />
              Os nosso funcionários estão nesta medida vinculados ao sigilo, quanto a todos os dados e informações relacionados com serviços prestados.
            </p>
          </Card1>
        </Section1>


        <Asection>
          <Text2>
            Quem Somos
          </Text2>

          <section>
               <box>
                <Image src={Logo1} style={{marginTop: "20"}}  alt="imagem de logo"/>
                <p>
                  Sediada em Luanda pela empresa de direito angolano Invesparso, a <strong>Luanda Office Center</strong> é uma empresa
                  orientada para o mercado empresarial Angolano, que cria e implementa soluções integradas de comunicação
                  que visão a potenciar as vendas e a notoriedade de imagem de empresas.
                </p>       
                </box>
          </section>
        </Asection>
        <Footer />
      </Page>
    </div>
  );
}
