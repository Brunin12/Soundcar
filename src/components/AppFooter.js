import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">&copy; BrunoSoft &amp; Soundcar</span>
      </div>
      <div className="ms-auto">
        <span>(1990 - 2023)</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
