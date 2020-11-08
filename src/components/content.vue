<template lang="pug">
        main
            .container.py-0
                filters(@sort="sort")
            .container
                .items
                    .row
                        book(v-for="(item, i) in filteredProduct"
                            :key="i"
                            :book_data="item"
                            @addBook="addBook"
                            @removeBook="removeBook" )


</template>

<script>
    import book from './book'
    import filters from './filters.vue'
    import {mapActions, mapGetters} from 'vuex'
    // import firebase from "firebase";
    // import  db from "../vuex/db"

    export default {
        data() {
            return {
                productSort: []
            }
        },
        components: {
            book,
            filters
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART'
            ]),
            filteredProduct() {
                if (this.productSort.length) {
                    return this.productSort
                } else {
                    return this.PRODUCTS
                }
            }
        },
        methods: {
            ...mapActions([
                //'GET_PRODUCTS_FROM_FIREBASE',
                'GET_PRODUCTS_FROM_API',
                'ADD_BOOK',
                'REMOVE_BOOK'
            ]),
            addBook(data, i) {
                this.ADD_BOOK(data, i)
            },
            removeBook(data, id) {
                this.REMOVE_BOOK(data, id)
                // console.log('REMOVE_BOOK', id)
            },
            sort(e) {
                let timePRODUCTS = this.PRODUCTS.slice()
                if (e === 'low') {
                    this.productSort = timePRODUCTS.sort((prev, curr) => prev.price - curr.price)
                }
                if (e === 'high') {
                    this.productSort = timePRODUCTS.sort((prev, curr) => curr.price - prev.price)
                }
                if (e === 'standard') {
                    this.productSort = this.PRODUCTS
                }
            }
        },
        // created() {
        //     var database = firebase.database();
        //     console.log('db', database);
        // }, 
        mounted() {
            //this.GET_PRODUCTS_FROM_FIREBASE() // Получаем данные для распакаовки v-for
            this.GET_PRODUCTS_FROM_API() // Получаем данные для распакаовки v-for
            // .then((response) =>{
            //     if(response){
            //         console.log('data пришла')
            //     }
            // })

        }


    }

</script>

<style lang="scss">

</style>
