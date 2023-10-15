import React from 'react'
import CIcon from '@coreui/icons-react'
import { cibWhatsapp, cilPhone, cibGmail, cilDescription, cilHome } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Início',
    to: '/',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'FUNÇÕES',
    },
  },
  {
    component: CNavTitle,
    name: 'Contato',
  },
  {
    component: CNavItem,
    name: 'Whatsapp',
    target: '_blank',
    href: 'https://wa.me/5575988766035',
    icon: <CIcon icon={cibWhatsapp} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Gmail',
    target: '_blank',
    href: 'mailto:jurantec@gmail.com',
    icon: <CIcon icon={cibGmail} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Telefone',
    target: '_blank',
    href: 'tel:+5575988766035',
    icon: <CIcon icon={cilPhone} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'GitHub',
    target: '_blank',
    href: 'https://github.com/Brunin12',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
