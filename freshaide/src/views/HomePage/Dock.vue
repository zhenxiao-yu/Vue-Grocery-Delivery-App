<template>
    <div class="dock">
      <!-- index = navigation item number -->
      <span
        v-for="(item, index) in dockItemsList"
        :class="{'dock__nav_elem': true, 'dock__nav_elem--active': index===currentIndex}"
        :key="item.label"
      >
        <router-link :to='item.to'>
        <!-- v-html to convert &#xe7a7; code to html element -->
          <div class="iconfont" v-html="item.icon"/>
          <div class="dock__label">{{item.label}}</div>
        </router-link>
      </span>
    </div>
</template>

<script>
export default {
  name: 'Dock',
  props: ['currentIndex'],
  setup () {
    const dockItemsList = [
      { icon: '&#xe7a7;', label: 'Home', to: { name: 'Home' } },
      { icon: '&#xe747;', label: 'Cart', to: { name: 'CartItems' } },
      { icon: '&#xe7b3;', label: 'Orders', to: { name: 'OrderList' } },
      { icon: '&#xe7c9;', label: 'Profile', to: { name: 'PersonalInfo' } }
    ]
    return { dockItemsList }
  }
}
</script>

<style lang="scss" scoped>
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
  font-family: $content-font;
  //navigation element
  &__nav_elem {
    flex: 1;
    text-align: center;
    a {
      color: $content-font-color;
      text-decoration: none;
    }
    .iconfont {
      font-size: 0.18rem;
      margin: 0.07rem 0 0.02rem 0;
    }
    //active navigation element
    &--active {
      a {
        color: $content-highlight-color;
      }
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
