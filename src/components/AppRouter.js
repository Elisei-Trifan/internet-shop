/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import Shop from '../pages/Shop'

const AppRouter = () => {
  const isAuth = false
  return (
    <div>
      <Routes>
        {isAuth === true &&
          authRoutes.map(({ path, Element }) => (
            <Route key={path} path={path} element={Element} />
          ))}

        {publicRoutes.map(({ path, Element }) => (
          <Route key={path} path={path} element={Element} />
        ))}

        <Route path="/" element={<Shop />} />
      </Routes>
    </div>
  )
}

export default AppRouter
