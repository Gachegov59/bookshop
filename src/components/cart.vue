<template lang="pug">
    .cart
        .cart__info.border-left Итого:  {{this.sum }} руб
        .cart__info.border-left корзина ({{getSumm()}} {{this.quantity }})

        .cart__popup(v-if="cart_data.length")
            h4 покупка
            cartPopupItem(v-for="(item, i) in cart_data"
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
                quantity: 0
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
                console.log('REMOVE_BOOK(i)',i)
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

        &__popup {
            position: absolute;
            background: white;
            padding: 10px;
            box-shadow: 5px 4px 12px 1px rgba(black, .5);
            width: 100%;
            top: 50px;
            z-index: 999;
            &-content {
                width: 100%;
            }
        }
    }
</style>
