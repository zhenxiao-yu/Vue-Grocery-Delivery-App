<template>
  <div class="toast">{{content}}</div>
</template>

<script>
export default {
  props: ['content']
}
</script>

<style lang="scss" scoped>
//import predefined scss files
@import "../style/variables";

.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.1rem;
  font-family: $content-font;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 0.04rem;
  color: $content-bg-color;
}
</style>
