<template lang="pug">
    header.header
        .container
            .header__wrap
                .header__wrap-block
                    .header__logo
                        include ../img/logo.svg
                        .header__logo-content
                            h1.header__title <span>book</span>shop
                            a(href="tel:+79128888888").header__phone 8912888888
                .header__wrap-block
                    cart(:cart_data="CART")

</template>

<script>
    import cart from './cart.vue'
    import {mapGetters} from "vuex";

    export default {
        components: {
            cart
        },
        computed: {
            ...mapGetters([
                'CART'
            ])
        }
    }
</script>

<style lang="scss">
    .header {
        margin-top: 20px;
        position: sticky;
        top: 0;
        background: white;
        z-index: 10;
        &__wrap {
            display: flex;
            justify-content: space-between;

            &-block {
                display: flex;
            }
        }

        &__phone {
            color: black;
            font-weight: 400;
        }

        &__logo {
            display: flex;

            &-content {
                display: flex;
                flex-direction: column;
            }

            svg {
                height: 70px;
                width: 80px;
                margin-right: 10px;
            }

        }

        &__title {
            text-transform: uppercase;
            font-weight: 600;
            color: $base;
            font-size: 3rem;
            line-height: 3rem;

            span {
                color: $accent;
            }
        }

        &__phone {
            font-size: 18px;
            transition: all .3s ease;
            color: $base;
            &:hover {
                color: $accent;
                text-decoration: none;
            }
        }
    }
</style>
