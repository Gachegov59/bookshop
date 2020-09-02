<template lang="pug">
    .cart
        .cart__info.border-left Итого:   руб
        .cart__info.border-left корзина ({{CNT}})

        .cart__popup(v-if="cart_data.length")
            h4 покупка
            cartPopupItem(v-for="(item, i) in cart_data"
                :key="i"
                :cart_item="item"
                @removeBook="removeBook(i)" )



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
            return {}
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
                'CNT'
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
            removeBook(i) {
                this.REMOVE_BOOK(i)
                console.log(i)
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
        }
    }
</style>
