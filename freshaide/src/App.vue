<template>
  <div>
    <div class="wrapper">
      <!-- address bar -->
      <div class="address">
        <span class="iconfont address__icon">&#xe758;</span>
        400 Eastcastle Place, London, ON
        <span class="iconfont address__notice">&#xe75a;</span>
      </div>
      <!-- search bar -->
      <div class="search">
        <span class="iconfont">&#xe7b4;</span>
        <span class="seach__label">What are you looking for?</span>
      </div>
    </div>
    <div class="dock">
      <span class="dock__nav_elem dock__nav_elem--active"
        ><div class="iconfont">&#xe7a7;</div>
        <div class="dock__label">Home</div>
      </span>
      <span class="dock__nav_elem"
        ><div class="iconfont">&#xe747;</div>
        <div class="dock__label">Cart</div>
      </span>
      <span class="dock__nav_elem"
        ><div class="iconfont">&#xe7b3;</div>
        <div class="dock__label">Orders</div>
      </span>
      <span class="dock__nav_elem">
        <div class="iconfont">&#xe7c9;</div>
        <div class="dock__label">Profile</div>
      </span>
    </div>
  </div>
</template>

<style lang="scss">
//import predefined scss files
@import "./style/variables.scss";
@import "./style/mixins.scss";

.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
}

.address {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  color: $content-font-color;
  font-family: $content-font;
  @include ellipsis;
  .address__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .address__notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
}

.search {
  margin-bottom: 0.12rem;
  vertical-align: middle;
  line-height: 0.32rem;
  background: #f7f7ff;
  color: #577399;
  border-radius: 0.16rem;
  font-family: $content-font;
  .iconfont {
    position: relative;
    top: 0.02rem;
    display: inline-block;
    padding: 0 0.05rem 0 0.1rem;
    font-size: 0.16rem;
  }
  &__label{
    display: inline-block;
    font-size: 0.14rem;
  }
}

.dock {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  //total dock height = 0.5rem
  height: 0.49rem;
  border-top: 0.01 solid #f1f1f1;
  color: $content-font-color;
  font-family: $content-font;
  //navigation element
  &__nav_elem {
    flex: 1;
    text-align: center;
    .iconfont {
      font-size: 0.18rem;
      margin: 0.07rem 0 0.02rem 0;
    }
    //active navigation element
    &--active {
      color: #ff3366;
    }
  }
  //navigation label
  &__label {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
