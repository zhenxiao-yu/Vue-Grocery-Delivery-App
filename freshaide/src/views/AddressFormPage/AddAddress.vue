<template>
  <div class="wrapper">
    <div class="title">
      <div
        class="iconfont title__back"
        @click="handleBackClick"
      >&#xe6f2;</div>
      <div class="title__text">
        {{addressId ? 'Edit Address': 'New Address'}}
      </div>
      <div class="title__save" @click="upsertAddress">Save</div>
    </div>
    <div class="form">
      <div class="form__item">
        <div class="form__item__label">City</div>
        <input class="form__item__content" placeholder="e.g. London" v-model="formData.city" />
      </div>
      <div class="form__item">
        <div class="form__item__label">District/Unit/School</div>
        <input class="form__item__content" placeholder="e.g. Western University" v-model="formData.department" />
      </div>
      <div class="form__item">
        <div class="form__item__label">Street</div>
        <input class="form__item__content" placeholder="e.g. 400 Eastcastle Pl" v-model="formData.houseNumber" />
      </div>
      <div class="form__item">
        <div class="form__item__label">Name</div>
        <input class="form__item__content" placeholder="e.g. John Doe" v-model="formData.name" />
      </div>
      <div class="form__item">
        <div class="form__item__label">Phone Number</div>
        <input class="form__item__content" placeholder="(xxx) xxx-xxxx" v-model="formData.phone" />
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { post, get, patch } from '../../utils/request'
import useCommonAddressEffect from '../../effects/addressEffect'

const useAddressEffect = () => {
  const store = useStore()
  const { addressList } = toRefs(store.state)
  const { getAddressList } = useCommonAddressEffect()
  getAddressList()
  return { addressList }
}

const useFormEffect = (addressId) => {
  const router = useRouter()
  const formData = reactive({
    city: '', department: '', houseNumber: '', name: '', phone: ''
  })
  const getAddressItem = async () => {
    const result = await get(`/api/user/address/${addressId}`)
    if (result?.errno === 0 && result?.data) {
      const { city, department, houseNumber, name, phone } = result.data;
      formData.city = city
      formData.department = department
      formData.houseNumber = houseNumber
      formData.name = name
      formData.phone = phone
    }
  }
  const upsertAddress = async () => {
    if(addressId) {
      const result = await patch(`/api/user/address/${addressId}`, {
        data: formData
      })
      if (result?.errno === 0) { router.back() }
    } else {
      const result = await post('/api/user/address', {
        data: formData
      })
      if (result?.errno === 0) { router.back() }
    }
  }
  if (addressId) { getAddressItem() }
  return { formData, upsertAddress }
}

export default {
  name: 'MyAddressList',
  setup () {
    const router = useRouter()
    const route = useRoute()
    const addressId = route?.params?.id
    const { addressList } = useAddressEffect()
    const { formData, upsertAddress } = useFormEffect(addressId)
    const handleBackClick = () => { router.back() }
    return { addressId, addressList, formData, handleBackClick, upsertAddress }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
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
  display: flex;
  line-height: .44rem;
  background: $bgColor;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
  &__back {
    width: .2rem;
    margin-left: .18rem;
    font-size: .2rem;
    color: $search-fontColor;
  }
  &__text {
    flex: 1;
    text-align: center;
  }
  &__save {
    margin-right: .2rem;
    font-size: .14rem;
  }
}
.form {
  padding: 0 .2rem;
  margin-top: .12rem;
  background: $bgColor;
  border-top: .01rem solid $content-bgColor;
  border-bottom: .01rem solid $content-bgColor;
  &__item {
    display: flex;
    padding: .12rem 0;
    line-height: .2rem;
    font-size: .14rem;
    border-bottom: .01rem solid $content-bgColor;
    &:last-of-type {
      border-bottom: none;
    }
    &__label {
      margin-right: .05rem;
      color: $medium-fontColor;
    }
    &__content {
      flex: 1;
      border: none;
      outline: none;
      color: #3F3F3F;
      &::placeholder {
        color: #3F3F3F;
      }
    }
  }
}
</style>