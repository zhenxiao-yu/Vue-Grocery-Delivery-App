<template>
  <div class="wrapper">
    <div class="index">
      <div class="index__top">
        <div class="iconfont index__top__return">&#xe743;</div>
        Order Confirmation
      </div>
      <div class="index__profile">
        <div class="index__profile__title">Delivery Information</div>
        <div class="index__profile__address">400 Eastcastle Pl</div>
        <div class="index__profile__info">
          <span class="index__profile__info__name">Mark Yu</span>
          <span class="index__profile__info__name">(306)581-5556</span>
        </div>
        <div class="iconfont index__profile__icon">&#xe743;</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderConfirmation'
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
  color: $content-font-color;
  font-family: $content-font;
}
.index {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, $content-highlight-color 50%);
  background-repeat: no-repeat;
  &__top {
    position: relative;
    padding-top: .26rem;
    line-height: .24rem;
    color: #FFF;
    text-align: center;
    font-size: .16rem;
    &__return {
      position: absolute;
      left: .18rem;
      font-size: .22rem;
    }
  }
  &__profile {
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: #FFF;
    border-radius: .04rem;
    &__title {
      line-height: .22rem;
      padding: .16rem 0 .14rem .16rem;
      font-size: .16rem;
      color:  $content-font-color;
    }
    &__address {
      line-height: .2rem;
      padding: 0 .4rem 0 .16rem;
      font-size: .14rem;
      color:  $content-font-color;
    }
    &__info {
      padding: .06rem 0 0 .16rem;
      &__name {
        margin-right: .06rem;
        line-height: .18rem;
        font-size: .12rem;
        color: #666;
      }
    }
    &__icon {
      transform: rotate(180deg);
      position: absolute;
      right: .16rem;
      top: .5rem;
      color: #666;
      font-size: .2rem;
    }
  }
}
</style>
