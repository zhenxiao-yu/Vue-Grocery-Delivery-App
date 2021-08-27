import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // first layer: store id
      // storeId: {
      // second layer: product id and amount
      //   productId: {
      //     id: '1',
      //     name: 'Bananas',
      //     img: 'https://assets.shop.loblaws.ca/products/20175355001/b1/en/front/20175355001_front_a01_@2.png',
      //     sales: 454,
      //     price: 1.45,
      //     org: 1.57,
      //     count: 3
      //   },
      // },
    }
  },
  mutations: {
    addItem (state, payload) {
      const { storeId, productId, productInfo } = payload
      console.log(storeId, productId, productInfo)
    }
  },
  actions: {
  },
  modules: {
  }
})
