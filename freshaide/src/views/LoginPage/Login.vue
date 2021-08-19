<template>
  <div class="wrapper">
    <img class="wrapper__profile-img" src="../../images/Avatar.png"/>
    <div class="wrapper__input">
      <input class="wrapper__input__form" placeholder="Phone Number" />
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__form"  placeholder="Password" />
    </div>
    <div class="wrapper__submit">Submit</div>
    <div class="wrapper__register">New to freshaide? Register today</div>
  </div>
</template>

<script>
export default {
  name: 'Login'
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
    background: #F9F9F9;
    border: 1px solid rgba(0,0,0,0.10);
    border-radius: 6px;
    border-radius: 6px;
    &__form {
      line-height: .48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: .16rem;
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
    color: #fff;
    font-size: .16rem;
    text-align: center;
    font-family: $content-font;
  }
  &__register {
    text-align: center;
    font-size: .14rem;
    font-family: $content-font;
    color: $content-border-color;
  }
}
</style>
