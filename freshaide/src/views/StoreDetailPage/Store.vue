<template>
  <div class="wrapper">
    <div class="search">
      <div
        class="search__return iconfont"
        @click="handleReturnClick"
      >&#xe743;</div>
       <div class="search__bar">
         <span class="search__bar__icon iconfont">&#xe7b4;</span>
         <input
          class="search__bar__label"
          placeholder="Search product..."
        />
       </div>
    </div>
    <StoreInfo :item="item" :hideBorder="true" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import StoreInfo from '../../components/StoreInfo'
export default {
  name: 'Shop',
  components: { StoreInfo },
  setup () {
    const myRouter = useRouter()
    const item = {
      id: '3',
      name: 'Sobeys',
      img: 'https://cdn.worldvectorlogo.com/logos/sobeys.svg',
      sales: 1089,
      deliveryFee: 2.99,
      distance: 1.6,
      rating: 4.3,
      vip: '100% Off Delivery Fee For VIP Members'
    }
    const handleReturnClick = () => {
      myRouter.back()
    }
    return { item, handleReturnClick }
  }
}
</script>

<style lang="scss" scoped>
//import predefined scss files
@import "../../style/variables.scss";
@import "../../style/mixins.scss";

.wrapper {
  padding: 0 .18rem;
}
.search {
  display: flex;
  margin: .14rem 0 .04rem 0;
  line-height: .32rem;
  &__return {
    width: .3rem;
    font-size: .24rem;
    color: $content-border-color;
  }
  &__bar {
    display: flex;
    flex: 1;
    background: $content-bg-color;
    border-radius: .16rem;
    color: $content-border-color;
    &__icon {
      width: .44rem;
      text-align: center;
    }
    &__label {
      display: block;
      width: 100%;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      height: .32rem;
      font-size: .14rem;
      font-family: $content-font;
      &::placeholder {
        color: $content-border-color;
        font-family: $content-font;
      }
    }
  }
}

</style>
