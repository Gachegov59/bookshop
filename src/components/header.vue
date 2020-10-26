<template lang="pug">
    header.header
        .container
            .header__wrap.border.rounded.shadow-sm
                .header__title.border-right Магазин книг
                cart(:cart_data="CART")

</template>

<script>
    import cart from './cart.vue'
    import {mapGetters} from "vuex";

export default {
  components: {
      cart
  },
    computed:{
        ...mapGetters([
            'CART'
        ])
    }
}
</script>

<style lang="scss">
    .header {
       &__wrap {
           display: flex;
           justify-content: space-between;
       }
        &__title {
            padding: 10px;
        }
    }
</style>
