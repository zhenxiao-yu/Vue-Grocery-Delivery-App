import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {}
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
    changeStoreName (state, payload) {
      const { storeId, storeName } = payload
      const storeInfo = state.cartList[storeId] || {
        storeName: '', productList: {}
      }
      storeInfo.storeName = storeName
      state.cartList[storeId] = storeInfo
    },
    toggleSelect (state, payload) {
      const { storeId, productId } = payload
      const product = state.cartList[storeId][productId]
      product.select = !product.select
    },
    clearCart (state, payload) {
      const { storeId } = payload
      state.cartList[storeId] = {}
    },
    selectAllCart (state, payload) {
      const { storeId } = payload
      const products = state.cartList[storeId]
      if (products) {
        for (const k in products) {
          const product = products[k]
          product.select = true
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
