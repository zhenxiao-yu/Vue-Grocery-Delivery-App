<template>
  <div class="wrapper">
    <HeaderArea />
    <OrderList />
    <Order />
  </div>
</template>

<script>
import HeaderArea from './HeaderArea'
import OrderList from './OrderList'
import Order from './Order'

export default {
  name: 'OrderConfirmation',
  components: { HeaderArea, OrderList, Order }
}
</script>

<style lang="scss" scoped>
//import predefined scss files
@import "../../style/variables.scss";

.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
  overflow-y:scroll;
  color: $content-font-color;
  font-family: $content-font;
}

</style>
