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
    @import 'node_modules/bootstrap/scss/bootstrap';
    @import 'node_modules/bootstrap-vue/src/index.scss';
    @import "src/styles/mixin";
    @import "src/styles/constans";

    .container {
        max-width: 1400px;
        margin: auto;
        padding: 20px;

    }

</style>
