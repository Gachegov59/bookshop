<template lang="pug">
    div
        AppHeader
        AppContent
        //AppFooter

</template>

<script>
    import AppHeader from '../components/header.vue'
    import AppContent from '../components/content.vue'
    import AppFooter from '../components/footer.vue'
    export default {
        name: "catalog",
        data() {
            return{

            }
        },
        components: {
            AppHeader,
            AppContent,
            AppFooter
        }
    }
</script>

<style scoped>

</style>