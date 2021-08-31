<template>
  <div class="cart">
    <div class="product">
      <template
        v-for="item in productList"
        :key="item.id"
      >
      <!-- hide cart if product amount is 0 -->
        <div class="product__item" v-if="item.count > 0">
          <img class="product__item__img" :src="item.img" />
          <div class="product__item__info">
            <h4 class="product__item__title">{{item.name}}</h4>
            <p class="product__item__price">
              <span class="product__item__cad">&#36;</span>{{item.price}}
              <span class="product__item__origin">&#36;{{item.org}}</span>
            </p>
          </div>
          <div class="product__number">
            <span
              class="product__number__minus"
              @click="() => { changeCartItem(storeId, item.id, item, -1) }"
            >-</span>
              {{item.count || 0}}
            <span
              class="product__number__plus"
              @click="() => { changeCartItem(storeId, item.id, item, 1) }"
            >+</span>
          </div>
        </div>
      </template>
    </div>
    <div class="checkout">
      <div class="checkout__icon">
        <span class="checkout__icon__img iconfont">&#xe67d;</span>
        <div class="checkout__icon__tag">{{total}}</div>
      </div>
      <div class="checkout__info">
        Total：<span class="checkout__info__price">&#36; {{price}}</span>
      </div>
      <div class="checkout__btn">Checkout</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from './commonCartEffect'

// get cart Info method
const useCartEffect = (storeId) => {
  const { changeCartItem } = useCommonCartEffect()
  const store = useStore()
  const cartList = store.state.cartList

  const total = computed(() => {
    const productList = cartList[storeId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += product.count
      }
    }
    return count
  })
  // compute product price
  const price = computed(() => {
    const productList = cartList[storeId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += (product.count * product.price)
      }
    }
    return count.toFixed(2)
  })

  // list of product in the shopping cart
  const productList = computed(() => {
    const productList = cartList[storeId] || []
    return productList
  })

  return { total, price, productList, changeCartItem }
}

export default {
  name: 'Cart',
  setup () {
    const myRoute = useRoute()
    const storeId = myRoute.params.id
    const { total, price, productList, changeCartItem } = useCartEffect(storeId)
    return { total, price, storeId, productList, changeCartItem }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import '../../style/mixins.scss';
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.product {
  overflow-y: scroll;
  flex: 1;
  background: #FFF;
  font-family: $content-font;
  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bg-color;
    &__info {
      overflow: hidden;
    }
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-font-color;
      @include ellipsis;
    }
    &__price {
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-highlight-color;
    }
    &__cad {
      font-size: .12rem;
    }
    &__origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: rgba(0, 0, 0, 0.35);
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: .12rem;
      &__minus, &__plus
       {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        line-height: .16rem;;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
      }
      &__minus {
        border: .01rem solid $content-highlight-color;
        color: $content-highlight-color;
        margin-right: .05rem;
      }
      &__plus {
        background: $content-highlight-color;
        color: $content-bg-color;
        margin-left: .05rem;
      }
    }
  }
}
.checkout {
  display: flex;
  height: .49rem;
  border-top: .01rem solid $content-bg-color;
  font-family: $content-font;
  line-height: .49rem;
  &__icon {
    position: relative;
    width: .84rem;
    &__img{
      display: block;
      margin: 0.01rem auto;
      width: .30rem;
      height: .28rem;
      font-size: 0.20rem;
      color: $content-highlight-color;
    }
    &__tag {
      position: absolute;
      left: .46rem;
      top: .04rem;
      padding: 0 .04rem;
      min-width: .2rem;
      height: .2rem;
      line-height: .2rem;
      background-color: $content-border-color;
      border-radius: .1rem;
      font-size: .12rem;
      text-align: center;
      color: $content-bg-color;
      transform: scale(.5);
      transform-origin: left center;
    }
  }
  &__info {
    flex: 1;
    color: $content-font-color;
    font-size: .13rem;
    &__price {
      line-height: .49rem;
      color: $content-highlight-color;
      font-size: .18rem;
    }
  }
  &__btn {
    width: .98rem;
    background-color: $content-highlight-color;
    text-align: center;
    color: $content-bg-color;
    font-size: .14rem;
  }
}
</style>
