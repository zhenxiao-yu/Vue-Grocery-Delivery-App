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
    changeCartItem (state, payload) {
      const { storeId, productId, productInfo } = payload
      let storeInfo = state.cartList[storeId]
      if (!storeInfo) { storeInfo = {} }
      let product = storeInfo[productId]
      if (!product) {
        // if item does not exist, set product info
        product = productInfo
        product.count = 0
      }
      // change item amount
      product.count = product.count + payload.num
      if (payload.num > 0) { product.select = true }
      // limit delete item number (can't be negative)
      if (product.count < 0) { product.count = 0 }
      // limit add item number (can't be more than 99)
      if (product.count > 99) { product.count = 99 }
      storeInfo[productId] = product
      state.cartList[storeId] = storeInfo
    },
    toggleSelect (state, payload) {
      const { storeId, productId } = payload
      const product = state.cartList[storeId][productId]
      product.select = !product.select
    }
  },
  actions: {
  },
  modules: {
  }
})
