<template lang="pug">

    .cart__popup-item
        img( :src="cart_item.image")
        .cart__popup-content
            .cart__popup-title  {{cart_item.title}}
            .cart__popup-author  {{cart_item.author}}
            fa-icon(icon="ruble-sign"  style="color:grey" )
            .cart__popup-price  {{cart_item.price}}
            .cart__popup-price  -  {{cart_item.quantity}}
                fa-icon.cart__popup-delete(
                    @click="removeInCart"
                    icon="minus"
                )
            div {{log}}}

</template>

<script>
    // import {mapGetters} from 'vuex'

    export default {
        name: 'cartPopupItem',
        components: {},
        data() {
            return {}
        },
        props: {
            cart_item: {
                type: Object,
                default() {
                    return []
                }
            }
        },
        computed: {
            log() {
                return console.log('log', this.$store.state.products)
            }
        },
        methods: {
            removeInCart() { // Убираем из карзины - стчетчик на карте
                this.$emit('removeBook', this.cart_item) // отправка в родителя -> content
            },
        },
        mounted() {
            // this.$set(this.cart_item, 'quantity', 1)
        }
    }

</script>

<style lang="scss">
    .cart__popup {
        &-item {
            display: flex;
            margin-bottom: 10px;

            img {
                max-height: 100px;
                margin-right: 10px;
            }
        }
        &-title {
            text-overflow: ellipsis;
            overflow: hidden;
        }
        &-content {
            position: relative;
            overflow: hidden;
        }
        &-price {
            display: inline;
        }

        &-delete {
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
            right: 10px;
            z-index: 1000;
            cursor: pointer;

            path {
                fill: red;
            }

            &:hover {
                transition: all .3s ease;
                transform: translate(0, -50%) scale(1.5);
            }
        }
    }
</style>
