<template>
  <div class="wrapper">
    <img class="wrapper__profile-img" src="../../images/Avatar.png"/>
    <div class="wrapper__input">
      <input class="wrapper__input__form" placeholder="New Username" v-model="username"/>
    </div>
    <div class="wrapper__input">
       <input
        class="wrapper__input__form"
        placeholder="New Password"
        type="password"
        autocomplete="new-password"
        v-model="password"
        />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__form"
        placeholder="Confirm Password"
        type="password"
        v-model="confirmPassword"
        />
    </div>
    <div class="wrapper__register" @click="handleRegister">Register</div>
    <div class="wrapper__login" @click="handleLoginClick">Already a Member? Login Now!</div>
    <Toast v-if="showMessage" :content="messageContent"/>
  </div>
</template>

<script>
// get router
import { useRouter } from 'vue-router'
// get router
import { reactive, toRefs } from 'vue'
import { post } from '../../utils/req'
import Toast, { useToastEffect } from '../../components/Toast'

const useRegisterEffect = (displayToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    confirmPassword: ''
  })

  const handleRegister = async () => {
    try {
      const result = await post('/api/user/register', {
        username: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        router.push({ name: 'Login' })
      } else {
        // execute when register fails
        displayToast('Register Failed')
      }
    } catch (e) {
      // execute when request fails
      displayToast('Request Failed')
    }
  }

  const { username, password, confirmPassword } = toRefs(data)
  return { username, password, confirmPassword, handleRegister }
}

const useLoginEffect = () => {
  const router = useRouter()
  const handleLoginClick = () => {
    router.push({ name: 'Login' })
  }
  return { handleLoginClick }
}

export default {
  name: 'Register',
  components: { Toast },
  setup () {
    const { showMessage, messageContent, displayToast } = useToastEffect()
    const { username, password, confirmPassword, handleRegister } = useRegisterEffect(displayToast)
    const { handleLoginClick } = useLoginEffect()
    return {
      username,
      password,
      confirmPassword,
      showMessage,
      messageContent,
      handleRegister,
      handleLoginClick
    }
  }
}

</script>

<style lang="scss" scoped>
//import predefined scss files
@import "../../style/variables.scss";

.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__profile-img {
    display: block;
    margin: 0 auto .4rem auto;
    width: .99rem;
    height: .99rem;
  }
  &__input {
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    background: $content-bg-color;
    border: 1px solid rgba(0,0,0,0.10);
    border-radius: 6px;
    border-radius: 6px;
    &__form {
      line-height: .48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: .15rem;
      font-family: $content-font;
      color: #111;
      &::placeholder {
        color: $content-font-color;
      }
    }
  }
  &__register {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: $content-highlight-color;
    box-shadow: 0 .04rem .08rem 0 #ff33667e;
    border-radius: .04rem;
    border-radius: .04rem;
    color: $content-bg-color;
    font-size: .15rem;
    text-align: center;
    font-family: $content-font;
  }
  &__login {
    text-align: center;
    font-size: .13rem;
    font-family: $content-font;
    color: $content-border-color;
  }
}
</style>
