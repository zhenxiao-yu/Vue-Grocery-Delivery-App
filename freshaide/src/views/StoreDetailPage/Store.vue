<template>
  <div class="wrapper">
    <StoreInfo :item="item" :hideBorder="true" />
  </div>
</template>

<script>
import StoreInfo from '../../components/StoreInfo'
export default {
  name: 'Shop',
  components: { StoreInfo },
  setup () {
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
    return { item }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 .18rem;
}
</style>
