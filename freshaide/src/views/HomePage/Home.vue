<template>
    <div class="wrapper">
      <!-- IndexPart Component-->
      <IndexPart />
      <!-- Closeby Compoenent-->
      <Closeby />
    </div>
    <!-- Dock Compoenent -->
    <Dock />
</template>

<script>
import IndexPart from './IndexPart'
import Closeby from './Closeby'
import Dock from './Dock'
export default {
  name: 'Home',
  components: { IndexPart, Closeby, Dock }
}
</script>

<style lang="scss">
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem 0.2rem 0.18rem;
}
</style>
