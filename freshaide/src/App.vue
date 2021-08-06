<template>
  <div class="dock">
    <span class="docker__item">Home</span>
    <span class="docker__item">Cart</span>
    <span class="docker__item">Order</span>
    <span class="docker__item">Profile</span>
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
.docker__item {
  flex: 1;
  text-align: center;
}
</style>
