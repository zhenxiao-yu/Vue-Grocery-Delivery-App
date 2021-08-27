<template>
    <div class="core">
        <div class="type">
            <div
                :class="{'type__item': true, 'type__item--active': currentTab === item.tab}"
                v-for="item in types"
                :key="item.name"
                @click="() => handleTypeClick(item.tab)"
            >
            {{item.name}}
            </div>
        </div>
        <div class="product">
            <div
                class="product__item"
                v-for="item in coreList"
                :key="item.id"
            >
                <img class="product__item__img" :src="item.img" />
                <div class="product__item__info">
                    <h4 class="product__item__title">{{item.name}}</h4>
                    <p class="product__item__sales"> Monthly Sales: {{item.sales}}</p>
                    <p class="product__item__price">
                        <span class="product__item__cad">&#36;</span>{{item.price}} ea
                        <span class="product__item__origin">&#36;{{item.org}}</span>
                    </p>
                </div>
                <div class="product__count">
                    <span class="product__count__minus">-</span>
                    0
                    <span class="product__count__plus">+</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/req'
export default {
  name: 'Core',
  setup () {
    const types = [{
      name: 'All Items',
      tab: 'all'
    }, {
      name: 'Sales',
      tab: 'sales'
    }, {
      name: 'Fruits',
      tab: 'fruits'
    }, {
      name: 'Deli',
      tab: 'deli'
    }, {
      name: 'Bakery',
      tab: 'bakery'
    }, {
      name: 'Dairy',
      tab: 'dairy'
    }, {
      name: 'Meat',
      tab: 'meat'
    }, {
      name: 'Vegetables',
      tab: 'vegetables'
    }, {
      name: 'Seafood',
      tab: 'seafood'
    }, {
      name: 'Pantry',
      tab: 'pantry'
    }, {
      name: 'Frozen',
      tab: 'frozen'
    }, {
      name: 'Eggs',
      tab: 'eggs'
    }, {
      name: 'Cloths',
      tab: 'cloths'
    }, {
      name: 'Snacks',
      tab: 'snacks'
    }]
    const data = reactive({
      currentTab: types[0].tab,
      coreList: []
    })
    const getCoreData = async (tab) => {
      const result = await get('/api/store/1/products', { tab })
      if (result?.errno === 0 && result?.data?.length) {
        data.coreList = result.data
      }
    }
    const handleTypeClick = (tab) => {
      getCoreData(tab)
      data.currentTab = tab
    }
    // show all product items
    getCoreData('all')
    const { coreList, currentTab } = toRefs(data)
    return { coreList, currentTab, types, handleTypeClick }
  }
}
</script>

<style lang="scss" scoped>
//import predefined scss files
@import "../../style/variables.scss";
@import "../../style/mixins.scss";

.core {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 1.7rem;
    bottom: 0.5rem;
}
.type {
    overflow-y: scroll;
    height: 100%;
    width: 0.76rem;
    background: $content-bg-color;
    &__item {
        line-height: 0.4rem;
        text-align: center;
        font-size: 0.13rem;
        font-family: $content-font;
        color: $content-font-color;
        &--active {
            background: rgba(0, 0, 0, 0.15);
            font-weight: bold;
        }
    }
}
.product {
    overflow-y: scroll;
    flex: 1;
    &__item {
        position: relative;
        display: flex;
        padding: 0.12rem 0;
        margin: 0 0.16rem;
        border-bottom: 1px solid $content-bg-color;
        &__info {
            overflow: hidden;
        }
        &__img {
            width: 0.68 rem;
            height: 0.68rem;
            margin-right: 0.16rem;
        }
        &__title {
            margin: 0;
            line-height: 0.2rem;
            font-size: 0.14rem;
            font-family: $content-font;
            color: $content-font-color;
            @include ellipsis;
        }
        &__sales {
            margin: 0.06rem 0;
            line-height: 0.16rem;
            font-size: 0.12rem;
            font-family: $content-font;
            color: $content-font-color;
        }
        &__price {
            margin: 0;
            line-height: 0.2rem;
            font-size: 0.14rem;
            font-family: $content-font;
            color: $content-highlight-color;
        }
        &__cad{
                font-size: 0.12rem;
        }
        &__origin {
            line-height: 0.2rem;
            font-size: 0.12rem;
            color: rgba(0, 0, 0, 0.35);
            text-decoration: line-through;
            margin-left: 0.06rem;
        }
        .product__count{
            position: absolute;
            right: 0;
            bottom: 0.12rem;
            font-family: $content-font;
            color: $content-font-color;
            &__minus, &__plus
            {
                display: inline-block;
                width: 0.2rem;
                height: 0.2rem;
                line-height: 0.16rem;
                border-radius: 50%;
                font-size: 0.2rem;
                text-align: center;
            }
            &__minus{
                border: 0.01rem solid $content-highlight-color;
                color: $content-highlight-color;
                margin-right: 0.06rem;
            }
            &__plus {
                background: $content-highlight-color;
                color: $content-bg-color;
                margin-left: 0.06rem;
            }
        }
    }
}
</style>
