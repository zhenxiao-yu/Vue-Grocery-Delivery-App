import { computed } from 'vue'
import { useStore } from 'vuex'
// cart related method
export const useCommonCartEffect = (storeId) => {
  const store = useStore()
  const cartList = store.state.cartList
  const changeCartItem = (storeId, productId, productInfo, num) => {
    store.commit('changeCartItem', { storeId, productId, productInfo, num })
  }
  // list of product in the shopping cart
  const productList = computed(() => {
    const productList = cartList[storeId]?.productList || {}
    // list of items that are not empty
    const notZeroProductList = {}
    for (const i in productList) {
      const product = productList[i]
      if (product.count > 0) {
        notZeroProductList[i] = product
      }
    }
    return notZeroProductList
  })

  const storeName = computed(() => {
    const storeName = cartList[storeId]?.storeName || ''
    return storeName
  })

  const myCalculator = computed(() => {
    const productList = cartList[storeId]?.productList
    const result = { total: 0, price: 0, selectAll: true }
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        result.total += product.count
        if (product.select) {
          result.price += (product.count * product.price)
        }
        if (product.count > 0 && !product.select) {
          result.selectAll = false
        }
      }
    }
    result.price = result.price.toFixed(2)
    return result
  })

  return { cartList, storeName, productList, changeCartItem, myCalculator }
}
