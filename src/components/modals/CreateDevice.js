import React, { useContext, useState } from 'react'
import {
  Modal,
  Button,
  Form,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from 'react-bootstrap'
import { Context } from '../..'

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context)
  const [info, setInfo] = useState([])

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }])
  }
  const removeInfo = (number) => {
    setInfo(info.filter((item) => item.number !== number))
  }

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2">
            <DropdownToggle> Выберите тип</DropdownToggle>
            <DropdownMenu>
              {device.types.map((item) => (
                <DropdownItem key={item.id}>{item.name}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Dropdown className="mt-2">
            <DropdownToggle> Выберите бренд</DropdownToggle>
            <DropdownMenu>
              {device.brands.map((item) => (
                <DropdownItem key={item.id}>{item.name}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            placeholder="Введите название устройства"
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите стоимость устройства"
            type="number"
          />
          <Form.Control className="mt-3" type="file" />
          <hr />
          <Button onClick={addInfo} variant="outline-dark">
            Добавить новое свойство
          </Button>
          {info.map((item) => (
            <Row className="mt-3" key={item.number}>
              <Col md={4}>
                <Form.Control placeholder="Введите название свойства" />
              </Col>
              <Col md={4}>
                <Form.Control placeholder="Введите описание свойства" />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(item.number)}
                  variant="outline-danger"
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateDevice
