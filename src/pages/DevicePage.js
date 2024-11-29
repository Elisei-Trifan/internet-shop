import React from 'react'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Card, Row, Container } from 'react-bootstrap'
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
  const device = {
    id: 4,
    name: 'Iphone 12 pro',
    price: 25000,
    rating: 5,
    img: 'https://images.unsplash.com/photo-1598618826732-fb2fdf367775?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
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
          <Row className="d-flex flex-column align-items-center justify-content-between">
            <h2> {device.name} </h2>
            <div
              className="d-flex justify-content-between align-items-center"
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
        <Col md={4}></Col>
      </Row>
    </Container>
  )
}

export default DevicePage
