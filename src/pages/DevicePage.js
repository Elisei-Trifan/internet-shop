import React from 'react'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Card, Row, Container, Button } from 'react-bootstrap'
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
  const device = {
    id: 4,
    name: 'Iphone 12 pro',
    price: 25000,
    rating: 5,
    img: 'https://images.unsplash.com/photo-1598618826732-fb2fdf367775?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }

  const description = [
    { id: 1, title: 'Оперативная память', description: '5 гб' },
    { id: 2, title: 'Камера', description: '50 Мгпх' },
    { id: 3, title: 'Батарея', description: '10 000' },
    { id: 4, title: 'Экран', description: 'Большой' },
  ]

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={device.img}
            style={{ objectFit: 'cover' }}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center ">
            <h2 className="text-center"> {device.name} </h2>
            <div
              className="d-flex  align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              border: '5px solid lightgrey',
              fontSize: 32,
            }}
          >
            <h3>От: {device.price} руб.</h3>
            <Button variant="outline-dark">Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {description.map((item, index) => (
          <Row
            key={item.id}
            style={{
              background: index % 2 === 0 ? 'lightgrey' : 'transparent',
              padding: 10,
            }}
          >
            {item.title}: {item.description}
          </Row>
        ))}
      </Row>
    </Container>
  )
}

export default DevicePage
