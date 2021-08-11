<template>
    <div class="dock">
      <!-- index = navigation item number -->
      <span
        v-for="(item, index) in dockItemsList"
        :class="{'dock__nav_elem': true, 'dock__nav_elem--active': index===0}"
        class="dock__nav_elem"
        :key="item.label"
      >
        <!-- v-html to convert &#xe7a7; code to html element -->
        <div class="iconfont" v-html="item.icon"/>
        <div class="dock__label">{{item.label}}</div>
      </span>
    </div>
</template>

<script>
export default {
  name: 'Dock',
  setup () {
    const dockItemsList = [
      { icon: '&#xe7a7;', label: 'Home' },
      { icon: '&#xe747;', label: 'Cart' },
      { icon: '&#xe7b3;', label: 'Orders' },
      { icon: '&#xe7c9;', label: 'Profile' }
    ]
    return { dockItemsList }
  }
}
</script>

<style lang="scss">
//import predefined scss files
@import "../../style/variables.scss";

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
      color: $content-highlight-color;
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
