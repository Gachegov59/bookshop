<template lang="pug">
    main
        .container.py-0
            AppFilters(@sort="sort")
        .container
            .items
                AppBook(v-for="(item, i) in filteredProduct"
                    :key="i"
                    :book_data="item"
                    @addBook="addBook"
                    @removeBook="removeBook" )

        //toastification(group="foo")
</template>

<script>
import AppBook from './AppBook'
import AppFilters from './AppFilters.vue'
import {mapActions, mapGetters} from 'vuex'
import axios from "axios";
import config from '../config.js'
// import toastification from "../plugins/vue-toastification";
// import firebase from "firebase";
export default {
    name: 'AppContent',
    data() {
        return {
            productSort: []
        }
    },
    components: {
        AppBook,
        AppFilters,
        // toastification
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
            'GET_PRODUCTS_FROM_API',
            'ADD_BOOK',
            'REMOVE_BOOK',
            'GET_USER'
        ]),

        addBook(data, i) {
            this.ADD_BOOK(data, i)
            // console.log(data.id)
            // console.log(data.quantity)

            axios(`http://${config.api.new}/api/cart`, {
                method: "PUT",
                data: {
                    bookId: data.id,
                    count: data.quantity
                }
            })
                .then(response => {
                    if (response.status === 200) {
                        // console.log(response)
                        // this.$toast.warning(response.data.message, {
                        //     icon: "cart-plus",
                        // });
                    } else {
                        // this.$toast.success(response.data.message, {
                        //     icon: "cart-plus",
                        // });
                    }
                    // console.log(response)
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
        }
    },

    mounted() {
        this.GET_PRODUCTS_FROM_API() // Получаем данные для распакаовки v-for
            // .then((response) => {
            //     // if (response) {
            //     //     console.log('this.GET_PRODUCTS_FROM_API', response)
            //     // }
            // })
    }

}

</script>

<style lang="scss">
.items {
    //padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
}
</style>
