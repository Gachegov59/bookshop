import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import './firebase'
import firebase from "firebase";

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
        cnt: 0

    },
    mutations: {
        // Храним данные из API nodeServer
        SET_PRODUCTS_TO_STATE: (state, products) => {
            console.log('products', products)
            let products2 = products.data.data.books.map(function (current) {
                let book = Object.assign({}, current);
                book.showDescription = true;
                book.quantity = 0
                return book;
            });

            Vue.set(products, 'q', 1)
            state.products = products2
        },
        // Храним данные из fb
        SET_PRODUCTS_TO_STATE_FIREBASE: (state, products) => {
            let products2 = products.map(function (current) {
                let book = Object.assign({}, current);
                book.showDescription = true;
                book.quantity = 0
                return book;
            });

            Vue.set(products, 'q', 1)
            state.products = products2
        },
        // добовляяем в карзину  CNT+
        SET_CART: (state, product) => {
            if (state.cart.length) {
                let isProductExist = false
                //увеличиваем повторяющийся товар
                state.cart.map(function (item) {
                    if (item.id === product.id) {
                        isProductExist = true
                        item.quantity++
                    }
                })
                if (!isProductExist) {
                    state.cart.push(product)
                    state.cart[state.cart.length - 1].quantity++
                }
            } else {
                state.cart.push(product)
                state.cart[0].quantity++
            }
        },
        // удаляем из карзины  CNT-
        DELETE_FROM_CART: (state, product) => {
            for (let i = 0; i < state.cart.length; i++) {

                if (state.cart[i].id === product.id) {
                    if (state.cart[i].quantity <= 1) {
                        state.cart[i].quantity--
                        state.cart.splice(i, 1)
                    } else {
                        state.cart[i].quantity--
                    }
                }
            }
        }
    },
    //
    actions: {
        // Получаем данные axios
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://81.163.30.135/api/books', {
                method: "GET"
            })
                    .then((products) => {
                        console.log('axios', products.data)
                        console.log(products)
                        commit('SET_PRODUCTS_TO_STATE', products);

                        return products;

                    })
                    .catch((error) => {
                        console.log(error)
                        return error;
                    })
        },
        // Получаем данные firebase realtime database
        GET_PRODUCTS_FROM_FIREBASE({commit}) {
            const bd = firebase.database();
            const products = bd.ref('products');
            products.on('value', (elem) => {
                let bookData = elem.val()
                // console.log('fb - bookData',bookData)
                commit('SET_PRODUCTS_TO_STATE_FIREBASE', bookData)
            });
        },
        ADD_BOOK({commit}, product) {
            commit('SET_CART', product)
            console.log('addboock product', product)
            // axios('http://81.163.30.135/api/cart', {
            //     method: "PUT",
            //     data: {
            //         bookId: product.id,
            //         count: product.quantity
            //     }
            // })
            //         .then(response => {
            //             console.log('add in cart api', response)
            //         })

        },
        REMOVE_BOOK({commit}, product) {
            commit('DELETE_FROM_CART', product)
        }
    },
    getters: {
        // получаем продукты из state
        PRODUCTS(state) {
            return state.products
        },
        // получаем колличество в карзине
        CNT(state) {
            return state.cnt
        },
        // получаем массив объектов с товарами
        CART(state) {
            return state.cart
        }
    },
    modules: {}

})
