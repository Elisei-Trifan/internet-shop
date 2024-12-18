import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import { Card, Row } from 'react-bootstrap'

import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
  const { device } = useContext(Context)
  return (
    <Row className="d-flex">
      {device.devices.map((item) => (
        <DeviceItem key={item.id} device={item} />
      ))}
    </Row>
  )
})

export default DeviceList
