<template>
  <div class="overlay" v-if="showCart" @click="handleCartShow"/>
  <div class="cart">
    <div class="product" v-if="showCart">
      <div class="product__controller">
        <div class="product__controller__all" @click="() => selectAllCart(storeId)">
          <span
            class="product__controller__icon iconfont"
            v-html="selectAll ? '&#xe78d;':'&#xe767;'"
          >
          </span>
          Select All
        </div>
        <div class="product__controller__clear">
          <span class="product__controller__clear__area" @click ="() => clearCart(storeId)">Clear</span>
        </div>
      </div>
      <template
        v-for="item in productList"
        :key="item.id"
      >
      <!-- hide cart if product amount is 0 -->
        <div class="product__item" v-if="item.count > 0">
          <div
            class="product__item__select iconfont"
            v-html="item.select ? '&#xe78d;':'&#xe767;'"
            @click="toggleSelect(storeId, item.id)"
          />
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
        <span class="checkout__icon__img iconfont" @click="handleCartShow">&#xe67d;</span>
        <div class="checkout__icon__tag">{{total}}</div>
      </div>
      <div class="checkout__info">
        Total：<span class="checkout__info__price">&#36; {{price}}</span>
      </div>
      <div class="checkout__btn">
        <router-link :to="{name: 'Home'}">
        Checkout
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from './commonCartEffect'

// get cart info method
const useCartEffect = (storeId) => {
  const { changeCartItem } = useCommonCartEffect()
  const store = useStore()
  const cartList = store.state.cartList

  const total = computed(() => {
    const productList = cartList[storeId]?.productList
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
    const productList = cartList[storeId]?.productList
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        if (product.select) {
          count += (product.count * product.price)
        }
      }
    }
    return count.toFixed(2)
  })

  // select all
  const selectAll = computed(() => {
    const productList = cartList[storeId]?.productList
    let result = true
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        if (product.count > 0 && !product.select) {
          result = false
        }
      }
    }
    return result
  })

  // list of product in the shopping cart
  const productList = computed(() => {
    const productList = cartList[storeId]?.productList || []
    return productList
  })

  // commit select cart item
  const toggleSelect = (storeId, productId) => {
    store.commit('toggleSelect', { storeId, productId })
  }

  // commit clear cart item list
  const clearCart = (storeId) => {
    store.commit('clearCart', { storeId })
  }

  // commit select all cart items
  const selectAllCart = (storeId) => {
    store.commit('selectAllCart', { storeId })
  }

  return { total, price, productList, changeCartItem, toggleSelect, clearCart, selectAll, selectAllCart }
}

// show and hide shopping cart method
const toggleCartEffect = () => {
  const showCart = ref(false)
  const handleCartShow = () => {
    showCart.value = !showCart.value
  }
  return { showCart, handleCartShow }
}

export default {
  name: 'Cart',
  setup () {
    const myRoute = useRoute()
    const storeId = myRoute.params.id
    const { total, price, productList, changeCartItem, toggleSelect, clearCart, selectAll, selectAllCart } = useCartEffect(storeId)
    const { showCart, handleCartShow } = toggleCartEffect()
    return { total, price, storeId, productList, changeCartItem, toggleSelect, clearCart, selectAll, selectAllCart, showCart, handleCartShow }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import '../../style/mixins.scss';
.overlay {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: #fff;
}
.product {
  overflow-y: scroll;
  flex: 1;
  background: #fff;
  font-family: $content-font;
  &__controller {
    display: flex;
    line-height: 0.35rem;
    font-size: 0.14rem;
    color: $content-font-color;
    border-bottom: .01rem solid $content-border-color;
    &__clear {
      flex: 1;
      margin-right: 0.16rem;
      text-align: right;
      &__area {
        display: inline-block;
      }
    }
    &__all{
      width: 1rem;
      margin: 0px 0px 0px 16px;
    }
    &__icon{
      display: inline-block;
      vertical-align: top;
      color: $content-highlight-color;
      font-size: 0.2rem;
      margin-right: 0.05rem;
    }
  }

  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bg-color;

    &__select {
      line-height: 0.5rem;
      margin-right: 0.2rem;
      color: $content-highlight-color;
      font-size: 0.2rem;
    }

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
      bottom: .26rem;
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
    a {
      color: $content-bg-color;
      text-decoration: none;
    }
  }
}
</style>
