<template lang="pug">

    .cart__popup-item(:key="cart_item.id")
        img( :src="cart_item.picture")
        .cart__popup-content
            .cart__popup-title  {{cart_item.title}}
            .cart__popup-author  {{cart_item.author}}
            .cart__popup-price  {{cart_item.price}}
                fa-icon(icon="ruble-sign" )
                <span v-show='cart_item.quantity>0' > - {{cart_item.quantity}} шт.</span>
            .cart__popup-controls
                .cart__popup-btn
                    fa-icon(
                        icon="minus"
                        @click="removeInCart"
                    )
                .cart__popup-btn
                    fa-icon(
                        icon="plus"
                        @click="addInCart"
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
            addInCart() { // Добовляем в карзину + стчетчик на карте
                this.$emit('addBook', this.cart_item, this.cart_item.id) // отправка в родителя -> content
            },
        },
        mounted() {
            // this.$set(this.cart_item, 'quantity', 1)
        }
    }

</script>

<style lang="scss">
    .cart__popup {

        h4 {
            padding: 5px 10px;
            font-size: 22px;
            color: $accent;

        }

        &._isOpen {
            visibility: visible;
            opacity: 1;
        }
        &-controls {
            margin-top: auto;
            display: flex;
            justify-content: flex-start;
        }
        &-btn {
            font-size: 14px;
            background: rgba($base, 0.2);
            padding: 4px 6px;
            border-radius: 5px;
            margin-right: 5px;
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: all .3s ease;
            &:hover {
                opacity: .8;
            }
        }
        &-content {
            width: 100%;
        }
        &-price {
            svg {
                color: $accent;
            }
        }
        &-item {
            display: flex;
            padding: 5px 10px;
            ._order & {
                padding: 5px 0;
            }
            img {
                max-height: 100px;
                margin-right: 10px;
            }
        }

        &-title {
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 16px;
            line-height: 16px;
        }
        &-author {
           color: gray;
        }

        &-content {
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        &-price {
            display: inline;
            font-size: 16px;
        }

        /*&-delete {*/

        /* */
        /*}*/
    }
</style>
