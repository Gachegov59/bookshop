import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        cartArr: [],
        cnt: 0

    },
    mutations: {
        // Храним данные из axios
        SET_PRODUCTS_TO_STATE: (state, products) => {
            var products2 = products.map(function(current) {
                let movie = Object.assign({}, current);
                movie.like = true;
                movie.seen = true;
                movie.showDescription = true;
                movie.quantity = 1
                return movie;
            });

            // let products2 = products.map( function () {
            //
            // })
            Vue.set(products, 'q', 1)
            state.products = products2
        },
        // добовляяем в карзину  CNT+
        SET_CART: (state, product) => {
            state.cartArr.push(product)
            // state.products[i].quantity++
        },
        // удаляем из карзины  CNT-
        DELETE_FROM_CART: (state, product) => {
            state.cartArr.pop(product)
            state.cnt > 0 ? state.cnt-- : false
        }
    },
    //
    actions: {
        // Получаем данные axios
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    // console.log(products)
                    // console.log(products.data)
                    commit('SET_PRODUCTS_TO_STATE', products.data);

                    return products;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        ADD_BOOK({commit}, product) {
            commit('SET_CART', product)
        },
        REMOVE_BOOK({commit}, product, i) {
            commit('DELETE_FROM_CART', product, i)
        }
    },
    getters: {
        // получаем продукты из state полсе axios
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
    }

})
