<template>
  <!-- near by stores -->
  <div class="closeby">
    <h3 class="closeby__title">Stores Near Me</h3>
    <!-- store 1 -->
    <div
      class="closeby__item"
      v-for="item in closeByList"
      :key="item.id"
    >
      <img class="closeby__item__image" :src="item.img">
      <div class="closeby__content">
        <div class="closeby__content__title">{{item.title}}</div>
        <div class="closeby__content__tags">
          <span
          class="closeby__content__tag"
          v-for="(innerItem, innerIndex) in item.tags"
          :key="innerIndex"
          >{{innerItem}}</span>
        </div>
        <p class="closeby__content__vip">{{item.vip}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Closeby',
  setup () {
    const closeByList = [{
      id: 1,
      title: 'Walmart',
      img: require('../../images/Walmart.png'),
      tags: ['20000+ Items', '$3.99 Delivery Fee'],
      vip: '70% Off Delivery Fee For VIP Members'
    }, {
      id: 2,
      title: 'Loblaws',
      img: require('../../images/Loblaws.png'),
      tags: ['12000+ Items', '$1.99 Delivery Fee'],
      vip: '40% Off Delivery Fee For VIP Members'
    }]
    return { closeByList }
  }
}
</script>

<style lang="scss">
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
