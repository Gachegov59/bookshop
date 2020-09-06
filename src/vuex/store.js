import Vue from 'vue'
import Vuex from 'vuex'
// import axios from "axios";
import './bd'
import firebase from "firebase";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        cartArr: [],
        cnt: 0

    },
    mutations: {
        // Храним данные из fb
        SET_PRODUCTS_TO_STATE: (state, products) => {
            var products2 = products.map(function (current) {
                let movie = Object.assign({}, current);
                movie.like = true;
                movie.showDescription = true;
                movie.quantity = 1
                return movie;
            });

            Vue.set(products, 'q', 1)
            state.products = products2
        },
        // добовляяем в карзину  CNT+
        SET_CART: (state, product) => {
            state.cartArr.push(product)
            // console.log('cartArr',state.cartArr)
            // state.products[i].quantity++
        },
        // удаляем из карзины  CNT-
        DELETE_FROM_CART: (state,  product) => {
            for (var i = 0; i < state.cartArr.length; i++){
                if(state.cartArr[i].id === product.id ) {
                    state.cartArr.splice(i, 1)
                }
                // console.log('cartArr[i].id',state.cartArr[i].id)
                // console.log('i', i)
                // console.log('id', id.id)
                // console.log(state.cartArr[i].id === id)
            }

            state.cnt > 0 ? state.cnt-- : false
            // console.log(' DELETE_FROM_CART', product)
        }
    },
    //
    actions: {
        // Получаем данные axios
        // GET_PRODUCTS_FROM_API({commit}) {
        //     return axios('http://localhost:3000/products', {
        //         method: "GET"
        //     })
        //         .then((products) => {
        //             commit('SET_PRODUCTS_TO_STATE', products.data);
        //
        //             return products;
        //         })
        //         .catch((error) => {
        //             console.log(error)
        //             return error;
        //         })
        // },

        // Получаем данные firebase realtime database
        GET_PRODUCTS_FROM_FIREBASE({commit}) {
            const bd = firebase.database();
            const products = bd.ref('products');
            products.on('value', (elem) => {
                let bookData = elem.val()
                // console.log('fb - bookData',bookData)
                commit('SET_PRODUCTS_TO_STATE', bookData)
            });
        },
        ADD_BOOK({commit}, product) {
            commit('SET_CART', product)
        },
        REMOVE_BOOK({commit},product ) {
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
        CART_ARR(state) {
            return state.cartArr
        }
    },
    modules: {}

})
