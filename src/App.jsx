import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './layout/AppRoutes'
import AppContext from './context/AppContext'

const App = () => {
  return (

      <RouterProvider router={routes}></RouterProvider>
  )
}

export default App