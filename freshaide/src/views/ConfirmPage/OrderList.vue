<template>
  <div class="products">
    <div class="products__title">
      {{ storeName }}
    </div>
    <div class="products__wrapper">
      <div class="products__list">
        <template v-for="item in productList" :key="item.id">
          <div v-if="item.count > 0" class="products__item">
            <img class="products__item__img" :src="item.img" />
            <div class="products__item__info">
              <h4 class="products__item__title">{{ item.name }}</h4>
              <p class="products__item__price">
                <span>
                  <span class="products__item__cad">&#36; </span>
                  {{ item.price }} x {{ item.count }}
                </span>
                <span class="products__item__total">
                  <span class="products__item__cad">&#36; </span>
                  {{ (item.price * item.count).toFixed(2) }}
                </span>
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
//import predefined scss files
@import "../../style/variables.scss";
@import '../../style/mixins.scss';

.products {
  margin: .16rem .18rem .1rem .18rem;
  background: #FFF;
  &__title {
    padding: 0.16rem;
    font-size: .16rem;
    color: $content-font-color;
  }
  &__wrapper {
    overflow-y: scroll;
    margin: 0 0.18rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.6rem;
    top: 2.6rem;
  }
  &__list {
    background: #FFF;
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0 0.16rem 0.16rem 0.16rem;
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__info {
      flex: 1;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-font-color;
      @include ellipsis;
    }
    &__price {
      display: flex;
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-highlight-color;
    }
    &__total {
      flex: 1;
      text-align: right;
      color: $content-font-color;
    }
    &__cad {
      font-size: .12rem;
    }
  }
}
</style>
