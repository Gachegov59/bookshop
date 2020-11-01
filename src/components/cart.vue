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
            cartPopupItem.border-bottom(v-for="(item, i) in cart_data"
                :key="i"
                :cart_item="item"
                @removeBook="removeBook" )


</template>

<script>
    import cartPopupItem from './cartPopupItem.vue'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: 'cart',
        components: {
            cartPopupItem
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
        position: relative;

        &__info {
            padding: 10px;
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
