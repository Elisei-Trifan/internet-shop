import React from 'react'
import { Button, Container, Form, FormControl } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 54 }}
      >
        <Card style={{ width: '600px' }} className="p-5">
          <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
          <Form className=" d-flex flex-column">
            <FormControl className="mt-3" placeholder="Введите ваш email..." />
            <FormControl className="mt-3" placeholder="Введите ваш пароль..." />

            <Row className="d-flex  justify-content-between align-items-center mt-3 ps-3 pe-3">
              <Col>
                {isLogin ? (
                  <div>
                    Нет аккаунта?{' '}
                    <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                  </div>
                ) : (
                  <div>
                    Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                  </div>
                )}
              </Col>
              <Col xs="auto">
                <Button className="mt-0 " variant="outline-success">
                  {isLogin ? 'Войти' : 'Регистрация'}
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
    </div>
  )
}

export default Auth
