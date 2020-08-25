<template lang="pug">
    header.header
        .container
            .header__wrap.border.rounded.shadow-sm
                .header__title.border-right Магазин книг
                AppCart

</template>

<script>
    import AppCart from './cart.vue'

export default {
  components: {
      AppCart
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
