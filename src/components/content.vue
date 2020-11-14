<template lang="pug">
    main
        .container.py-0
            filters(@sort="sort")
        .container
            .items
                book(v-for="(item, i) in filteredProduct"
                    :key="i"
                    :book_data="item"
                    @addBook="addBook"
                    @removeBook="removeBook" )
        //toastification(group="foo")
</template>

<script>
    // import notification from '../plugins/vue-notification'
    import book from './book'
    import filters from './filters.vue'
    import {mapActions, mapGetters} from 'vuex'
    import axios from "axios";
    import toastification from "../plugins/vue-toastification";
    // import firebase from "firebase";
    export default {
        data() {
            return {
                productSort: []
            }
        },
        components: {
            book,
            filters,
            toastification
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

                axios('http://81.163.30.135/api/cart', {
                    method: "PUT",
                    body: {
                        bookId: data.id,
                        count: data.quantity
                    }
                })
                        .then(response => {
                            if (response.status === 200) {
                                this.$toast.warning(response.data.message, {
                                    icon: "cart-plus",
                                });
                            } else {
                                this.$toast.success(response.data.message, {
                                    icon: "cart-plus",
                                });
                            }
                            console.log(response)
                        })
                        .catch((error) => {
                            console.log('error', error)
                        if (error.response) {
                            // this.$toast.error(error, {
                            //     icon: "cart-plus",
                            // });
                        }

                            return error;
                        })

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
                if (e === 'all') {
                    this.productSort = this.PRODUCTS
                }
            },
               showToast() {
                this.$notify({ group: 'foo', text: 'Wrong password, please try again later' })
            }
        },
        // created() {
        //     var database = firebase.database();
        //     console.log('db', database);
        // }, 
        mounted() {
            //this.GET_PRODUCTS_FROM_FIREBASE() // Получаем данные для распакаовки v-for
            this.GET_PRODUCTS_FROM_API() // Получаем данные для распакаовки v-for
            .then((response) =>{
                if(response){
                    // console.log('data пришла')
                    // this._vm.$toast.success('data пришла: ')
                    // this.$notify({
                    //     group: 'foo',
                    //     title: 'Login failed',
                    //     text: 'Please try again or contact us',
                    // });
                }
            })

        }


    }

</script>

<style lang="scss">
.items {
    padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
}
</style>
