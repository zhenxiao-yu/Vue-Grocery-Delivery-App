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
    const productList = cartList[storeId]?.productList || []
    return productList
  })

  const storeName = computed(() => {
    const storeName = cartList[storeId]?.storeName || ''
    return storeName
  })
  return { cartList, storeName, productList, changeCartItem }
}
