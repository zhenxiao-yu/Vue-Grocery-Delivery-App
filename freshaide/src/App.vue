<template>
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
</template>

<style lang="scss">
.dock {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #f1f1f1;
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
      background-color: #f7f7ff;
    }
  }
  //navigation label
  &__label {
    font-size: 20px;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}

</style>
