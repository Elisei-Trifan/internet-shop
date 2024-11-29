import React from 'react'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Card, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import star from '../assets/star.png'
import { DEVICE_ROUTE } from '../utils/consts'

const DeviceItem = ({ device }) => {
  const navigate = useNavigate()
  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
    >
      <Card
        className="mt-2"
        style={{ width: 150, cursor: 'pointer' }}
        border="light"
      >
        <Image
          width={150}
          height={150}
          src={device.img}
          style={{ objectFit: 'cover' }}
        />
        <div className="text-black-50 d-flex justify-content-between align-items-center ">
          <div>Samsung...</div>
          <div className="  mt-1 d-flex justify-content-between align-items-center ">
            <div>{device.rating}</div>
            <Image src={star} width={18} height={18} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  )
}

export default DeviceItem
