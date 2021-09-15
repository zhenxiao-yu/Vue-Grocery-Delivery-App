<template>
  <div class="wrapper">
    <div class="title">
      <div
        class="iconfont title__icon"
        @click="handleReturnClick"
      >&#xe743;</div>
      Delivery Address
    </div>
    <Address
      v-for="address in addressList"
      :key="address.id"
      :address="address"
      @click="() => handleAddressClick(address.id)"
    />
  </div>
</template>

<script>
import Address from '../../components/Address'
import useCommonAddressEffect from '../../effects/addressEffect'

import { toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'ChooseAddress',
  components: { Address },
  setup () {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const storeId = route.params.shopId
    const { addressList } = toRefs(store.state)
    const { getAddressList } = useCommonAddressEffect()
    getAddressList()
    const handleReturnClick = () => { router.back() }
    const handleAddressClick = (id) => {
      router.push(`/ConfirmPage/${storeId}/${id}`)
    }
    return { addressList, handleReturnClick, handleAddressClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: $dark-bgColor;
}
.title {
  position: relative;
  line-height: .44rem;
  background: $bgColor;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
  &__icon {
    position: absolute;
    left: .18rem;
    top: 0;
    font-size: .2rem;
  }
}
</style>
