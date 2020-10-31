<template lang="pug">

    .cart__popup-item(:key="cart_item.id")
        img( :src="cart_item.image")
        .cart__popup-content
            .cart__popup-title  {{cart_item.title}}
            .cart__popup-author  {{cart_item.author}}
            fa-icon(icon="ruble-sign"  style="color:grey" )
            .cart__popup-price  {{cart_item.price}}
            .cart__popup-price <span v-show='cart_item.quantity>0' > - {{cart_item.quantity}} шт.</span>
                fa-icon.cart__popup-delete(
                    @click="removeInCart"
                    icon="minus"
                )

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
            logStateProducts() {
                return console.log('state.products', this.$store.state.products)
            },
            logStateCartArr() {
                return console.log('state.artArr', this.$store.state.cartArr)
            }
        },
        methods: {
            removeInCart() { // Убираем из карзины - стчетчик на карте
                this.$emit('removeBook', this.cart_item, this.cart_item.id) // отправка в родителя -> content
                console.log('this.cart_item.id', this.cart_item.id)
            },
        },
        mounted() {
            // this.$set(this.cart_item, 'quantity', 1)
        }
    }

</script>

<style lang="scss">
    .cart__popup {
        position: absolute;
        background: white;
        box-shadow: 5px 4px 12px 1px rgba(black, .5);
        top: 60px;
        z-index: 999;
        visibility: hidden;
        opacity: 0;
        transition: all .1s ease;
        width: 200px;
        right: 0;

        h4 {
            padding: 5px 10px;
            font-size: 22px;
            color: $accent;

        }

        &._isOpen {
            visibility: visible;
            opacity: 1;
        }

        &-content {
            width: 100%;
        }

        &-item {
            display: flex;
            margin-bottom: 10px;
            padding: 0 10px;

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
