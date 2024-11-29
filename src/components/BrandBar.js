import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import { Card, Row } from 'react-bootstrap'

const BrandBar = observer(() => {
  const { device } = useContext(Context)

  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          onClick={() => device.setSelectedBrand(brand)}
          key={brand.id}
          className="mt-2 me-2"
          style={{ width: '120px', cursor: 'pointer' }}
          border={brand.id === device.selectedBrand.id ? 'danger' : 'black'}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  )
})

export default BrandBar
