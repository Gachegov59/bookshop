<template lang="pug">

    .cart
        fa-layer.cart__basket
            fa-icon(icon="shopping-cart" @click="openCard")
            span(v-if="cart_data.length") {{this.quantity}}  {{getSumm()}}

        .cart__popup(
            :class="{_isOpen: cardOpen}"
            v-if="cart_data.length"
        )

            h4(v-if="cart_data.length") Итог: {{this.sum}} руб.
            .cart__wrap.scroll
                cartPopupItem.border-bottom(v-for="(item, i) in cart_data"
                    :key="i"
                    :cart_item="item"
                    @removeBook="removeBook" )
            .cart__btn
                //:todo проверить
                router-link(:to="{name: 'order', params: {cart_data: CART}}")
                    btn.btn.btn-warning Купить
            .cart__close( @click="openCard")
                btn.btn.btn-danger закрыть


</template>

<script>
    import cartPopupItem from './cartPopupItem.vue'
    import {mapActions, mapGetters} from 'vuex'
    import  btn from './ui/btn.vue'

    export default {
        name: 'cart',
        components: {
            cartPopupItem,
            btn
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
            }
        },
        methods: {
            ...mapActions([
                'ADD_BOOK',
                'REMOVE_BOOK'
            ]),
            removeBook(data, i) {
                this.REMOVE_BOOK(data, i)
                console.log('REMOVE_BOOK(i)', i)
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
        &__btn {
            margin-top: 20px;
            button {
                width: 100%;
            }
        }
        &__close {
            margin-top: 10px;
            button {
                width: 100%;
            }
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
        &__basket {
            width: 60px;
            height: 100%;

            .fa-layer {
                font-size: 40px;
            }

            svg {
                font-size: 45px;
                color: $base;
            }

            span {
                font-size: 18px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                border-radius: 100%;
                width: 32px;
                height: 32px;
                background: $accent;
                color: white;
            }
        }


    }
</style>
