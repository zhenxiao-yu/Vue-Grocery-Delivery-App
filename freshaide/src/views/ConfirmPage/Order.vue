<template>
    <div class="order">
        <div class="order__total-price">Order Total: <b> &#36;{{myCalculator.price}} </b> </div>
        <div class="order__btn">Confirm</div>
    </div>
    <div class="overlay">
        <div class="overlay__window">
            <h3 class="overlay__window__title">Ready for checkout?</h3>
            <p class="overlay__window__tip">You will be redirected to a new page.</p>
            <div class="overlay__window__btns">
                <div
                    class="overlay__window__btn overlay__window__btn--cancel"
                    @click="handleCancelClick"
                    >Cancel</div>
                <div
                    class="overlay__window__btn overlay__window__btn--confirm"
                    @click="handlePayClick"
                    >Pay Now</div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'

export default {
  name: 'Order',
  setup () {
    const route = useRoute()
    const storeId = route.params.id
    const { myCalculator } = useCommonCartEffect(storeId)
    const handleCancelClick = () => {
      alert('cancel')
    }
    const handlePayClick = () => {
      alert('confirm')
    }
    return { myCalculator, handleCancelClick, handlePayClick }
  }
}
</script>

<style lang="scss" scoped>
//import predefined scss files
@import "../../style/variables.scss";
.order {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 0.49 rem;
  line-height: 0.49rem;
  background: #FFF;
  &__total-price {
    flex: 1;
    text-indent: 0.24rem;
    font-size: 0.14rem;
    color: $content-font-color;
  }
  &__btn {
    width: 0.98rem;
    background-color: $content-highlight-color;
    color: $content-bg-color;
    text-align: center;
    font-size: 0.14rem;
  }
}

.overlay {
    z-index: 1;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    &__window {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 3rem;
        height: 2rem;
        background: #FFF;
        border-radius: 0.04rem;
        text-align: center;
        &__title {
            margin: 0.24rem 0 0 0;
            line-height: 0.26rem;
            font-size: 0.18rem;
            color: $content-font-color;
            text-align: center;
        }
        &__tip {
            margin-top: 0.08rem 0 0 0;
            font-size: 0.14rem;
            color: $content-border-color;
        }
        &__btns {
            display: flex;
            margin: .24rem .58rem;
        }
        &__btn {
            flex: 1;
            width: 0.8rem;
            line-height: 0.32rem;
            border-radius: 0.16rem;
            font-size: 0.14rem;
             &--cancel {
                margin-right: .12rem;
                border: .01rem solid $content-highlight-color;
                color: $content-highlight-color;
            }
            &--confirm {
                margin-left: .12rem;
                background: $content-highlight-color;
                color: #FFF;
            }
        }
    }
}
</style>
