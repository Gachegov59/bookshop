<template lang="pug">
    .container
        h4(v-if="cart_data.length") Итог: {{this.sum}} руб.
        .cart__wrap.scroll
            cartPopupItem.border-bottom(v-for="(item, i) in cart_data"
                :key="i"
                :cart_item="item"
                @removeBook="removeBook" )
        router-link(:to="{name: 'catalog'}")
            btn.btn.btn-warning Назад
</template>

<script>
    import cartPopupItem from '../components/cartPopupItem';
    import {mapActions} from "vuex";
    // import  btn from './ui/btn.vue'
    import  btn from '../components/ui/btn.vue'
    export default {
        name: "order",
        components: {
            cartPopupItem,
            btn
        },
        data() {
            return {

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

<style scoped lang="scss">

</style>