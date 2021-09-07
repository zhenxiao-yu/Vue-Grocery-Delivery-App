<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__info">
        <div class="header__info__user">{{userInfo.username}}</div>
        <div class="header__info__id">ID:{{userInfo.id}}</div>
      </div>
      <img
        class="header__avatar"
        src="https://loanalexa.com/wp-content/uploads/2016/12/testimonial1.png"
      />
    </div>
    <div class="list">
      <div class="list__item" @click="handleAddressClick">
        <div class="list__item__icon iconfont">&#xe617;</div>
        <div class="list__item__test">My Address</div>
        <div class="list__item__arrow iconfont">&#xe6f2;</div>
      </div>
      <div class="list__item" @click="handleAddressClick">
        <div class="list__item__icon iconfont">&#xe617;</div>
        <div class="list__item__test">Help Center</div>
        <div class="list__item__arrow iconfont">&#xe6f2;</div>
      </div>
      <div class="list__item" @click="handleAddressClick">
        <div class="list__item__icon iconfont">&#xe617;</div>
        <div class="list__item__test">My Wallet</div>
        <div class="list__item__arrow iconfont">&#xe6f2;</div>
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

const useUserEffect = () => {
  const userInfo = reactive({ id: '', username: '' })
  const getUserInfo = async () => {
    const result = await get('/api/user/info')
    if (result?.errno === 0 && result?.data) {
      const { id, username } = result.data
      userInfo.id = id || ''
      userInfo.username = username || ''
    }
  }
  getUserInfo()
  return userInfo
}

export default {
  name: 'PersonalInfo',
  components: { Dock },
  setup () {
    const router = useRouter()
    const handleLogout = () => {
      localStorage.removeItem('loggedIn')
      router.replace({ name: 'Login' })
    }
    const handleAddressClick = () => {
      router.push({ name: 'MyAddressList' })
    }
    const userInfo = useUserEffect()
    return { handleLogout, handleAddressClick, userInfo }
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
.header {
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
      color: #262628;
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
      background: $content-highlight-color;
      border-radius: .08rem;
      text-align: center;
      font-weight: bold;
      color: $content-bg-color;
    }
    &__test {
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
