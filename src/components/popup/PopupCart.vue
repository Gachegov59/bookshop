<template lang="pug">

    .cart__popup(
        :class="{_isOpen: cardOpen}"
        v-if="cart_data.length"
    )
        //h4(v-if="cart_data.length") Итог: {{this.sum}} руб.
        .cart__wrap.scroll
            AppCartItem.border-bottom(v-for="(item, i) in cart_data"
                :key="i"
                :cart_item="item"
                @removeBook="removeBook",
                @addBook="addBook" )
        .cart__btns
            .cart__btn
                //:todo проверить params in router-link
                router-link(:to="{name: 'order', params: {cart_data: CART}}")
                    BaseButton.btn._btn-outline Купить:  <span class="cart__price"> {{this.sum}} </span>
                        fa-icon(icon="ruble-sign")
            .cart__close( @click="openCard")
                BaseButton.btn._btn-outline  Закрыть

</template>

<script>
import AppCartItem from './AppCartItem.vue'
import {mapActions, mapGetters} from 'vuex'
import BaseButton from './ui/BaseButton.vue'

export default {
    name: 'cart',
    components: {
        AppCartItem,
        BaseButton,
    },
    data() {
        return {
            sum: 0,
            quantity: 0,
            cardOpen: false
        }
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    computed: {
        ...mapGetters([
            // 'CART',
            'CART'
        ]),
        log() {
            return console.log('log', this.$store.state.cartArr)
        },
        // eslint-disable-next-line vue/return-in-computed-property

    },
    methods: {
        ...mapActions([
            'ADD_BOOK',
            'REMOVE_BOOK'
        ]),
        removeBook(data, i) {
            this.REMOVE_BOOK(data, i)
            // console.log('REMOVE_BOOK(i)', i)
        },
        addBook(data, i) {
            this.ADD_BOOK(data, i)
            // console.log('REMOVE_BOOK(i)', i)
        },
        getSumm() {
            let quantity = 0
            let sum = 0
            for (let i = 0; i < this.CART.length; i++) {
                quantity += this.CART[i].quantity
                sum += this.CART[i].quantity * this.CART[i].price
            }
            this.quantity = quantity
            this.sum = sum

        },
        openCard() {
            return this.cardOpen = !this.cardOpen
        }
    },
    watch: {
        cartOpen() {
            console.log('rtr')
            if (this.cart_data.length < 1) {

                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                return this.cardOpen = false;
            }
        }
    }
}


</script>

<style lang="scss">
.cart {
    display: flex;
    align-items: center;

    &__info {
        padding: 10px;
    }

    &__btns {
        padding: 0 10px;

        button {
            width: 100%;
            font-size: 16px;
        }
    }

    &__btn {
        margin-top: 20px;
    }

    &__close {
        margin-top: 10px;
    }

    &__popup {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: fixed;
        background: white;
        box-shadow: 5px 4px 12px 1px rgba(black, .5);
        z-index: 999;
        visibility: hidden;
        opacity: 0;
        transition: all .1s ease;
        width: 200px;
        right: 0;
        top: 0;
        bottom: 0;
    }

    &__wrap {
        overflow-y: auto;
        flex-grow: 1;
    }

    &__controls {
        margin-top: auto;
    }

    &__basket {
        width: 50px;
        //height: 30px;

        .fa-layer {
            font-size: 30px;
        }

        svg {
            font-size: 3rem;
            color: $base;
        }

        span {
            font-size: 1.3rem;
            //padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            border-radius: 100%;
            width: 2rem;
            height: 2rem;
            background: $accent;
            color: white;
            top: -2rem;
            right: 1.2rem;
        }
    }


}
</style>
