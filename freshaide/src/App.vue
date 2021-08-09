<template>
  <div>
    <div class="wrapper">
      <!-- address bar -->
      <div class="address">
        <span class="iconfont address__icon">&#xe651;</span>
        400 Eastcastle Place, London, ON
        <span class="iconfont address__notice">&#xe70a;</span>
      </div>
    </div>
    <div class="dock">
      <span class="dock__nav_elem dock__nav_elem--active"
        ><div class="iconfont">&#xe6bb;</div>
        <div class="dock__label">Home</div>
      </span>
      <span class="dock__nav_elem"
        ><div class="iconfont">&#xe6b9;</div>
        <div class="dock__label">Cart</div>
      </span>
      <span class="dock__nav_elem"
        ><div class="iconfont">&#xe7ab;</div>
        <div class="dock__label">Orders</div>
      </span>
      <span class="dock__nav_elem">
        <div class="iconfont">&#xe77a;</div>
        <div class="dock__label">Profile</div>
      </span>
    </div>
  </div>
</template>

<style lang="scss">
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
  padding: 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
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
