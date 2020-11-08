<template lang="pug">
    div
        AppHeader
        AppContent

</template>

<script>
    import AppHeader from '../components/header.vue'
    import AppContent from '../components/content.vue'
    export default {
        name: "catalog",
        data() {
            return{

            }
        },
        components: {
            AppHeader,
            AppContent
        }
    }
</script>

<style scoped>

</style>