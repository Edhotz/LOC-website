import React from "react";
import {
  Card,
  DetailsCards,
  InfoSectionMarketingContainer,
  MarketingServices,
  SubTitle,
  SubTitleMarketingPage,
} from "./InfoSectionElements";

import MarketingImage1 from "../../images/MarketingImage1.jpg";
import CorporativeM from "../../images/CorporativeM.jpg";
import { ImageBg } from "../HeroSectionMarketing/HeroElements";
import { FaHandHoldingWater } from "react-icons/fa";

export const InfoSectionMarketing = () => {
  return (
    <>
      <InfoSectionMarketingContainer>
        <Card>
          <ImageBg src={MarketingImage1} alt="Marketing image1"></ImageBg>
        </Card>

        <h2>
          Soluções de publicidade e marketing para a sua empresa <br />
          <h3>
            Dispomos pacotes de imagem corporartiva digital para que sua marca
            fique na mente de seus clientes e colaboradores <br /> <br /> Luanda
            Office Center possui uma agência de Marcas orientada para o mercado
            Angolano, que cria e implementa soluções integradas de comunicação
            que visam a potenciar as vendas e a notariedade de imagem das
            empresas.
          </h3>
        </h2>
      </InfoSectionMarketingContainer>

      <SubTitleMarketingPage>
        Os Serviços da Agência de design da Luanda Office Center estão
        estruturados em duas areas: <strong>Active Design</strong> e{" "}
        <strong>Active Web</strong>
      </SubTitleMarketingPage>

      <MarketingServices>
        <div class="container">
          <div class="box">
            <p>Active Design</p>
            <span class="title">Branding & Corporative Identity</span>
            <p></p>
          </div>
        </div>

        <div class="container">
          <div class="box">
            <p>Active Design</p>
            <span class="title">Editorial & Promotional Design</span>
            <p></p>
          </div>
        </div>

        <div class="container">
          <div class="box">
            <p>Active Web</p>
            <span class="title">Web Design & Online Marketing</span>
            <p></p>
          </div>
        </div>
      </MarketingServices>

      <SubTitleMarketingPage>
        " Estamos a falar de algo que é poderoso, mas que tem de de ser
        Construido ao logo dos anos. Estamos a falar em ter uma imagem forte,
        consistente, que gere confiança e transmitta crediblidade ao seu
        cliente. <br /> Estamos a falar de <strong>NOTORIEDADE</strong>,
        notoriedade de marca! <br /> Sabe o que significa isso? <br />
        Significa que, quando o seu cliente se lembrar de seu produto ou
        serviço, automaticamente ira lembrar-se da sua empresa. <br />É este o
        comprimisso da <strong>Luanda Office Center</strong> consigo! "
      </SubTitleMarketingPage>

      <DetailsCards>
        <div class="cards">
          <div class="card one">
            <div class="cardDetails">
              <div class="cardDetailsHaeder">Planejamento Estratégico</div>
              <h1>
                Acreditamos que o planejamento estratégico da comunicação de uma
                empresa deve ser centrado na Marca, na sua gestão e dinamização.
              </h1>
              <div class="cardDetailsButton"></div>
            </div>
          </div>
          <div class="card two">
            <div class="cardDetails">
              <div class="cardDetailsHaeder">Procedimentos Operativos</div>
              Os Nossos serviços são suportados por procedimentos que garantem
              uma boa perfomance a nivel de qualidade, rapidez e eficacia
              <div class="cardDetailsButton"></div>
            </div>
          </div>
          <div class="card three">
            <div class="cardDetails">
              <div class="cardDetailsHaeder">Parceiros Especializados</div>
              Temos selecionado ao longo dos anos uma rede de parceiros com quem
              tem desenvolvido metodologias de trabalho assentes na qualidade
              dos serviços e no rigor dos compromissos estabelecidos
              <div class="cardDetailsButton"></div>
            </div>
          </div>
        </div>
      </DetailsCards>

      <SubTitleMarketingPage>
        "Orientação ao mercado Angolano, disponiblidade, flexiblidade,
        transparência, complementaridade e integração entre os serviços (tanto
        em suportes físicos, como digitais) são o nosso compromisso com a sua
        empresa! " <br /> <br />
        <strong>Celso Arsénio, Director Geral Luanda Office Center</strong>
      </SubTitleMarketingPage>
    </>
  );
};
