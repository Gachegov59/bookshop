<template lang="pug">
    .col-6.col-sm-4.col-lg-3
        .card.shadow-sm
            img( :src="card_data.image" )
            .card__content
                .card__title.bold(:title="card_data.title") {{ card_data.title }}
                .card__author(:title="card_data.author") {{ card_data.author }}
            .card__price
                fa-icon(icon="ruble-sign"  style="color:grey" ).mr-1
                .fa.fa-rub {{ card_data.price }}
            .card__button-wrap
                button.card__button.btn.btn-light(@click="addCard" ) Добавить в корзину {{ num }}
                fa-icon(icon="minus" style="color:red" @click="removeCard" ).card__button-icon

</template>

<script>
    export default {
        name: 'item',
        data() {
            return {
                num: null
            }
        },
        components: {},
        props: {
            card_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        computed: {},
        methods: {
            addCard() {
                this.$store.commit('ADD_TO_CART', this.card_data.price)
                this.num++
            },
            removeCard() {
                this.$store.commit('REMOVE_FROM_CART', this.card_data.price)
                this.num <= 1 ? this.num = null : this.num-- ;
            },
        }

    }
</script>

<style lang="scss" scoped>
    .card {
        margin: 0 10px 20px;

        img {
            height: 350px;
            object-fit: cover;
            object-position: 0 0;
            @include tablet {
                height: 200px;
            }
        }

        &__content {
            border-top: 1px solid gray;
            padding: 10px;
        }

        &__price {
            border-top: 1px solid rgba(34, 36, 38, 0.1);
            display: flex;
            align-items: center;
            padding: 10px 20px;
        }

        &__title {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        &__author {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        &__button {
            padding: 10px 25px;
            position: relative;
            width: 100%;
            &-wrap {
                position: relative;
            }
            &-icon {
                position: absolute;
                z-index: 9999;
                left: 15px;
                top: 50%;
                transform: translate(0, -50%);
                cursor: pointer;
                &:hover {
                    transition: all .3s ease;
                    transform: translate(0, -50%) scale(1.5);
                }
            }
            /*&-icon-2 {*/
            /*    content: 'f068';*/ //todo:решить добовление иконок классом
            /*}*/
        }
    }
</style>
