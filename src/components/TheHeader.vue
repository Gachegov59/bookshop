<template lang="pug">
    header.header(v-scroll="getScroll" :class="{_active: this.headerScroll}")
        .container
            .header__wrap
                .header__item
                    .header__logo
                        router-link(:to="{name: 'home'}" )
                            include ../img/logo.svg
                    .header__info
                        h1.header__title <span>book</span>shop
                        a(href="tel:+79128888888").header__phone 8912888888


                nav.header__nav {{route()}}
                    .header__nav-item(@click="openPopupRegister")
                        fa-icon(icon="user-alt"  )
                        span Профиль

                    .header__nav-item(@click="openPopupAuth")
                        //router-link(:to="{name: 'seller'}")
                        fa-icon(icon="user-alt"  )
                        span Вход

                    .header__nav-item
                        fa-icon(icon="shopping-cart" @click="openCard" cart_data="CART"  v-show="this.path === '/vue/' || this.path === '/vue' || this.path === '/'")
                            //span(v-if="cart_data.length") {{this.quantity}}  {{getSumm()}}
                        span Корзина

            popupRegister
            popupAuth

</template>

<script>
// import AppCart from './AppCart'
import BaseButton from '../components/ui/BaseButton'
import {mapGetters} from "vuex";
import Vue from 'vue'
import popupRegister from '../components/popup/popupRegister'
import popupAuth from '../components/popup/popupAuth'

Vue.directive('scroll', {
    inserted: function (el, binding) {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
    }
})
export default {
    name: "TheHeader",
    components: {
        // AppCart,
        BaseButton,
        popupRegister,
        popupAuth
    },

    data() {
        return {
            path: '/vue/',
            headerScroll: false
        }
    },
    computed: {
        ...mapGetters([
            'CART'
        ])
    },

    methods: {
        openPopupRegister() {
            this.$modal.show('popupRegister');
            console.log(123)
        },
        openPopupAuth() {
            this.$modal.show('popupAuth');
            console.log(123)
        },
        route() {
            this.path = this.$route.path
            // console.log(this.$route.path)
        },
        getScroll(e) {
            let headerActive = this.headerScroll
            headerActive = e.target.documentElement.scrollTop > 2;
            this.headerScroll = headerActive
        },
        openCard() {
            return this.cardOpen = !this.cardOpen
        }

    },


}
</script>

<style lang="scss">
.header {
    margin-top: 10px;
    padding: 5px 0 5px;
    background: white;
    position: sticky;
    top: 0;
    z-index: 10;
    font-family: $RobotoCondensed;
    font-weight: 300;

    &._active {
        transition: all .3s ease;
        box-shadow: 0 8px 6px -6px black;
    }

    &__item {
        display: flex;
    }

    &__wrap {
        display: flex;
        justify-content: space-between;
    }

    &__nav {
        display: flex;
    }

    &__nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 1rem;
        cursor: pointer;
        width: 50px;
        //height: 30px;
        span {
            font-size: 1.2rem;
            line-height: 2rem;
        }
        &:hover {
            svg {
                color: $accent;
            }
        }


        svg {
            font-size: 3rem;
            height: auto;
            color: $base;
            cursor: pointer;
            transition: all .3s ease;
        }
    }

    &__logo {
        display: flex;

        svg {
            height: 45px;
            width: 70px;
            margin-right: 5px;
            @include tablet {
                height: 40px;
                width: 50px;
            }
        }


    }

    &__info {
        display: flex;
        flex-direction: column;
        //justify-content: space-between;
    }

    &__title {
        text-transform: uppercase;
        font-weight: 600;
        color: $base;
        font-size: 2.5rem;
        line-height: 2.5rem;
        margin-bottom: 0;
        @include tablet {
            font-size: 2rem;
            line-height: 2rem;
        }
        @include phone {
            font-size: 1.8rem;
            line-height: 2rem;
        }

        span {
            color: $accent;
        }

    }

    &__phone {
        font-size: 20px;
        line-height: 18px;
        transition: all .3s ease;
        color: $base;

        &:hover {
            color: $accent;
            text-decoration: none;
        }
    }

    //&__basket {
    //    width: 50px;
    //    height: 30px;
    //    cursor: pointer;
    //
    //    .fa-layer {
    //        font-size: 30px;
    //    }
    //
    //    svg {
    //        font-size: 3rem;
    //        color: $base;
    //    }
    //
    //    span {
    //        font-size: 1.3rem;
    //        //padding: 1rem;
    //        display: flex;
    //        align-items: center;
    //        justify-content: center;
    //        position: absolute;
    //        border-radius: 100%;
    //        width: 2rem;
    //        height: 2rem;
    //        background: $accent;
    //        color: white;
    //        top: -2rem;
    //        right: 1.2rem;
    //    }
    //}

}
</style>
