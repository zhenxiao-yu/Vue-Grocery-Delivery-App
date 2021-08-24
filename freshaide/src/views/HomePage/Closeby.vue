<template>
  <!-- near by stores -->
  <div class="closeby">
    <h3 class="closeby__title">Stores Near Me</h3>
    <!-- store 1 -->
    <div
      class="closeby__item"
      v-for="item in closebyList"
      :key="item.id"
    >
      <img :src="item.img" class="closeby__item__image">
      <div class="closeby__content">
        <div class="closeby__content__title">{{item.name}}</div>
        <div class="closeby__content__tags">
          <span class="closeby__content__tag">Sales: {{item.sales}}+ </span>
          <span class="closeby__content__tag">${{item.deliveryFee}} delivery fee</span>
        </div>
        <div class="closeby__content__tags">
          <span class="closeby__content__tag">{{item.distance}} km away </span>
          <span class="closeby__content__tag">Google Rating: {{item.rating}} Stars</span>
        </div>
        <p class="closeby__content__vip">{{item.vip}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/req'

const useClosebyListEffect = () => {
  const closebyList = ref([])
  const getClosebyList = async () => {
    const returnData = await get('/api/shop/closeby-list')
    if (returnData?.errno === 0 && returnData?.data?.length) {
      closebyList.value = returnData.data
    }
  }
  return { closebyList, getClosebyList }
}

export default {
  name: 'Closeby',
  setup () {
    const { closebyList, getClosebyList } = useClosebyListEffect()
    getClosebyList()
    return { closebyList }
  }
}

</script>

<style lang="scss" scoped>
//import predefined scss files
@import "../../style/variables.scss";

.closeby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: nromal;
    font-family: $content-font;
    color: $content-font-color;
  }
  &__item {
    display: flex;
    padding: 0.12rem;
    &__image {
      margin: 0.16rem 0.20rem 0 0;
      top: 50%;
      height: 0.56rem;
      width: 0.56rem;
      border-radius: 50%;
      box-shadow: 0 0 0.015rem 0.015rem $content-highlight-color;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    border-bottom: 1px solid $content-border-color;
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      font-family: $content-font;
      color: $content-font-color;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      font-family: $content-font;
      color: $content-font-color;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__vip {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-highlight-color;
      font-family: $content-font;
    }
  }
}
</style>
