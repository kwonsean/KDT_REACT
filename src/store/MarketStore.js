import { action, makeObservable, observable } from 'mobx'

class MarketStore {
  itemList = [
    { id: 1, name: '새우깡', price: '1300' },
    { id: 2, name: '우유', price: '1000' },
    { id: 3, name: '허니버터칩', price: '1600' },
    { id: 4, name: '바나나킥', price: '1500' },
  ]
  constructor() {
    makeObservable(this, {
      itemList: observable,
      addBuy: action,
    })
  }

  addBuy = () => {
    console.log('addBuy')
  }
}

export default MarketStore
