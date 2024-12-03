import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateType from '../components/modals/CreateType'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'

const Admin = () => {
  const [brandVisible, setBrandVisisble] = useState(false)
  const [typeVisible, setTypeVisisble] = useState(false)
  const [deviceVisible, setDeviceVisisble] = useState(false)

  return (
    <Container className="d-flex flex-column">
      <Button
        onClick={() => setTypeVisisble(true)}
        variant="outline-dark"
        className="mt-4 p-2"
      >
        Добавить тип
      </Button>
      <Button
        onClick={() => setBrandVisisble(true)}
        variant="outline-dark"
        className="mt-4 p-2"
      >
        Добавить бренд
      </Button>
      <Button
        onClick={() => setDeviceVisisble(true)}
        variant="outline-dark"
        className="mt-4 p-2"
      >
        Добавить устройство
      </Button>
      <CreateType show={typeVisible} onHide={() => setTypeVisisble(false)} />
      <CreateBrand show={brandVisible} onHide={() => setBrandVisisble(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisisble(false)}
      />
    </Container>
  )
}

export default Admin
