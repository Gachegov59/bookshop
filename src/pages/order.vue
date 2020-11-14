<template lang="pug">
    .container
        .row.mt-2
            .col-12.col-md-8
                h2(v-if="cart_data.length") Итог: {{this.sum}} руб.  {{getSumm()}}
                .cart__wrap._order
                    cartPopupItem.border-bottom(v-for="(item, i) in cart_data"
                        :key="i"
                        :cart_item="item"
                        @removeBook="removeBook",
                        @addBook="addBook" )
                router-link(:to="{name: 'catalog'}")
                    btn.btn._btn-outline.mt-2 Назад
</template>

<script>
    import cartPopupItem from '../components/cartPopupItem';
    import {mapActions, mapGetters} from "vuex";
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
                sum: 0,
                quantity: 0,
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
        ])
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
        }
    }
</script>

<style scoped lang="scss">

</style>