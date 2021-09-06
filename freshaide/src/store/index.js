import { createStore } from 'vuex'

// store cart item info in local storage
const setLocalStorage = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocalStorage = () => {
  // { storeId: {storeName: ', productList: { productId:{}}} }
  try {
    return JSON.parse(localStorage.cartList) || {}
  } catch (e) {
    return {}
  }
}

export default createStore({
  state: {
    cartList: getLocalStorage()
  },
  mutations: {
    changeCartItem (state, payload) {
      const { storeId, productId, productInfo } = payload
      let storeInfo = state.cartList[storeId]
      if (!storeInfo) { storeInfo = { storeName: '', productList: {} } }
      let product = storeInfo.productList[productId]
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
      storeInfo.productList[productId] = product
      state.cartList[storeId] = storeInfo
      setLocalStorage(state)
    },
    // fetch and change the name of the store
    changeStoreName (state, payload) {
      const { storeId, storeName } = payload
      const storeInfo = state.cartList[storeId] || {
        storeName: '', productList: {}
      }
      storeInfo.storeName = storeName
      state.cartList[storeId] = storeInfo
      setLocalStorage(state)
    },
    // select/ deselect cart item
    toggleSelect (state, payload) {
      const { storeId, productId } = payload
      const product = state.cartList[storeId].productList[productId]
      product.select = !product.select
      setLocalStorage(state)
    },
    // clear local cart list
    clearCart (state, payload) {
      const { storeId } = payload
      state.cartList[storeId].productList = {}
      setLocalStorage(state)
    },
    // select all cart items
    selectAllCart (state, payload) {
      const { storeId } = payload
      const products = state.cartList[storeId].productList
      if (products) {
        for (const k in products) {
          const product = products[k]
          product.select = true
        }
      }
      setLocalStorage(state)
    },
    // empty cart list
    clearCartData (state, storeId) {
      state.cartList[storeId].productList = {}
    },
    // modify the list of address method
    changeAddressList (state, addressList) {
      state.addressList.splice(0, state.addressList.length, ...addressList)
    }
  }
})
