<template lang="pug">
    main
        .container.py-0
            filters
        .container
            .items
                .row
                    book(v-for="(item, i) in PRODUCTS"
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
            }
        },
        components: {
            book,
            filters
        },
        computed: {
            ...mapGetters([
                'PRODUCTS'
            ])
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_FIREBASE',
                'ADD_BOOK',
                'REMOVE_BOOK'
            ]),
            addBook(data, i){
                this.ADD_BOOK(data,i)
            },
            removeBook(data, id){
                this.REMOVE_BOOK(data,id)
                // console.log('REMOVE_BOOK', id)
            }
        },
        // created() {
        //     var database = firebase.database();
        //     console.log('db', database);
        // }, 
        mounted() {
           this.GET_PRODUCTS_FROM_FIREBASE() // Получаем данные для распакаовки v-for
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
