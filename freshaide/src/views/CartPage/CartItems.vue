<template>
  <div class="wrapper">
    <div class="title">My Current Cart Items</div>
    <div class="shops">
      <div
        class="empty"
        v-if="Object.keys(cartListWithProducts).length === 0"
      >Cart is Empty</div>
      <div
        class="shop"
        v-for="(item, index) in cartListWithProducts"
        :key="index"
      >
        <div class="shop__title">
          <span class="iconfont shop__title__icon"> &#xe76f; </span>
          {{item.storeName}}
        </div>
        <div class="products">
          <div class="products__list">
            <template
              v-for="product in item.productList"
              :key="product.id"
            >
              <div
                v-if="product.count > 0"
                class="products__item"
              >
                <img class="products__item__img" :src="product.img" />
                <div class="products__item__detail">
                  <h4 class="products__item__title">{{product.name}}</h4>
                  <p class="products__item__price">
                    <span>
                      <span class="products__item__cad">&#36; </span>
                      {{product.price}} x {{product.count}}
                    </span>
                    <span class="products__item__total">
                      <span class="products__item__cad">&#36; </span>
                      {{(product.price * product.count).toFixed(2)}}
                    </span>
                  </p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Dock :currentIndex="1"/>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Dock from '../HomePage/Dock.vue'

const useCartEffect = () => {
  const myStore = useStore()
  const cartList = myStore.state.cartList

  const cartListWithProducts = computed(() => {
    const newCartList = {}
    for (const storeId in cartList) {
      let total = 0
      const products = cartList[storeId].productList
      for (const productId in products) {
        const product = products[productId]
        total += (product.count || 0)
      }
      if (total > 0) {
        newCartList[storeId] = cartList[storeId]
      }
    }
    return newCartList
  })

  return { cartListWithProducts }
}
export default {
  name: 'CartList',
  components: { Dock },
  setup () {
    const { cartListWithProducts } = useCartEffect()
    return { cartListWithProducts }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import '../../style/mixins.scss';
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  background: $content-bg-color;
}
.title {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  line-height: .44rem;
  background: $content-highlight-color;
  font-size: .16rem;
  color: $content-bg-color;
  font-family: $content-font;
  text-align: center;
}
.empty {
  line-height: .44rem;
  color: $content-font-color;
  font-family: $content-font;
  font-size: .16rem;
  text-align: center;
}
.shops {
  overflow-y: scroll;
  position: absolute;
  top: .6rem;
  right: .18rem;
  bottom: .1rem;
  left: .18rem;
  background: #fff;
}
.shop {
  font-family: $content-font;
  &__title {
    display: flex;
    padding: .16rem;
    font-size: .16rem;
    color: $content-font-color;
    align-items: center;
    &__icon{
      font-size: .20rem;
      margin-right: 0.05rem;
    }
  }
  &__wrapper {
    overflow-y: scroll;
    margin: 0 .18rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: .6rem;
    top: 2.6rem;
  }
}
.products {
  &__list {
    background: #fff;
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0 .16rem 0.16rem .16rem;
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__detail {
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
</style>
