import React from 'react'

import formation from "../../images/formation.jpg"
import newspaper from "../../images/newspaper.jpg"
import design from '../../images/design.jpg'




import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesIcon1,   ServicesH2, ServicesP, ServicesP2, ServicesP1 } from './ServicesElements'


export const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Nossos Serviços</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={formation} alt="imagem de formação"  />
                <ServicesH2>Formação</ServicesH2>
                <ServicesP1>O Nosso comprimisso é dotar os colaboradores das empresas, de conhecimentos práticas e atitudes necessárias ao desenvolvimento da actividade profissional é um factor de diminuição de riscos e de aumento da satisfação interna dos trabalhadores.</ServicesP1>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={newspaper} />
                <ServicesH2>Relações Publicas e Comunicação</ServicesH2>
                <ServicesP>A LOC é especializada em diagnóstico, definição, implementação e monitoramento de estratégias integradas de comunicação empresarial.
Com visão ampliada, procuramos o alinhamento da comunicação com a estrategia geral das empresas.</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon1 src={design} height="240" width="405" />
                <ServicesH2>Design e Publicidade</ServicesH2>
                <ServicesP2>Soluções de marketing e comunicação com vista a gerar valor acrescentando as empresas e a transmitir uma imagem de excelência e competência no mercado</ServicesP2>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}
