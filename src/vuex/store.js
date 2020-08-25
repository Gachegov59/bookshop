import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        cart: 0,
        cnt: 0
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products
        },
        ADD_TO_CART:(state, price) => {
            state.cart += price
            state.cnt++
        },
        REMOVE_FROM_CART:(state, price) => {
            if(state.cnt > 0) {
                state.cart -= price
                state.cnt--
            }
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products
        },
        CART(state) {
            return state.cart
        },
        CNT(state) {
            return state.cnt
        }
    }
})
