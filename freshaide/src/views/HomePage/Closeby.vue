<template>
  <!-- near by stores -->
  <div class="closeby">
    <h3 class="closeby__title">Stores Near Me</h3>
    <router-link to="/store" v-for="item in closebyList" :key="item.id">
      <StoreInfo  :item="item"/>
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/req'
import StoreInfo from '../../components/StoreInfo'

const useClosebyListEffect = () => {
  const closebyList = ref([])
  const getClosebyList = async () => {
    const returnData = await get('/api/shop/closeby-list')
    if (returnData?.errno === 0 && returnData?.data?.length) {
      closebyList.value = returnData.data
    }
  }
  return { closebyList, getClosebyList }
}

export default {
  name: 'Closeby',
  components: { StoreInfo },
  setup () {
    const { closebyList, getClosebyList } = useClosebyListEffect()
    getClosebyList()
    return { closebyList }
  }
}

</script>

<style lang="scss" scoped>
//import predefined scss files
@import "../../style/variables.scss";
.closeby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: nromal;
    font-family: $content-font;
    color: $content-font-color;
  }
  a {
    text-decoration: none;
  }
}
</style>
