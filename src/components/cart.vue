<template lang="pug">
    .cart
        .cart__info.border-left Итого: 0 руб
        .cart__info.border-left корзина (0)

</template>

<script>
    export default {
        name: 'cart',
        components: {
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
