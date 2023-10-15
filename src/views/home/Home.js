import React from 'react'

import {
  CCard,
  CCardBody,
  CCardImage,
  CListGroup,
  CListGroupItem,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'
import img from '../../assets/images/img.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpg'
import img5 from '../../assets/images/img5.jpg'

const Home = () => {
  return (
    <>
      <h1>Serviços</h1>
      <CRow>
        <CCol xs={12} md={6} xl={6}>
          <CCard className="p-1 m-2">
            <CCardImage orientation="top" src={img} />
            <CCardBody>
              <CCardTitle>Troca de saida</CCardTitle>
              <CCardText>
                Troca de saída de aparelhos eletrônicos é um processo pelo qual a saída de um
                aparelho eletrônico é alterada para um formato diferente. Isso pode ser necessário
                por vários motivos, como:
                <CListGroup>
                  <CListGroupItem>
                    Para adaptar o aparelho a um país com uma tensão elétrica diferente.
                  </CListGroupItem>
                  <CListGroupItem>
                    Para corrigir um problema com a saída do aparelho.
                  </CListGroupItem>
                </CListGroup>
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard className="p-1 m-2">
            <CCardImage orientation="top" src={img2} />
            <CCardBody>
              <CCardTitle>Troca de tela</CCardTitle>
              <CCardText>
                A troca de tela de aparelhos eletrônicos é um serviço que consiste na substituição
                da tela de um dispositivo eletrônico, como um celular, tablet, computador ou
                televisão. A tela é a parte do dispositivo que exibe as imagens e vídeos, e pode
                danificada por várias causas, como quedas, impactos, arranhões ou exposição a
                líquidos.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} md={6} xl={6}>
          <CCard className="p-1 m-2">
            <CCardImage orientation="top" src={img3} />
            <CCardBody>
              <CCardTitle>Atualização de GPS</CCardTitle>
              <CCardText>
                Atualização de GPS de aparelhos eletrônicos é o processo de atualização dos dados
                sistema de navegação por satélite (GPS) de um aparelho eletrônico. Essa pode incluir
                novos mapas, pontos de interesse (POIs), e informações de tráfego.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} md={6} xl={6}>
          <CCard className="p-1 m-2">
            <CCardImage orientation="top" src={img4} />
            <CCardBody>
              <CCardTitle>Conserto de fonte e amplificadores (modulo)</CCardTitle>
              <CCardText>
                Conserto de fonte e amplificadores é o processo de reparar ou substituir defeituosos
                defeituosos em fontes e amplificadores de áudio. Os amplificadores são dispositivos
                dispositivos que aumentam a potência de um sinal elétrico, enquanto as fontes são
                que fornecem alimentação elétrica a outros componentes eletrônicos.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <hr />
      <CRow>
        <CCol>
          <CCard className="p-1 m-2">
            <CCardImage orientation="top" src={img5} />
            <CCardBody>
              <CCardTitle>
                <h1>Quem Somos?</h1>
              </CCardTitle>
              <CCardText>
                Somos uma empresa especializada em conserto de som automotivo, com mais de 30 anos
                de experiência na área. Nossa equipe de técnicos altamente qualificados está pronta
                para atender a todas as suas necessidades, desde reparos simples até instalações
                complexas. Oferecemos uma ampla gama de serviços, incluindo:
                <CListGroup className="p-1 m-4">
                  <CListGroupItem>Reparo de amplificadores </CListGroupItem>
                  <CListGroupItem>Reparo de alto-falantes </CListGroupItem>
                  <CListGroupItem>Reparo de toca-fitas e CD players</CListGroupItem>
                  <CListGroupItem>
                    Instalação de som automotivo Alinhamento e balanceamento de som
                  </CListGroupItem>
                </CListGroup>
                Trabalhamos com as melhores marcas do mercado e utilizamos peças originais para
                garantir a qualidade do nosso trabalho. Nosso objetivo é proporcionar aos nossos
                clientes a melhor experiência possível, oferecendo serviços de alta qualidade a
                preços competitivos. Entre em contato conosco hoje mesmo para saber mais sobre
                nossos serviços. Aguardamos seu contato!
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Home
