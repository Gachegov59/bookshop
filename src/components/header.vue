<template lang="pug">
    header.d-flex
        .title Магазин книг
        AppCart


</template>

<script>
    import AppCart from './cart.vue'

export default {
  name: 'header',
  components: {
      AppCart
  }
}
</script>

<style>

</style>
