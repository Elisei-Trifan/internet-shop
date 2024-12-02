/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Context } from '..'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

const NavBar = observer(() => {
  const { user } = useContext(Context)
  const navigate = useNavigate()

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          Купи Девайс
        </NavLink>
        {user.isAuth ? (
          <Nav style={{ color: 'white' }} className="ml-auto">
            <Button
              onClick={() => navigate(ADMIN_ROUTE)}
              variant={'outline-light'}
            >
              Админ панель
            </Button>
            <Button
              onClick={() => navigate(LOGIN_ROUTE)}
              variant={'outline-light'}
              className="ms-2"
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav style={{ color: 'white' }} className="ms-auto">
            <Button
              variant={'outline-light'}
              onClick={() => user.setIsAuth(true)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
})

export default NavBar
