import React from 'react'
import { Container, Form, FormControl } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

const Auth = () => {
  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 54 }}
      >
        <Card style={{ width: '600px' }} className="p-5">
          <h2 className="m-auto">Авторизация</h2>
          <Form className=" d-flex flex-column">
            <FormControl className="mt-2" placeholder="Введите ваш email..." />
            <FormControl className="mt-2" placeholder="Введите ваш пароль..." />
          </Form>
        </Card>
      </Container>
    </div>
  )
}

export default Auth
