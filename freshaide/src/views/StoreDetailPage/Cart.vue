<template>
  <div class="cart">
    <div class="checkout">
      <div class="checkout__icon">
        <span class="checkout__icon__img iconfont">&#xe67d;</span>
        <div class="checkout__icon__corner-tag">1</div>
      </div>
      <div class="checkout__info">
        Total：<span class="checkout__info__cost">&#36;132</span>
      </div>
      <div class="checkout__btn">Checkout</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
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
    &__img {
      display: block;
      margin: 0.01rem auto;
      width: .30rem;
      height: .28rem;
      font-size: 0.20rem;
      color: $content-highlight-color;
    }
    &__corner-tag {
      position: absolute;
      right: .2rem;
      top: .04rem;
      width: .2rem;
      height: .2rem;
      line-height: .2rem;
      background-color: $content-border-color;
      border-radius: 50%;
      font-size: .12rem;
      text-align: center;
      color: $content-bg-color;
      transform: scale(.5);
    }
  }
  &__info {
    flex: 1;
    color: $content-font-color;
    font-size: .13rem;
    &__cost {
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
