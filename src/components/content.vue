<template lang="pug">
    main
        .container.py-0
            AppFilters
        .container
            .items
                .row
                    AppBook(v-for="(item, i) in PRODUCTS"
                        :key="i"
                        :book_data="item"
                        @addBook="addBook"
                        @removeBook="removeBook" )
</template>

<script>
    import AppBook from './book'
    import AppFilters from './filters.vue'
    import {mapActions, mapGetters} from 'vuex'
    export default {
        data() {
            return {
            }
        },
        components: {
            AppBook,
            AppFilters
        },
        computed: {
            ...mapGetters([
                'PRODUCTS'
            ])
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_BOOK',
                'REMOVE_BOOK'
            ]),
            addBook(data, i){
                this.ADD_BOOK(data,i)
            },
            removeBook(data){
                this.REMOVE_BOOK(data)
            }
        },
        mounted() {
           this.GET_PRODUCTS_FROM_API() // Получаем данные для распакаовки v-for
            .then((response) =>{
                if(response.data){
                    console.log('data пришла')
                }
            })
        }
    }

</script>

<style lang="scss">

</style>
