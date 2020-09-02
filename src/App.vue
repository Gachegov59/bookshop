<template lang="pug">
  #app
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

<style lang="scss" >
    @import "src/styles/styles";

    .container {
        max-width: 1400px;
        margin: auto;
        padding: 20px;
    }

</style>
