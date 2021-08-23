<template>
  <div class="toast">{{content}}</div>
</template>

<script>
import { reactive } from 'vue'
export default {
  props: ['content']
}

export const useToastEffect = () => {
  const toastData = reactive({
    showMessage: false,
    MessageContent: ''
  })
  const displayToast = (message) => {
    toastData.showMessage = true
    toastData.messageContent = message
    setTimeout(() => {
      toastData.showMessage = false
      toastData.messageContent = ''
    }, 1500)
  }
  return { toastData, displayToast }
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
