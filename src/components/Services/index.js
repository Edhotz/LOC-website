import React from "react";

import formation from "../../images/formation.jpg";
import newspaper from "../../images/newspaper.jpg";
import design from "../../images/design.jpg";
import handshake from "../../images/handshake.jpg";
import webdesign from "../../images/webdesign.jpg";
import apps from "../../images/apps.jpg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesIcon1,
  ServicesH2,
  ServicesP,
  ServicesP2,
  ServicesP1,
  ServicesP3,
} from "./ServicesElements";

export const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Nossos Serviços</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={formation} alt="imagem de formação" />
          <ServicesH2>Formação</ServicesH2>
          <ServicesP1>
            O Nosso compromisso é dotar os colaboradores das empresas, de
            conhecimentos práticas e atitudes necessárias ao desenvolvimento da
            actividade profissional, é um factor de diminuição de riscos e de
            aumento da satisfação interna dos trabalhadores.
          </ServicesP1>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={newspaper} />
          <ServicesH2>Relações Publicas e Comunicação</ServicesH2>
          <ServicesP>
            A LOC é especializada em diagnósticos, definição, implementação e
            monitoramento de estratégias integradas de comunicação empresarial.
            Com visão ampliada, procuramos o alinhamento da comunicação com a
            estrategia geral das empresas.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon1 src={design} height="240" width="405" />
          <ServicesH2>Design e Publicidade</ServicesH2>
          <ServicesP2>
            Soluções de marketing e comunicação com vista a gerar valor
            acrescentando as empresas e a transmitir uma imagem de excelência e
            competência no mercado.
          </ServicesP2>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={handshake} alt="imagem de formação" />
          <ServicesH2>Legalizações de Imóveis</ServicesH2>
          <ServicesP1>
            A Loc é especializada em atender as necessidades de Legalizações de
            diversos tipos de imóveis, aliados ao conhecimento e
            profissionalismo para a gestão das informações e serviços,
            proporcionando aos clientes facilidade, agilidade, comodidade e
            segurança nos procedimentos adequados á regurarização de seu imóvel.
          </ServicesP1>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={webdesign} height="240" width="405" />
          <ServicesH2>Desenvolvimento de Websites Modernos</ServicesH2>
          <ServicesP>
            Ter um site profissional, com visual e conteúdos de qualidade, vai
            proporcionar maior confiablidade ao seu negócio, Além disso seu
            negócio vai estar disponivel 24/7 para o mundo todo.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon1 src={apps} height="240" width="405" />
          <ServicesH2>
            Desenvolvimento de Aplicativos e Sistemas para Android e IOS
          </ServicesH2>
          <ServicesP3>
            Com o crescimento do uso de smartphones e o acesso móvel a internet
            é de capital importância marcar cada vez mais presença no digital e
            apostar em um aplicativo que atenda as necessidades do seu negócio.
          </ServicesP3>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};
