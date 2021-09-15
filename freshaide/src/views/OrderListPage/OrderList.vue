<template>
  <div class="container">
    <div class="title">My Orders</div>
    <div class="orders">
      <div
        class="order"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="order__title">
          {{item.storeName}}
          <span class="order__order-status">
            {{item.isCanceled ? 'Order Canceled' : 'Processing'}}
          </span>
        </div>
        <div class="order__card">
          <div class="order__card__item-images">
            <template
              v-for="(innerItem, innerIndex) in item.products"
              :key="innerIndex"
            >
              <img
                class="order__card__img"
                :src="innerItem.product.img"
                v-if="innerIndex <= 3"
              />
            </template>
          </div>
          <div class="order__card__summary">
            <div class="order__card__price">&#36;{{item.totalCost}}</div>
            <div class="order__card__count">Total {{item.itemCount}} Items</div>
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

// handle orderlist trelated logic
const useOrderListEffect = () => {
  const data = reactive({ list: [] })
  const getClosebyList = async () => {
    const returnData = await get('/api/order')
    if (returnData?.errno === 0 && returnData?.data?.length) {
      const orderList = returnData.data
      orderList.forEach((order) => {
        const products = order.products || []
        let totalCost = 0
        let itemCount = 0
        products.forEach((productItem) => {
          itemCount += (productItem?.orderSales || 0)
          totalCost += ((productItem?.product?.price * productItem?.orderSales) || 0)
        })
        order.totalCost = totalCost.toFixed(2)
        order.itemCount = itemCount
      })
      data.list = returnData.data
    }
  }
  getClosebyList()
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
.container {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  background: $content-bg-color;
}
.title {
  line-height: .44rem;
  background: $content-highlight-color;
  font-size: .16rem;
  color: $content-bg-color;
  font-family: $content-font;
  text-align: center;
}
.order {
  margin: .16rem .18rem;
  padding: .16rem;
  font-family: $content-font;
  background: #FFF;
  &__title {
    margin-bottom: .16rem;
    line-height: .22rem;
    font-size: .16rem;
    color: $content-font-color;
  }
  &__order-status {
    float: right;
    font-size: .12rem;
    color: rgba(0, 0, 0, 0.35);
  }
  &__card {
    display: flex;
    &__item-images {
      flex: 1;
    }
    &__img {
      width: .4rem;
      height: .4rem;
      margin-right: .12rem;
    }
    &__summary {
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
      display: block;
      line-height: .14rem;
      font-size: .10rem;
      color: $content-font-color;
      text-align: right;
    }
  }
}
</style>
