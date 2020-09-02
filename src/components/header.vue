<template lang="pug">
    header.header
        .container
            .header__wrap.border.rounded.shadow-sm
                .header__title.border-right Магазин книг
                AppCart(:cart_data="CART_ARR")

</template>

<script>
    import AppCart from './cart.vue'
    import {mapGetters} from "vuex";

export default {
  components: {
      AppCart
  },
    computed:{
        ...mapGetters([
            'CART_ARR'
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
