import React from 'react'

const Home = React.lazy(() => import('./views/home/Home'))

const routes = [{ path: '/', exact: true, name: 'home', element: Home }]

export default routes
