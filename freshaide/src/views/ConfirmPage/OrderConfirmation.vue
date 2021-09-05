<template>
  <div class="wrapper">
    <HeaderArea />
    <OrderList />
    <div class="order">
        <div class="order__total-price">Order Total: <b> &#36;{{myCalculator.price}} </b> </div>
        <div class="order__btn">Confirm</div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
import HeaderArea from './HeaderArea'
import OrderList from './OrderList'

export default {
  name: 'OrderConfirmation',
  components: { HeaderArea, OrderList },
  setup () {
    const route = useRoute()
    const storeId = route.params.id
    const { storeName, productList, myCalculator } = useCommonCartEffect(storeId)
    return { storeName, productList, myCalculator }
  }
}
</script>

<style lang="scss" scoped>
//import predefined scss files
@import "../../style/variables.scss";

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
