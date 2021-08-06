<template>
  <div class="dock">
    <span class="dock__item"
      ><div class="iconfont">&#xe6b8;</div>
      <div class="dock__title">Home</div>
    </span>
    <span class="dock__item"
      ><div class="iconfont">&#xe6af;</div>
      <div class="dock__title">Cart</div>
    </span>
    <span class="dock__item"
      ><div class="iconfont">&#xe699;</div>
      <div class="dock__title">Orders</div>
    </span>
    <span class="dock__item">
      <div class="iconfont">&#xe736;</div>
      <div class="dock__title">Profile</div>
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
}

.dock__item {
  flex: 1;
  text-align: center;
  .iconfont {
    margin: 0.07rem 0 0.02rem 0;
    font-size: 0.18rem;
  }
}

.dock__title{
  font-size: 20px;
  transform: scale(0.5, 0.5);
  transform-origin: center top;
}
</style>
