<template>
  <div class="wrapper">
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
        <div class="delivery__profile__address">400 Eastcastle Pl</div>
        <div class="delivery__profile__info">
          <span class="delivery__profile__info__name">ZhenXiao (Mark) Yu</span>
          <span class="delivery__profile__info__name">(306)581-5556</span>
        </div>
        <div class="iconfont delivery__profile__icon">&#xe743;</div>
      </div>
    </div>
    <div class="products">
      <div class="products__title">
        {{storeName}}
      </div>
      <div class="products__wrapper">
        <div class="products__list">
          <template
            v-for="item in productList"
            :key="item.id"
          >
          <div v-if="item.count > 0" class="products__item">
            <img class="products__item__img" :src="item.img" />
            <div class="products__item__info">
              <h4 class="products__item__title">{{item.name}}</h4>
              <p class="products__item__price">
                <span>
                  <span class="products__item__cad">&#36; </span>
                  {{item.price}} x {{item.count}}
                </span>
                <span class="products__item__total">
                  <span class="products__item__cad">&#36; </span>
                  {{(item.price * item.count).toFixed(2)}}
                </span>
              </p>
            </div>
          </div>
          </template>
        </div>
      </div>
    </div>
    <div class="order">
        <div class="order__total-price">Order Total: <b> &#36;{{myCalculator.price}} </b> </div>
        <div class="order__btn">Confirm</div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
export default {
  name: 'OrderConfirmation',
  setup () {
    const myRouter = useRouter()
    const route = useRoute()
    const storeId = route.params.id
    const { storeName, productList, myCalculator } = useCommonCartEffect(storeId)
    const handleReturnClick = () => { myRouter.back() }
    return { storeName, productList, myCalculator, handleReturnClick }
  }
}
</script>

<style lang="scss" scoped>
//import predefined scss files
@import "../../style/variables.scss";
@import '../../style/mixins.scss';
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
   overflow-y:scroll;
  color: $content-font-color;
  font-family: $content-font;
}
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
.products {
  margin: .16rem .18rem .1rem .18rem;
  background: #FFF;
  &__title {
    padding: 0.16rem;
    font-size: .16rem;
    color: $content-font-color;
  }
  &__wrapper {
    overflow-y: scroll;
    margin: 0 0.18rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.6rem;
    top: 2.6rem;
  }
  &__list {
    background: #FFF;
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0 0.16rem 0.16rem 0.16rem;
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__info {
      flex: 1;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-font-color;
      @include ellipsis;
    }
    &__price {
      display: flex;
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-highlight-color;
    }
    &__total {
      flex: 1;
      text-align: right;
      color: $content-font-color;
    }
    &__cad {
      font-size: .12rem;
    }
  }
}

.order {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 0.49 rem;
  line-height: 0.49rem;
  background: #fff;
  &__total-price {
    flex: 1;
    text-indent: 0.24rem;
    font-size: 0.14rem;
    color: $content-font-color;
  }
  &__btn {
    width: 0.98rem;
    background-color: $content-highlight-color;
    color: $content-bg-color;
    text-align: center;
    font-size: 0.14rem;
  }
}

</style>
