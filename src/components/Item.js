import React from 'react'
import { Col, Input, Label, Row } from 'reactstrap'

function Item({ item, onClick }) {
  return (
    <Row>
      <Col sm='4'>
        <Label>제품명</Label>
        <Input value={item.name} readOnly />
      </Col>
      <Col sm='4'>
        <Label>가격</Label>
        <Input value={item.price} readOnly />
      </Col>
      <Col sm='4'>
        <Label>기능</Label>
        <Input type='button' value='담기' onClick={onClick} />
      </Col>
    </Row>
  )
}

export default Item
