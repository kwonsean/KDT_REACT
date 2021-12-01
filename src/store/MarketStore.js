import { action, computed, makeObservable, observable } from 'mobx'

class MarketStore {
  itemList = [
    { id: 1, name: '새우깡', price: '1300', count: 0 },
    { id: 2, name: '우유', price: '1000', count: 0 },
    { id: 3, name: '허니버터칩', price: '1600', count: 0 },
    { id: 4, name: '바나나킥', price: '1500', count: 0 },
  ]
  buyList = []
  constructor() {
    makeObservable(this, {
      itemList: observable,
      buyList: observable,
      addBuy: action,
      removeBuy: action,
      total: computed,
    })
  }

  addBuy = (event) => {
    const buyName = event.target.value
    let foundItemIndex = -1
    let foundItemIndexInBuyList = -1
    this.itemList.forEach((item, index) => {
      if (item.name === buyName) foundItemIndex = index
    })

    // 이미 buyList에 담겨있는 요소라면 => (count가 1이상일 것이다!) 그 요소를 찾아 count만 올려주고
    // 담겨있지 않다면 count += 1 해주고 요소를 새로 push해준다.
    if (this.itemList[foundItemIndex].count > 0) {
      this.buyList.forEach((item, index) => {
        if (item.name === buyName) foundItemIndexInBuyList = index
      })
      this.buyList[foundItemIndexInBuyList].count += 1
    } else {
      this.buyList.push({
        ...this.itemList[foundItemIndex],
        count: (this.itemList[foundItemIndex].count += 1),
      })
    }
    // console.log(this.itemList)
    // console.log('addBuy', event.target.value)
  }

  removeBuy = (event) => {
    const buyName = event.target.value
    this.buyList = this.buyList.filter((buy) => {
      if (buy.name !== buyName) {
        return true
      } else {
        this.itemList.forEach((item) => {
          if (item.name === buy.name) {
            item.count = 0
          }
        })
        return false
      }
    })
    // console.log('remove!', buyName)
    // console.log(this.buyList)
  }

  get total() {
    if (this.buyList.length === 0) return 0
    return this.buyList
      .map((item) => item.price * item.count)
      .reduce((a, b) => a + b)
  }
}

export default MarketStore
