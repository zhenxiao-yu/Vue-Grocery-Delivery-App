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
      <!-- near by stores -->
      <div class="closeby">
        <h3 class="closeby__title">Stores Near Me</h3>
        <!-- store 1 -->
        <div class="closeby__item">
          <img class="closeby__item__image" src="../../images/Walmart.png" />
          <div class="closeby__content">
            <div class="closeby__content__title">Walmart</div>
            <div class="closeby__content__tags">
              <span class="closeby__content__tag">20000+ Items</span>
              <span class="closeby__content__tag">$3.99 Delivery Fee</span>
            </div>
            <p class="closeby__content__vip">
              70% Off Delivery Fee For VIP Members
            </p>
          </div>
        </div>
        <!-- store 2 -->
        <div class="closeby__item">
          <img class="closeby__item__image" src="../../images/Walmart.png" />
          <div class="closeby__content">
            <div class="closeby__content__title">Walmart</div>
            <div class="closeby__content__tags">
              <span class="closeby__content__tag">20000+ Items</span>
              <span class="closeby__content__tag">$3.99 Delivery Fee</span>
            </div>
            <p class="closeby__content__vip">
              70% Off Delivery Fee For VIP Members
            </p>
          </div>
        </div>
        <!-- store 2 -->
        <div class="closeby__item">
          <img class="closeby__item__image" src="../../images/Walmart.png" />
          <div class="closeby__content">
            <div class="closeby__content__title">Walmart</div>
            <div class="closeby__content__tags">
              <span class="closeby__content__tag">20000+ Items</span>
              <span class="closeby__content__tag">$3.99 Delivery Fee</span>
            </div>
            <p class="closeby__content__vip">
              70% Off Delivery Fee For VIP Members
            </p>
          </div>
        </div>
        <!-- store 3 -->
        <div class="closeby__item">
          <img class="closeby__item__image" src="../../images/Walmart.png" />
          <div class="closeby__content">
            <div class="closeby__content__title">Walmart</div>
            <div class="closeby__content__tags">
              <span class="closeby__content__tag">20000+ Items</span>
              <span class="closeby__content__tag">$3.99 Delivery Fee</span>
            </div>
            <p class="closeby__content__vip">
              70% Off Delivery Fee For VIP Members
            </p>
          </div>
        </div>
        <!-- store 4 -->
        <div class="closeby__item">
          <img class="closeby__item__image" src="../../images/Walmart.png" />
          <div class="closeby__content">
            <div class="closeby__content__title">Walmart</div>
            <div class="closeby__content__tags">
              <span class="closeby__content__tag">20000+ Items</span>
              <span class="closeby__content__tag">$3.99 Delivery Fee</span>
            </div>
            <p class="closeby__content__vip">
              70% Off Delivery Fee For VIP Members
            </p>
          </div>
        </div>
        <!-- store 5 -->
        <div class="closeby__item">
          <img class="closeby__item__image" src="../../images/Walmart.png" />
          <div class="closeby__content">
            <div class="closeby__content__title">Walmart</div>
            <div class="closeby__content__tags">
              <span class="closeby__content__tag">20000+ Items</span>
              <span class="closeby__content__tag">$3.99 Delivery Fee</span>
            </div>
            <p class="closeby__content__vip">
              70% Off Delivery Fee For VIP Members
            </p>
          </div>
        </div>
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

<script>
// export home page
export default {
  name: 'Home'
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

.closeby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: nromal;
    font-family: $content-font;
    color: $content-font-color;
  }
  &__item {
    display: flex;
    padding: 0.12rem;
    &__image {
      margin-right: 0.16rem;
      height: 0.56rem;
      width: 0.56rem;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    border-bottom: 1px solid $content-border-color;
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      font-family: $content-font;
      color: $content-font-color;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      font-family: $content-font;
      color: $content-font-color;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__vip {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #ff3366;
      font-family: $content-font;
    }
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
