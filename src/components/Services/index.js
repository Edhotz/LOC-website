import React from 'react'
import Icon1  from '../../images/svg1.svg' 
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg' 



import formation from "../../images/formation.jpg"
import work from "../../images/work.jpg"
import handshake from "../../images/handshake.jpg"
import events from "../../images/events.jpg"
import newspaper from "../../images/newspaper.jpg"
import design from '../../images/design.jpg'




import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'


export const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Nossos Serviços</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={formation} />
                <ServicesH2>Formação</ServicesH2>
                <ServicesP>O Nosso comprimisso é dotar os colaboradores das empresas, de conhecimentos práticas e atitudes necessárias ao desenvolvimento da actividade profissional é um factor de diminuição de riscos e de aumento da satisfação interna dos trabalhadores.</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={newspaper} />
                <ServicesH2>Relações Publicas e Comunicação</ServicesH2>
                <ServicesP>A LOC é especializada em diagnóstico, definição, implementação e monitoramento de estratégias integradas de comunicação empresarial.
Com visão ampliada, procuramos o alinhamento da comunicação com a estrategia geral das empresas.</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={design} />
                <ServicesH2>Design e Publicidade</ServicesH2>
                <ServicesP>Soluções de marketing e comunicação com vista a gerar valor acrescentando as empresas e a transmitir uma imagem de excelência e competência no mercado</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}
