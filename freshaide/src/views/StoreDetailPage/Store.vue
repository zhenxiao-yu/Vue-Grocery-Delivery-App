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
    <StoreInfo :item="item" :hideBorder="true" v-if="item.img"/>
    <Core />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/req'
import StoreInfo from '../../components/StoreInfo'
import Core from './Core'

// get current store information
const useStoreInfoEffect = () => {
  // path info
  const myRoute = useRoute()
  const data = reactive({ item: {} })
  const getItemData = async () => {
    const result = await get(`/api/store/${myRoute.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}

const useReturnRouterEffect = () => {
  const myRouter = useRouter()
  const handleReturnClick = () => {
    myRouter.back()
  }
  return handleReturnClick
}

export default {
  name: 'Store',
  components: { StoreInfo, Core },
  setup () {
    const { item, getItemData } = useStoreInfoEffect()
    const handleReturnClick = useReturnRouterEffect()
    getItemData()
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
