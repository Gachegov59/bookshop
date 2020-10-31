<template lang="pug">
    .col-6.col-sm-4.col-md-3.col-lg-2
        .card(:class="{_active: book_data.quantity > 0}" :key="book_data.id")
            img( :src="book_data.image" )
            .card__content
                .card__title.bold(:title="book_data.title") {{ book_data.title }}
                .card__author(:title="book_data.author") {{ book_data.author }}
            .card__price
                fa-icon(icon="ruble-sign"  style="color:grey" ).mr-1
                .fa.fa-rub {{ book_data.price }}
            .card__button-wrap
                button.card__button.btn.btn-light(@click="addInCart" ) В корзину  <span v-if='book_data.quantity>0' >- {{book_data.quantity}} шт.</span>
                fa-icon.card__button-icon(

                    @click="removeInCart"
                    icon="minus"
                    v-if="book_data.quantity")

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
                this.$emit('addBook',this.book_data) // отправка в родителя -> content
                // this.num++
            },
            removeInCart() { // Убираем из карзины - стчетчик на карте
                this.$emit('removeBook',this.book_data, this.book_data.id) // отправка в родителя -> content
                // console.log('this.book_data.id', this.book_data.id)
                // this.num <= 1 ? this.num = null : this.num-- ;
            },
        }

    }

</script>

<style lang="scss" scoped>
    .card {
        margin-bottom:  20px;
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
        overflow: hidden;

        &._active {
            background: rgb(0 255 141 / 20%);
        }

        img {
            height: 250px;
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
            /*    content: 'f068';*/ //todo:решить добовление иконок классом
            /*}*/
        }
    }
</style>
