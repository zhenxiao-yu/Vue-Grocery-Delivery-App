<template>
  <div class="wrapper">
    <div class="index">
      <div class="index__info">
        <div class="index__info__user">{{profile.username}}</div>
        <div class="index__info__id">User ID:{{profile.id}}</div>
      </div>
      <img
        class="index__avatar"
        src="https://loanalexa.com/wp-content/uploads/2016/12/testimonial1.png"
      />
    </div>
    <div class="list">
      <div class="list__item" @click="handleAddressClick">
        <div class="list__item__icon iconfont">&#xe758;</div>
        <div class="list__item__label">My Address</div>
        <div class="list__item__arrow iconfont">&#xe743;</div>
      </div>
      <div class="list__item" @click="handleDevClick">
        <div class="list__item__icon iconfont">&#xe76c;</div>
        <div class="list__item__label">Settings</div>
        <div class="list__item__arrow iconfont">&#xe743;</div>
      </div>
      <div class="list__item" @click="handleDevClick">
        <div class="list__item__icon iconfont">&#xe770;</div>
        <div class="list__item__label">My Wallet</div>
        <div class="list__item__arrow iconfont">&#xe743;</div>
      </div>
      <div class="list__item" @click="handleDevClick">
        <div class="list__item__icon iconfont">&#xe6f9;</div>
        <div class="list__item__label">Gifts & Coupons</div>
        <div class="list__item__arrow iconfont">&#xe743;</div>
      </div>
      <div class="list__item" @click="handleDevClick">
        <div class="list__item__icon iconfont">&#xe752;</div>
        <div class="list__item__label">Help</div>
        <div class="list__item__arrow iconfont">&#xe743;</div>
      </div>
    </div>
    <div class="logout" @click="handleLogout">Logout</div>
  </div>
  <Dock :currentIndex="3"/>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { get } from '../../utils/req'
import Dock from '../HomePage/Dock.vue'

// get user information from API
const useUserEffect = () => {
  const profile = reactive({ id: '', username: '' })
  const getUserInfo = async () => {
    const result = await get('/api/user/info')
    if (result?.errno === 0 && result?.data) {
      const { id, username } = result.data
      profile.id = id || ''
      profile.username = username || ''
    }
  }
  getUserInfo()
  return profile
}

export default {
  name: 'PersonalInfo',
  components: { Dock },
  setup () {
    const myRouter = useRouter()
    const handleLogout = () => {
      localStorage.removeItem('loggedIn')
      myRouter.replace({ name: 'Login' })
    }
    // redirect to address list page
    const handleAddressClick = () => {
      myRouter.push({ name: 'MyAddressList' })
    }
    // in development features
    const handleDevClick = () => {
      myRouter.push({ name: 'Home' })
    }
    const profile = useUserEffect()
    return { handleLogout, handleAddressClick, handleDevClick, profile }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  background: #f5f5f7;
}
.index {
  position: relative;
  height: 1.5rem;
  background-image: linear-gradient(239deg, #ff3366 0%, #577399 100%);
  padding-top: .4rem;
  color: $content-font-color;
  font-family: $content-font;
  &__info {
    margin: .3rem .18rem 0 .18rem;
    padding-top: .46rem;
    height: .66rem;
    background: #FFF;
    border-radius: .08rem;
    &__user {
      font-size: .24rem;
      color: #545463;
      text-align: center;
      line-height: .36rem;
    }
    &__id {
      margin-top: .04rem;
      font-size: .14rem;
      color: #C1C0C9;
      text-align: center;
    }
  }
  &__avatar {
    position: absolute;
    left: 50%;
    top: .2rem;
    transform: translateX(-50%);
    width: .94rem;
    height: .94rem;
    border-radius: 50%;
  }
}
.list {
  margin: .16rem .18rem 0 .18rem;
  background: #FFF;
  box-shadow: 0 .08rem .16rem 0 rgba(0, 0, 0, .08);
  border-radius: .08rem;
  font-family: $content-font;
  &__item {
    display: flex;
    padding: .2rem;
    line-height: .22rem;
    font-size: .14rem;
    color: #262626;
    &__icon {
      margin-right: .12rem;
      width: .22rem;
      height: .22rem;
      background: $content-light-color;
      border-radius: .08rem;
      text-align: center;
      font-weight: bold;
      color: $content-font-color;
    }
    &__label {
      flex: 1;
    }
    &__arrow {
      width: .2rem;
      transform: rotate(180deg);
      font-weight: bold;
      color: #C2C4CA;
    }
  }
}
.logout {
  margin: .18rem;
  line-height: .32rem;
  background: $content-highlight-color;
  font-family: $content-font;
  color: $content-bg-color;
  text-align: center;
  border-radius: .04rem;
}
</style>
