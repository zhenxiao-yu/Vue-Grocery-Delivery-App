<template>
  <div class="wrapper">
    <div class="title">
      <div
        class="iconfont title__back"
        @click="handleBackClick"
      >&#xe743;</div>
      <div class="title__text">Manage Address</div>
      <div class="title__add" @click="handleAddClick">New</div>
    </div>
    <Address
      v-for="address in addressList"
      :key="address.id"
      :address="address"
      @click="() => handleUpdateClick(address.id)"
    />
  </div>
</template>

<script>
import Address from '../../components/Address'
import useCommonAddressEffect from '../../effects/addressEffect'

import { toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'MyAddressList',
  components: { Address },
  setup () {
    const store = useStore()
    const router = useRouter()
    const { addressList } = toRefs(store.state)
    const { getAddressList } = useCommonAddressEffect()
    getAddressList(true)
    // return to the previous page
    const handleBackClick = () => { router.back() }
    // redirect to add new address page
    const handleAddClick = () => { router.push({ name: 'UpsertAddress' }) }
    const handleUpdateClick = (addressId) => { router.push(`/upsertAddress/${addressId}`) }
    return { addressList, handleBackClick, handleAddClick, handleUpdateClick }
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
  background: $content-light-color;
}
.title {
  display: flex;
  line-height: .44rem;
  background: $content-bg-color;
  font-size: .16rem;
  color: $content-font-color;
  text-align: center;
  &__back {
    width: .2rem;
    margin-left: .18rem;
    font-size: .2rem;
    color: #B6B6B6;
  }
  &__text {
    flex: 1;
    text-align: center;
  }
  &__add {
    margin-right: .2rem;
    font-size: .14rem;
  }
}
</style>
