import React from 'react'
import { CCol, CContainer, CRow } from '@coreui/react'

const Page500 = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <span className="clearfix">
              <h1 className="float-start display-3 me-4">500</h1>
              <h4 className="pt-3">Opa opa opa! Trecho em obras</h4>
              <p className="text-medium-emphasis float-start">
                A pagina que você procurou está em manutenção.
              </p>
            </span>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page500
