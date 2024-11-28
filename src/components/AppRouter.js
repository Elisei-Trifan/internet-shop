/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import Shop from '../pages/Shop'
import { Context } from '../index'

const AppRouter = () => {
  const { user } = useContext(Context)

  console.log(user)

  return (
    <div>
      <Routes>
        {user.isAuth === true &&
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
