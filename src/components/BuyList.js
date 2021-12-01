import React from 'react'
import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap'
import { observer } from 'mobx-react'
import Buy from './Buy'

const BuyList = observer(({ marketstore }) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <h3>장바구니</h3>
        </CardHeader>
        <CardBody>
          {marketstore.buyList.map((item) => {
            return (
              <Buy item={item} key={item.id} onClick={marketstore.removeBuy} />
            )
          })}
        </CardBody>
        <CardFooter>Total:{marketstore.total}</CardFooter>
      </Card>
    </div>
  )
})

export default BuyList
