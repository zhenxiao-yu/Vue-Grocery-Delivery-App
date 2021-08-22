<template>
  <div class="wrapper">
    <img class="wrapper__profile-img" src="../../images/Avatar.png"/>
    <div class="wrapper__input">
      <input
        class="wrapper__input__form"
        placeholder="Username"
        v-model="data.username"
      />
    </div>
    <div class="wrapper__input">
       <input
        class="wrapper__input__form"
        placeholder="Password"
        type="password"
        v-model="data.password"
        />
    </div>
    <div class="wrapper__submit" @click="handleSubmit">Submit</div>
    <div class="wrapper__register" @click="handleRegisterClick">New to Freshaide? Register today!</div>
    <Toast/>
  </div>
</template>

<script>
// get router
import { useRouter } from 'vue-router'
import { post } from '../../utils/req'
import { reactive } from 'vue'
import Toast from '../../components/Toast'

export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const data = reactive({
      // bibding data
      username: '',
      password: ''
    })
    const router = useRouter()
    // handle submit button
    const handleSubmit = async () => {
      try {
        const returnData = await post('/api/user/login', {
          username: data.username,
          password: data.password
        })
        if (returnData?.errno === 0) {
          // reroute to home page
          localStorage.loggedIn = true
          router.push({ name: 'Home' })
        } else {
          alert('Login failed')
        }
      } catch (e) {
        alert('Request failed')
      }
    }
    // handle reroute to login page
    const handleRegisterClick = () => {
      router.push({ name: 'Register' })
    }
    return { handleSubmit, handleRegisterClick, data }
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
  &__submit {
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
  &__register {
    text-align: center;
    font-size: .13rem;
    font-family: $content-font;
    color: $content-border-color;
  }
}
</style>
