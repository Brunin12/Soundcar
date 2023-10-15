import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { CContainer, CHeader, CHeaderNav, CHeaderToggler, CNavLink, CNavItem } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/" component={NavLink}>
              Início
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink to="/blog" component={NavLink}>
              Blog
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink to="/avisos" component={NavLink}>
              Avisos
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
