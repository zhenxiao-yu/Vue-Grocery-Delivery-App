import { useStore } from 'vuex'
// cart related method
export const useCommonCartEffect = () => {
  const store = useStore()
  const cartList = store.state.cartList
  const changeCartItem = (storeId, productId, productInfo, num) => {
    store.commit('changeCartItem', { storeId, productId, productInfo, num })
  }
  return { cartList, changeCartItem }
}
