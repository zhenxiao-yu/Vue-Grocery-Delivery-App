import { useStore } from 'vuex'
import { toRefs } from 'vue'
// cart related method
export const useCommonCartEffect = () => {
  const store = useStore()
  const { cartList } = toRefs(store.state)
  const changeCartItem = (storeId, productId, productInfo, num) => {
    store.commit('changeCartItem', { storeId, productId, productInfo, num })
    console.log(storeId, productId, productInfo, num)
  }
  return { cartList, changeCartItem }
}
