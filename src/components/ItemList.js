import React, { useEffect } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import Item from './Item'
import { observer } from 'mobx-react'

const ItemList = observer(({ marketstore }) => {
  // const itemList = [
  //   { id: 1, name: '새우깡', price: '1300' },
  //   { id: 2, name: '우유', price: '1000' },
  //   { id: 3, name: '허니버터칩', price: '1600' },
  //   { id: 4, name: '바나나킥', price: '1500' },
  // ]
  console.log(marketstore)
  return (
    <div>
      <Card>
        <CardHeader>
          <h3>상품목록</h3>
        </CardHeader>
        <CardBody>
          {marketstore.itemList.map((item) => {
            return (
              <Item item={item} key={item.id} onClick={marketstore.addBuy} />
            )
          })}
        </CardBody>
      </Card>
    </div>
  )
})

export default ItemList
