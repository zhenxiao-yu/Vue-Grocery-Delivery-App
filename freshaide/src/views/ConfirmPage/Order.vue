<template>
    <div class="order">
        <div class="order__total-price">Order Total: <b> &#36;{{myCalculator.price}} </b> </div>
        <div class="order__btn" @click="() => handleConfirmClick(true)">Confirm</div>
    </div>
    <div class="overlay" v-show="showConfirm" @click="() => handleConfirmClick(false)">
        <!-- @click.stop to prevent handleConfirmClick from executing when window is clicked -->
        <div class="overlay__window" @click.stop>
            <h3 class="overlay__window__title">Ready to Pay?</h3>
            <p class="overlay__window__tip">Click 'Yes' to pay, else the current order will be canceled</p>
            <div class="overlay__window__btns">
                <div
                    class="overlay__window__btn overlay__window__btn--cancel"
                    @click="() => handlePayClick(true)"
                    >No</div>
                <div
                    class="overlay__window__btn overlay__window__btn--confirm"
                    @click="() => handlePayClick(false)"
                    >Yes</div>
            </div>
        </div>
    </div>
    <Toast v-if="showMessage" :content="messageContent"/>
</template>

<script>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { post } from '../../utils/req'
import { useCommonCartEffect } from '../../effects/cartEffects'
import Toast, { useToastEffect } from '../../components/Toast'

// confirm order related logic
const useConfirmOrderEffect = (storeId, storeName, productList, displayToast) => {
  const router = useRouter()
  const store = useStore()
  const handlePayClick = async (isCanceled) => {
    const products = []
    for (const i in productList.value) {
      const product = productList.value[i]
      products.push({ id: parseInt(product.id, 10), amount: product.count })
    }
    try {
      const returnData = await post('/api/order', {
        addressId: 1,
        storeId,
        storeName: storeName.value,
        isCanceled,
        products
      })
      if (returnData?.errno === 0) {
        // success
        store.commit('clearCartData', storeId)
        router.push({ name: 'OrderList' })
      }
    } catch (e) {
      // show failed
      displayToast('Checkout Failed')
    }
  }
  return { handlePayClick }
}

// overlay display related logic
const userOverlayEffect = () => {
  const showConfirm = ref(false)
  // show window
  const handleConfirmClick = (bool) => {
    showConfirm.value = bool
  }
  return { showConfirm, handleConfirmClick }
}

export default {
  name: 'Order',
  components: { Toast },
  setup () {
    const route = useRoute()
    const storeId = parseInt(route.params.id, 10)
    const { showMessage, messageContent, displayToast } = useToastEffect()
    const { myCalculator, storeName, productList } = useCommonCartEffect(storeId)
    const { handlePayClick } = useConfirmOrderEffect(storeId, storeName, productList)
    const { showConfirm, handleConfirmClick } = userOverlayEffect()
    return { myCalculator, handlePayClick, handleConfirmClick, showConfirm, showMessage, messageContent, displayToast }
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
