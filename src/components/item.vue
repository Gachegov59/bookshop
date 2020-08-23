<template lang="pug">
    .row
        .col-6.col-sm-4.col-lg-3(v-for="item in items" )
            .card.shadow-sm
                img( :src="item.image" )
                .card__content
                    .card__title.bold(:title="item.title") {{ item.title }}
                    .card__author(:title="item.author") {{ item.author }}
                .card__price
                    fa-icon(icon="ruble-sign"  style="color:grey" ).mr-1
                    .fa.fa-rub {{ item.price }}
                button.card__button.btn.btn-light Добавить в корзину

</template>

<script>
    import axios from 'axios';

    export default {
        name: 'item',
        data() {
            return {
            items: null
            }
        },
        components: {},
        mounted() {
            axios
                .get('../ajax/data.json')
                .then(response => {
                    this.items = response.data
                    console.log(response.data)
                    console.log('price',response.data[0].price)
                    console.log('тип', typeof(response.data) )
                });
                // .then(function (response) {
                //     return this.items = response
                // })
        }
    }

</script>


<style lang="scss" scoped>

    .card {
        margin-bottom: 20px;
        img {
            height: 350px;
            object-fit: cover;
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
    }
</style>
