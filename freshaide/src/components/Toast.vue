<template>
  <div class="toast">{{content}}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  props: ['content']
}

export const useToastEffect = () => {
  const toastData = reactive({
    showMessage: false,
    messageContent: ''
  })
  const displayToast = (message) => {
    toastData.showMessage = true
    toastData.messageContent = message
    setTimeout(() => {
      toastData.showMessage = false
      toastData.messageContent = ''
    }, 1500)
  }
  const { showMessage, messageContent } = toRefs(toastData)
  return { showMessage, messageContent, displayToast }
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
  padding: 0.15rem;
  font-size: 0.14rem;
  font-family: $content-font;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 0.04rem;
  color: $content-bg-color;
}
</style>
