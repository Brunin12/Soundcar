import React from 'react'

const Home = React.lazy(() => import('./views/home/Home'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const routes = [
  { path: '/', exact: true, name: 'Home', element: Home },
  { path: '/404', name: 'Page 404', element: Page404 },
  { path: '/500', name: 'Page 500', element: Page500 },
]

export default routes
