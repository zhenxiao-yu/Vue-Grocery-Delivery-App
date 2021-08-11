<template>
  <!-- near by stores -->
  <div class="closeby">
    <h3 class="closeby__title">Stores Near Me</h3>
    <!-- store 1 -->
    <div class="closeby__item">
      <img class="closeby__item__image" src="../../images/Walmart.png" />
      <div class="closeby__content">
        <div class="closeby__content__title">Walmart</div>
        <div class="closeby__content__tags">
          <span class="closeby__content__tag">20000+ Items</span>
          <span class="closeby__content__tag">$3.99 Delivery Fee</span>
        </div>
        <p class="closeby__content__vip">
          70% Off Delivery Fee For VIP Members
        </p>
      </div>
    </div>
    <!-- store 2 -->
    <div class="closeby__item">
      <img class="closeby__item__image" src="../../images/Walmart.png" />
      <div class="closeby__content">
        <div class="closeby__content__title">Walmart</div>
        <div class="closeby__content__tags">
          <span class="closeby__content__tag">20000+ Items</span>
          <span class="closeby__content__tag">$3.99 Delivery Fee</span>
        </div>
        <p class="closeby__content__vip">
          70% Off Delivery Fee For VIP Members
        </p>
      </div>
    </div>
    <!-- store 2 -->
    <div class="closeby__item">
      <img class="closeby__item__image" src="../../images/Walmart.png" />
      <div class="closeby__content">
        <div class="closeby__content__title">Walmart</div>
        <div class="closeby__content__tags">
          <span class="closeby__content__tag">20000+ Items</span>
          <span class="closeby__content__tag">$3.99 Delivery Fee</span>
        </div>
        <p class="closeby__content__vip">
          70% Off Delivery Fee For VIP Members
        </p>
      </div>
    </div>
    <!-- store 3 -->
    <div class="closeby__item">
      <img class="closeby__item__image" src="../../images/Walmart.png" />
      <div class="closeby__content">
        <div class="closeby__content__title">Walmart</div>
        <div class="closeby__content__tags">
          <span class="closeby__content__tag">20000+ Items</span>
          <span class="closeby__content__tag">$3.99 Delivery Fee</span>
        </div>
        <p class="closeby__content__vip">
          70% Off Delivery Fee For VIP Members
        </p>
      </div>
    </div>
    <!-- store 4 -->
    <div class="closeby__item">
      <img class="closeby__item__image" src="../../images/Walmart.png" />
      <div class="closeby__content">
        <div class="closeby__content__title">Walmart</div>
        <div class="closeby__content__tags">
          <span class="closeby__content__tag">20000+ Items</span>
          <span class="closeby__content__tag">$3.99 Delivery Fee</span>
        </div>
        <p class="closeby__content__vip">
          70% Off Delivery Fee For VIP Members
        </p>
      </div>
    </div>
    <!-- store 5 -->
    <div class="closeby__item">
      <img class="closeby__item__image" src="../../images/Walmart.png" />
      <div class="closeby__content">
        <div class="closeby__content__title">Walmart</div>
        <div class="closeby__content__tags">
          <span class="closeby__content__tag">20000+ Items</span>
          <span class="closeby__content__tag">$3.99 Delivery Fee</span>
        </div>
        <p class="closeby__content__vip">
          70% Off Delivery Fee For VIP Members
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Closeby'
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
      margin-right: 0.16rem;
      height: 0.56rem;
      width: 0.56rem;
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
      color: #ff3366;
      font-family: $content-font;
    }
  }
}
</style>
