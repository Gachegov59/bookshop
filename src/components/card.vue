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
                button.card__button.btn.btn-light(@click="sendPrice") Добавить в корзину

</template>

<script>
    // import axios from 'axios';

    export default {
        name: 'item',
        data() {
            return {
            }
        },
        components: {},
        props: {
            card_data:{
                type:Object,
                default(){
                    return{}
                }
            }
        },
        computed: {},
        methods: {
            sendPrice() {
                this.$emit('sendPrice', this.card_data.price)
            }
        }
        // mounted() {
        //
        //     axios
        //         .get('../ajax/data.json')
        //         .then(response => {
        //             this.items = response.data
        //             console.log(response.data)
        //             console.log('price',response.data[0].price)
        //             console.log('тип', typeof(response.data) )
        //         });
        //
        // }
    }
</script>


<style lang="scss" scoped>

    .card {
        margin: 0 10px 20px ;
        /*flex-basis: 23%;*/

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
    }
</style>
