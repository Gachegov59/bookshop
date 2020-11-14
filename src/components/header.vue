<template lang="pug">
    header.header(@scroll="letsScroll = true" :class="letsScroll && '_scrolled'")
        .container
            .header__wrap
                .header__wrap-block
                    .header__logo
                        router-link(:to="{name: 'catalog'}" )
                            include ../img/logo.svg
                        .header__logo-content
                            h1.header__title <span>book</span>shop
                                router-link(:to="{name: 'seller'}")
                                    span.user
                                        fa-icon(icon="user-alt"  )
                            a(href="tel:+79128888888").header__phone 8912888888
                .header__wrap-block {{route()}}
                    cart(:cart_data="CART" v-show="this.path === '/vue/' || this.path === '/vue' || this.path === '/'")


</template>

<script>
    import cart from './cart.vue'
    import btn from '../components/ui/btn'
    import {mapGetters} from "vuex";

    export default {
        components: {
            cart,
            btn
        },
        data() {
            return {
                path: '/vue/'
            }
        },
        computed: {
            ...mapGetters([
                'CART'
            ])
        },
        methods: {
            route() {
                this.path = this.$route.path
                // console.log(this.$route.path)
            }
        }
    }
</script>

<style lang="scss">
    .header {
        margin-top: 10px;
        padding: 5px 0 5px;
        position: sticky;
        top: 0;
        background: white;
        z-index: 10;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.20);
        /*&:after {*/
        /*    content: '';*/
        /*    position: absolute;*/
        /*    width: 100%;*/
        /*    height: 10px;*/
        /*    bottom:0;*/
        /*    box-shadow: 0px 8px 4px 0px white, 1px 1px 5px white;*/
        /*}*/


        &__wrap {
            display: flex;
            justify-content: space-between;

            &-block {
                display: flex;
                cursor: pointer;
                svg {
                    transition: all .3s ease;
                }

                &:hover {
                    svg {
                        opacity: .8;
                    }
                }
            }
        }

        &__logo {
            display: flex;

            &-content {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            svg {
                height: 60px;
                width: 80px;
                margin-right: 5px;
                @include tablet {
                    height: 50px;
                    width: 70px;
                }
            }


        }

        &__title {
            text-transform: uppercase;
            font-weight: 600;
            color: $base;
            font-size: 3rem;
            line-height: 3rem;
            @include tablet {
                font-size: 2rem;
                line-height: 2rem;
            }
            @include phone {
                font-size: 1.8rem;
                line-height: 2rem;
            }

            span {
                color: $accent;
            }

            & .user {
                cursor: pointer;

                &:hover {
                    svg {
                        color: $accent;
                    }
                }

                svg {
                    font-size: 25px;
                    height: auto;
                    color: $base;
                    cursor: pointer;
                    transition: all .3s ease;
                }
            }
        }

        &__phone {
            font-size: 20px;
            line-height: 18px;
            transition: all .3s ease;
            color: $base;

            &:hover {
                color: $accent;
                text-decoration: none;
            }
        }
    }
</style>
