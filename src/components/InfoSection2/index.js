import React from 'react'

import { Article, Elipse, Elipse2, Elipse3, Text1 } from './InfoSectionElements'

import Quality from '../../images/quality.svg'
import Support from '../../images/support.svg'
import Design from '../../images/design.svg'


export const InfoSection2 = () => {
  return (
        <Article id="discover">
          <Text1>
            Porque escolher-nos ?
          </Text1>
          <boxs>
            <box1>
              <Elipse>
                  <img src={Quality}  alt="imagem qualidade de serviços"/>
              </Elipse>
              <h3>Serviços de Qualidade</h3>
              <p>Serviços de qualidade aliados <br/> ao comprimisso com cliente, <br/>
              alargando um leque de serviços <br/> para agregar mais valor a sua empresa.
              </p>
            </box1>
            <box2>
              <Elipse2>
              <img src={Support}  alt="ilustração de serviços"/>
              <h3>Suporte ao cliente</h3>
              <p>Provemos serviços de suporte ao cliente 
                customizados para resolução de problemas, mantendo a excelência dos serviços
              </p>
              </Elipse2>
            </box2>
            <box3>
              <Elipse3>
              <img src={Design}  alt="ilustração de Design"/>
              <h3>Trabalho Criativo</h3>
              <p>Serviços de qualidade aliados <br/> ao comprimisso com cliente, <br/>
              alargando um leque de serviços <br/> para agregar cada vez mais valor <br />a sua empresa a sua empresa.
              </p>

              </Elipse3>
            </box3>
          </boxs>
        </Article>
  )
}
