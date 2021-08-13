<template>
    <div class="wrapper">
        <img class="wrapper__avatar" src="../../images/Avatar.png">
        <!-- input element 1 -->
        <div class="wrapper__form">
            <input class="wrapper__form__input" placeholder="Please Enter Username" />
        </div>
        <!-- input element 2 -->
        <div class="wrapper__form">
            <input class="wrapper__form__input" placeholder="Please Enter Password"/>
        </div>
        <div clsss="wrapper__login-button">Submit</div>
        <div clsss="wrapper__login-link">Register</div>
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

.wrapper{
    // container element
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    &__avatar {
        display: block;
        margin: 0 auto 0.4rem auto;
        width: 0.80rem;
        height: 0.80rem;
    }
    &__form {
        height: 0.48rem;
        margin: 0 0.4rem 0.16rem 0.4rem;
        padding: 0 0.16rem;
        background: $content-bg-color;
        border: 1px solid rgba(0,0,0,0.10);
        border-radius: 6px;
        &__input{
            color: $content-font-color;
            font-family: $content-font;
            font-weight: 500;
            line-height: 0.48rem;
            border: none;
            outline: none;
            width: 100%;
            background: none;
            font-size: 0.16rem;
            &::placeholder {
                color: rgba(0,0,0,0.25);
            }
        }
    }
    &__login-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    border-radius: .04rem;
    color: #fff;
    font-size: .16rem;
    text-align: center;
  }
  &__login-link {
    text-align: center;
    font-size: .14rem;
    color: $content-highlight-color;
  }
}
</style>
