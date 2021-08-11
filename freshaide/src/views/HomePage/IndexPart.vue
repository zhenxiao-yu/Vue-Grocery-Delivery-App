<template>
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
  <!-- banner -->
  <div class="banner">
    <img class="banner__image" src="../../images/Banner.jpg" />
  </div>
  <!-- category icons -->
  <div class="cate">
    <!-- icon 1 -->
    <div class="cate__item">
      <img class="cate__item__icon" src="../../images/Snacks.png" />
      <p class="cate__item__label">Snacks</p>
    </div>
    <!-- icon 2 -->
    <div class="cate__item">
      <img class="cate__item__icon" src="../../images/Pantry.png" />
      <p class="cate__item__label">Pantry</p>
    </div>
    <!-- icon 3 -->
    <div class="cate__item">
      <img class="cate__item__icon" src="../../images/Meat.png" />
      <p class="cate__item__label">Meat</p>
    </div>
    <!-- icon 4 -->
    <div class="cate__item">
      <img class="cate__item__icon" src="../../images/Study.png" />
      <p class="cate__item__label">School Supplies</p>
    </div>
    <!-- icon 5 -->
    <div class="cate__item">
      <img class="cate__item__icon" src="../../images/Health.png" />
      <p class="cate__item__label">Health</p>
    </div>
    <!-- icon 6 -->
    <div class="cate__item">
      <img class="cate__item__icon" src="../../images/Fruit.png" />
      <p class="cate__item__label">Fruits</p>
    </div>
    <!-- icon 7 -->
    <div class="cate__item">
      <img class="cate__item__icon" src="../../images/Beverage.png" />
      <p class="cate__item__label">Drinks</p>
    </div>
    <!-- icon 8 -->
    <div class="cate__item">
      <img class="cate__item__icon" src="../../images/Vegetable.png" />
      <p class="cate__item__label">Vegetables</p>
    </div>
  </div>
  <!-- divider -->
  <div class="divide"></div>
</template>

<script>
export default {
  name: 'IndexPart'
}
</script>

<style lang="scss">
//import predefined scss files
@import "../../style/variables.scss";
@import "../../style/mixins.scss";

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
  background: $content-bg-color;
  color: $content-border-color;
  border-radius: 0.16rem;
  font-family: $content-font;
  .iconfont {
    position: relative;
    top: 0.02rem;
    display: inline-block;
    padding: 0 0.05rem 0 0.1rem;
    font-size: 0.16rem;
  }
  &__label {
    display: inline-block;
    font-size: 0.14rem;
  }
}

.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 33.3%;
  &__image {
    width: 100%;
    border-radius: 0.05rem;
  }
}

.cate {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 25%;
    &__icon {
      display: block;
      width: 0.5rem;
      height: 0.5rem;
      //center
      margin: 0 auto;
    }
    &__label {
      text-align: center;
      margin: 0.06rem 0 0.16rem 0;
      font-family: $content-font;
      color: $content-font-color;
    }
  }
}

.divide {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: $content-bg-color;
  border-radius: 0 0 0.075rem 0.075rem;
}
</style>
