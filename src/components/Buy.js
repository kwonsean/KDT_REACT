import React from 'react'
import { Button, Col, Input, Label, Row } from 'reactstrap'

function Buy({ item, onClick }) {
  return (
    <Row>
      <Col sm='3'>
        <Label>제품명</Label>
        <Input value={item.name} readOnly />
      </Col>
      <Col sm='3'>
        <Label>가격</Label>
        <Input value={item.price} readOnly />
      </Col>
      <Col sm='3'>
        <Label>갯수</Label>
        <Input value={item.count} readOnly />
      </Col>
      <Col sm='3'>
        <Label>기능</Label>
        <Button
          style={{ display: 'block', width: '100%' }}
          value={item.name}
          onClick={onClick}
        >
          삭제
        </Button>
      </Col>
    </Row>
  )
}

export default Buy
