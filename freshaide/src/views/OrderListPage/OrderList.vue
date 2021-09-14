<template>
  <div class="wrapper">
    <div class="title">My Orders</div>
    <div class="orders">
      <div
        class="order"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="order__title">
          {{item.storeName}}
          <span class="order__status">
            {{item.isCanceled ? 'Order Canceled' : 'Order Accepted'}}
          </span>
        </div>
        <div class="order__content">
          <div class="order__content__imgs">
            <template
              v-for="(innerItem, innerIndex) in item.products"
              :key="innerIndex"
            >
              <img
                class="order__content__img"
                :src="innerItem.product.img"
                v-if="innerIndex <= 3"
              />
            </template>
          </div>
          <div class="order__content__info">
            <div class="order__content__price">&#36; {{item.totalPrice}}</div>
            <div class="order__content__count">Total {{item.totalNumber}} Items</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Dock :currentIndex="2"/>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/req'
import Dock from '../../views/HomePage/Dock.vue'

// handle orderlist logic
const useOrderListEffect = () => {
  const data = reactive({ list: [] })
  const getNearbyList = async () => {
    const result = await get('/api/order')
    if (result?.errno === 0 && result?.data?.length) {
      const orderList = result.data
      orderList.forEach((order) => {
        const products = order.products || []
        let totalPrice = 0
        let totalNumber = 0
        products.forEach((productItem) => {
          totalNumber += (productItem?.orderSales || 0)
          totalPrice += ((productItem?.product?.price * productItem?.orderSales) || 0)
        })
        order.totalPrice = totalPrice
        order.totalNumber = totalNumber
      })
      data.list = result.data
    }
  }
  getNearbyList()
  const { list } = toRefs(data)
  return { list }
}

export default {
  name: 'OrderList',
  components: { Dock },
  setup () {
    const { list } = useOrderListEffect()
    return { list }
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
  bottom: .5rem;
  right: 0;
  background: $content-light-color;
}
.title {
  line-height: .44rem;
  background: $content-bg-color;
  font-size: .16rem;
  color: $content-font-color;
  text-align: center;
}
.order {
  margin: .16rem .18rem;
  padding: .16rem;
  background: $content-bg-color;
  &__title {
    margin-bottom: .16rem;
    line-height: .22rem;
    font-size: .16rem;
    color: $content-font-color;
  }
  &__status {
    float: right;
    font-size: .14rem;
    color: $content-light-color;
  }
  &__content {
    display: flex;
    &__imgs {
      flex: 1;
    }
    &__img {
      width: .4rem;
      height: .4rem;
      margin-right: .12rem;
    }
    &__info {
      width: .7rem;
    }
    &__price {
      margin-bottom: .04rem;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-highlight-color;
      text-align: right;
    }
    &__count {
      line-height: .14rem;
      font-size: .12rem;
      color: $content-font-color;
      text-align: right;
    }
  }
}
</style>
