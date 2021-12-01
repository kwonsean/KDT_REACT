import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import Item from './Item'

function ItemList() {
  const itemList = [
    { name: '새우깡', price: '1300' },
    { name: '우유', price: '1000' },
    { name: '허니버터칩', price: '1600' },
    { name: '바나나킥', price: '1500' },
  ]
  return (
    <div>
      <Card>
        <CardHeader>
          <h3>상품목록</h3>
        </CardHeader>
        <CardBody>
          {itemList.map((item) => {
            return <Item item={item} />
          })}
        </CardBody>
      </Card>
    </div>
  )
}

export default ItemList
