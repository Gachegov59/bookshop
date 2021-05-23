import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import config from './config.js'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
        cnt: 0,
        user: ''
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            let products2 = products.data.data.books.map(function (current) {
                let book = Object.assign({}, current);
                book.showDescription = true;
                book.quantity = 0
                return book;
            });
            Vue.set(products, 'q', 1)
            state.products = products2
        },
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
        },
        SET_USER_TO_STATE: (state, user) =>{
            state.user = user
            console.log('state.user', state.user)
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios(`http://${config.api.new}/api/books`, {
                method: "GET",
                // withCredentials: true
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products);
                    return products;

                })
                .catch((error) => {
                    // console.log(error)
                    return error;
                })
        },
        ADD_BOOK({commit}, product) {
            commit('SET_CART', product)
            // console.log('addboock product', product.id)
            // axios(`http://${config.api.new}/api/cart`, {
            //     method: "PUT",
            //     data: {
            //         bookId: product.id,
            //         count: product.quantity
            //     }
            // })
            //         .then(response => {
            //             if (response.status === 200) {
            //                 this._vm.$toast.warning(response.data.message, {
            //                     icon: "cart-plus",
            //                 });
            //             } else {
            //                 this._vm.$toast.success(response.data.message, {
            //                     icon: "cart-plus",
            //                 });
            //             }
            //             console.log(response)
            //         })
            //         .catch((error) => {
            //             this._vm.$toast.error(error.data.message, {
            //                 icon: "cart-plus",
            //             });
            //             console.log(error)
            //             return error;
            //         })

        },
        REMOVE_BOOK({commit}, product) {
            commit('DELETE_FROM_CART', product)
        },
        GET_USER({commit}) {
            return fetch(`http://${config.api.new}/api/auth/user`, {
                method: 'GET',
                credentials: "include",
                headers: {
                    "Content-Type": "text/plain;charset=UTF-8"
                },
            })
                .then((response) => {
                    response.json()
                        .then((data) => {
                            console.log(data.user);
                            commit('SET_USER_TO_STATE', data.user);
                            return data.user
                        });
                });
        },
        EXIT_USER({commit}){
            axios(`http://${config.api.new}/api/auth/logout/`, {
                method: "POST",
                withCredentials: true
            })
                .then(response => {
                    if (response.status === 200) {
                        commit('SET_USER_TO_STATE', false);
                        console.log(response)
                        this.$toast.warning(response.data.message, {
                            icon: "cart-plus",
                        });
                    } else {
                        this.$toast.success(response.data.message, {
                            icon: "cart-plus",
                        });
                    }
                    this.EXIT_USER()
                })
                .catch((error) => {
                    this.$toast.error(error, {
                        icon: "cart-plus",
                    });
                    return error;
                })
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products
        },
        USER(state) {
            return state.user
        },
        CNT(state) {
            return state.cnt
        },
        CART(state) {
            return state.cart
        }
    },

})
