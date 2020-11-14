<template lang="pug">
    //.col-6.col-sm-4.col-md-3.col-lg-2
    .card(:class="{_active: book_data.quantity > 0}" :key="book_data.id")
        .card__inner
            img( :src="book_data.picture" )
            span.card__btn-quantity(
                v-if='book_data.quantity>0' )
                | {{book_data.quantity}}
            .card__btn(:class='{_show: book_data.quantity > 0}')

                .card__btn-block(v-if="book_data.quantity>0")
                    span.card__btn-remove
                        fa-icon(
                            @click="removeInCart"
                            icon="minus"
                            v-if="book_data.quantity")
                .card__btn-block
                    span.card__btn-add(v-if="book_data.quantity<1")
                        fa-icon(
                            icon="cart-arrow-down"
                            @click="addInCart"
                        )
                    span.card__btn-add(v-else)
                        fa-icon(
                            icon="cart-plus"
                            @click="addInCart"
                        )
        .card__content
            .card__title(:title="book_data.title") {{ book_data.title }}
            .card__author(:title="book_data.author") {{ book_data.author }}
        .card__price
            .fa.fa-rub {{ book_data.price }}
            fa-icon(icon="ruble-sign" ).ml-1

</template>

<script>
    export default {
        name: 'book',
        data() {
            return {
                num: true
            }
        },
        components: {},
        props: {
            book_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        computed: {},
        methods: {
            addInCart() { // Добовляем в карзину + стчетчик на карте
                this.$emit('addBook', this.book_data) // отправка в родителя -> content
                // this.num++
            },
            removeInCart() { // Убираем из карзины - стчетчик на карте
                this.$emit('removeBook', this.book_data, this.book_data.id) // отправка в родителя -> content
                // console.log('this.book_data.id', this.book_data.id)
                // this.num <= 1 ? this.num = null : this.num-- ;
            },
        }


    }

</script>

<style lang="scss" scoped>
    .card {
        flex: 0 0 calc(100% / 6 - 20px);
        margin: 0 10px;
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.175);
        overflow: hidden;
        border: none;
        @include small-desktop {
            flex: 0 0 calc(100% / 5 - 20px);
        }
        @include tablet {
            flex: 0 0 calc(100% / 4 - 20px);
        }
        @include phone {
            flex: 0 0 calc(100% / 3 - 20px);
        }
        @include mobile {
            flex: 0 0 calc(100% / 2 - 20px);
        }

        &:hover {
            .card__btn {
                opacity: 1;
            }
        }

        &._active {
            background: rgba($base, .3);
        }

        img {
            height: 250px;
            object-fit: cover;
            object-position: 0 0;
            @include tablet {
                height: 200px;
            }
        }

        &__inner {
            position: relative;
            display: flex;
            flex-direction: column;
        }

        &__btn {
            background: rgba(white, .6);
            position: absolute;
            bottom: 0;
            opacity: 0;
            width: 100%;
            transition: all .2s ease;
            display: flex;
            justify-content: flex-end;
            padding: 5px 10px;

            &._show {
                opacity: 1;
            }

            &-quantity {
                position: absolute;
                top: 5px;
                right: 5px;
                padding: 2px 2px;
                border-radius: 5px;
                border: 1px solid $base;
                color: $base;
                background: white;
                font-size: 16px;
                min-width: 30px;
                text-align: center;
            }

            &-block {
                background: white;
                padding: 4px 10px;
                border-radius: 5px;
                margin-left: 5px;
                display: flex;
                align-items: center;
                cursor: pointer;
                transition: all .3s ease;

                &:first-of-type {
                    padding: 2px 8px;
                }

                &:hover {
                    background: rgba(white, .8);
                }

                svg {
                    font-size: 25px;
                    color: $base;
                    @include phone {
                        font-size: 15px;
                    }
                }

            }

            &-remove {
                svg {
                    font-size: 20px;
                    @include phone {
                        font-size: 15px;
                    }
                }
            }
        }

        &__content {
            /*border-top: 1px solid gray;*/
            padding: 10px;
        }

        &__price {
            /*border-top: 1px solid rgba(34, 36, 38, 0.1);*/
            display: flex;
            align-items: center;
            padding: 0 10px 5px;
            font-size: 20px;
            font-weight: 500;

            svg {
                color: $accent;
            }
        }

        &__title {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 20px;
        }

        &__author {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            color: gray;
        }

        &__button {
            padding-right: 35px;
            position: relative;
            width: 100%;
            white-space: nowrap;

            &-wrap {
                position: relative;
            }

            &-icon {
                position: absolute;
                z-index: 10;
                right: 10px;
                top: 50%;
                transform: translate(0, -50%);
                cursor: pointer;
                height: 100%;
                width: 20px;

                path {
                    fill: red;
                }

                &:hover {
                    transition: all .3s ease;
                    transform: translate(0, -50%) scale(1.5);
                }

                svg {
                    height: 100%;
                }
            }

            /*&-icon-2 {*/
            /*    content: 'f068';*/
            //todo:решить добовление иконок классом
            /*}*/
        }
    }
</style>
