<template>
  <div>
    <div class="wrapper">
      <!-- IndexPart -->
      <IndexPart />
      <Closeby />
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

<script>
import IndexPart from './IndexPart'
import Closeby from './Closeby'
export default {
  name: 'Home',
  components: { IndexPart, Closeby }
}
</script>

<style lang="scss">
//import predefined scss files
@import "../../style/variables.scss";
@import "../../style/mixins.scss";

.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem 0.2rem 0.18rem;
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
  border-top: 0.01 solid $content-bg-color;
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
