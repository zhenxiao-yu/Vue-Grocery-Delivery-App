<template>
    <div class="store">
      <img :src="item.img" class="store__image">
      <div class="store__content">
        <div class="store__content__title">{{item.name}}</div>
        <div class="store__content__tags">
          <span class="store__content__tag">Sales: {{item.sales}}+ </span>
          <span class="store__content__tag">${{item.deliveryFee}} delivery fee</span>
        </div>
        <div class="store__content__tags">
          <span class="store__content__tag">{{item.distance}} km away </span>
          <span class="store__content__tag">Google Rating: {{item.rating}} Stars</span>
        </div>
        <p class="store__content__vip">{{item.vip}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'StoreInfo',
  props: ['item']
}
</script>

<style lang="scss" scoped>
//import predefined scss files
@import "../style/variables";

.store {
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
