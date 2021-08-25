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
    <StoreInfo :item="data.item" :hideBorder="true" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { get } from '../../utils/req'
import StoreInfo from '../../components/StoreInfo'
export default {
  name: 'Shop',
  components: { StoreInfo },
  setup () {
    const myRouter = useRouter()
    const data = reactive({ item: {} })
    const getItemData = async () => {
      const result = await get('/api/store/1')
      if (result?.errno === 0 && result?.data) {
        data.item = result.data
      }
      console.log(result)
    }
    getItemData()

    const handleReturnClick = () => {
      myRouter.back()
    }
    return { data, handleReturnClick }
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
