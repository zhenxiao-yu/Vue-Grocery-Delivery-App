<template>
    <div class="delivery">
      <div class="delivery__header">
        <div
          class="iconfont delivery__header__back"
          @click="handleReturnClick"
        >&#xe743;</div>
        Order Confirmation
      </div>
      <div class="delivery__profile">
        <div class="delivery__profile__title">Delivery Information</div>
        <div v-if="address" @click="handleAddressClick">
          <div class="delivery__profile__address">
            {{address.city}}{{address.department}}{{address.houseNumber}}
          </div>
          <div class="delivery__profile__info">
            <span class="delivery__profile__info__name">{{address.name}}</span>
            <span class="delivery__profile__info__name">{{address.phone}}</span>
          </div>
          <div class="iconfont delivery__profile__icon">&#xe743;</div>
        </div>
        <div v-else>
          <div class="top__receiver__address">
           No Available Address
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import useAddressEffect from './addressEffect'

export default {
  name: 'HeaderArea',
  setup () {
    const myRouter = useRouter()
    const myRoute = useRoute()
    const storeId = myRoute.params.id
    const handleReturnClick = () => { myRouter.back() }
    const handleAddressClick = () => { myRouter.push(`/ChooseAddressPage/${storeId}`) }
    const address = useAddressEffect()
    return { handleReturnClick, handleAddressClick, address }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import '../../style/mixins.scss';

.delivery {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, $content-highlight-color 50%);
  background-repeat: no-repeat;
  &__header {
    position: relative;
    padding-top: .26rem;
    line-height: .24rem;
    color: #FFF;
    text-align: center;
    font-size: .16rem;
    &__back {
      position: absolute;
      left: .18rem;
      font-size: .22rem;
    }
  }
  &__profile {
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: #FFF;
    border-radius: .04rem;
    &__title {
      line-height: 0.22rem;
      padding: 0.16rem 0 0.14rem 0.16rem;
      font-size: 0.16rem;
      color: $content-font-color;
    }
    &__address {
      line-height: .2rem;
      padding: 0 .4rem 0 .16rem;
      font-size: .14rem;
      color: $content-font-color;
    }
    &__info {
      padding: .06rem 0 0 .16rem;
      &__name {
        margin-right: .06rem;
        line-height: .18rem;
        font-size: .12rem;
        color: #666;
      }
    }
    &__icon {
      transform: rotate(180deg);
      position: absolute;
      right: .16rem;
      top: .5rem;
      color: #666;
      font-size: .2rem;
    }
  }
}
</style>
