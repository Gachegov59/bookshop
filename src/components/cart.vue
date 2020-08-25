<template lang="pug">
    .cart
        .cart__info.border-left Итого: {{CART}} руб
        .cart__info.border-left корзина ({{CNT}})

</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'cart',
        components: {
        },
        computed:{
            ...mapGetters([
                'CART',
                'CNT'
            ])
        },
        methods:{
            ...mapActions([

            ])
        }
    }
</script>

<style lang="scss">
    .cart {
        display: flex;
        align-items: center;
        &__info {
            padding: 10px;
        }
    }
</style>
