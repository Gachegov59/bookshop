<template lang="pug">
  #app

      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      AppHeader
      AppContent

</template>

<script>
import AppHeader from './components/header.vue'
import AppContent from './components/content.vue'

export default {
  name: 'App',
  components: {
      AppHeader,
      AppContent
  }
}
</script>

<style lang="scss">
    .container {
        max-width: 1400px;
        margin: auto;
        padding: 20px;
    }

</style>
