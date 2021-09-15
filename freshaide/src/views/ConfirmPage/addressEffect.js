import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

// address related logic
const useAddressEffect = () => {
  const route = useRoute()
  const addressId = route.params.addressId
  const currentAddress = computed(() => {
    const store = useStore()
    const addressList = store.state.addressList
    return addressList.find(item => item.id === addressId) || addressList[0]
  })
  return currentAddress
}

export default useAddressEffect
