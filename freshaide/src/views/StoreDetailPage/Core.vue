<template>
    <div class="core">
        <div class="type">
            <div class="type__item type__item--active">All Items</div>
            <div class="type__item">Sale</div>
            <div class="type__item">Fruits</div>
            <div class="type__item">Snacks</div>
            <div class="type__item">Cloths</div>
        </div>
        <div class="product">
            <div class="product__item">
                <img class="product__item__img" src="https://www.alportsyndrome.org/wp-content/uploads/2015/11/Kidney-reverse.jpg" />
                <div class="product__item__info">
                    <h4 class="product__item__title">Donor's kidney</h4>
                    <p class="product__item__sales"> Monthly Sales: 437+</p>
                    <p class="product__item__price">
                        <span class="product__item__cad">&#36;</span>4,999 ea
                        <span class="product__item__origin">&#36;5,580 ea</span>
                    </p>
                </div>
            </div>
            <div class="product__item">
                <img class="product__item__img" src="https://www.alportsyndrome.org/wp-content/uploads/2015/11/Kidney-reverse.jpg" />
                <div class="product__item__info">
                    <h4 class="product__item__title">Donor's kidney</h4>
                    <p class="product__item__sales"> Monthly Sales: 437+</p>
                    <p class="product__item__price">
                        <span class="product__item__cad">&#36;</span>4,999 ea
                        <span class="product__item__origin">&#36;5,580 ea</span>
                    </p>
                </div>
            </div>
            <div class="product__item">
                <img class="product__item__img" src="https://www.alportsyndrome.org/wp-content/uploads/2015/11/Kidney-reverse.jpg" />
                <div class="product__item__info">
                    <h4 class="product__item__title">Donor's kidney</h4>
                    <p class="product__item__sales"> Monthly Sales: 437+</p>
                    <p class="product__item__price">
                        <span class="product__item__cad">&#36;</span>4,999 ea
                        <span class="product__item__origin">&#36;5,580 ea</span>
                    </p>
                </div>
            </div>
            <div class="product__item">
                <img class="product__item__img" src="https://www.alportsyndrome.org/wp-content/uploads/2015/11/Kidney-reverse.jpg" />
                <div class="product__item__info">
                    <h4 class="product__item__title">Donor's kidney</h4>
                    <p class="product__item__sales"> Monthly Sales: 437+</p>
                    <p class="product__item__price">
                        <span class="product__item__cad">&#36;</span>4,999 ea
                        <span class="product__item__origin">&#36;5,580 ea</span>
                    </p>
                </div>
            </div>
            <div class="product__item">
                <img class="product__item__img" src="https://www.alportsyndrome.org/wp-content/uploads/2015/11/Kidney-reverse.jpg" />
                <div class="product__item__info">
                    <h4 class="product__item__title">Donor's kidney</h4>
                    <p class="product__item__sales"> Monthly Sales: 437+</p>
                    <p class="product__item__price">
                        <span class="product__item__cad">&#36;</span>4,999 ea
                        <span class="product__item__origin">&#36;5,580 ea</span>
                    </p>
                </div>
            </div>
            <div class="product__item">
                <img class="product__item__img" src="https://www.alportsyndrome.org/wp-content/uploads/2015/11/Kidney-reverse.jpg" />
                <div class="product__item__info">
                    <h4 class="product__item__title">Donor's kidney</h4>
                    <p class="product__item__sales"> Monthly Sales: 437+</p>
                    <p class="product__item__price">
                        <span class="product__item__cad">&#36;</span>4,999 ea
                        <span class="product__item__origin">&#36;5,580 ea</span>
                    </p>
                </div>
            </div>
            <div class="product__item">
                <img class="product__item__img" src="https://www.alportsyndrome.org/wp-content/uploads/2015/11/Kidney-reverse.jpg" />
                <div class="product__item__info">
                    <h4 class="product__item__title">Donor's kidney</h4>
                    <p class="product__item__sales"> Monthly Sales: 437+</p>
                    <p class="product__item__price">
                        <span class="product__item__cad">&#36;</span>4,999 ea
                        <span class="product__item__origin">&#36;5,580 ea</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
//import predefined scss files
@import "../../style/variables.scss";

.core {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 1.7rem;
    bottom: 0.5rem;
}
.type {
    overflow-y: scroll;
    height: 100%;
    width: 0.76rem;
    background: $content-bg-color;
    &__item {
        line-height: 0.4rem;
        text-align: center;
        font-size: 0.14rem;
        font-family: $content-font;
        color: $content-font-color;
        &--active {
            background: rgba(0, 0, 0, 0.15);
            font-weight: bold;
        }
    }
}
.product {
    overflow-y: scroll;
    flex: 1;
    &__item {
        display: flex;
        padding: 0.12rem 0;
        margin: 0 0.16rem;
        border-bottom: 1px solid $content-bg-color;
        &__img {
            width: 0.68 rem;
            height: 0.68rem;
            margin-right: 0.16rem;
        }
        &__title {
            margin: 0;
            line-height: 0.2rem;
            font-size: 0.14rem;
            font-family: $content-font;
            color: $content-font-color;
        }
        &__sales {
            margin: 0.06rem 0;
            line-height: 0.16rem;
            font-size: 0.12rem;
            font-family: $content-font;
            color: $content-font-color;
        }
        &__price {
            margin: 0;
            line-height: 0.2rem;
            font-size: 0.14rem;
            font-family: $content-font;
            color: $content-highlight-color;
        }
        &__cad{
                font-size: 0.12rem;
        }
        &__origin {
            line-height: 0.2rem;
            font-size: 0.12rem;
            color: rgba(0, 0, 0, 0.35);
            text-decoration: line-through;
            margin-left: 0.06rem;
        }
    }
}
</style>
