<template>
    <div class="toast">{{content}}</div>
</template>

<script>
export default {

}
</script>

<style lang = "scss" scoped>
.toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0.1rem;
    background: rgba(0, 0, 0, 0.35);
    border-radius: 0.04rem;
    color: #fff;
}
</style>
