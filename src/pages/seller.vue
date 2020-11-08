<template lang="pug">
    div
        AppHeader
        pageEdditBooks
</template>

<script>
    import AppHeader from '../components/header.vue'
    import AppContent from "../components/content";
    import pageEdditBooks from "../pages/edditBooks";
    export default {
        name: "seller",
        components: {
            AppHeader,
            AppContent,
            pageEdditBooks
        }
    }
</script>

<style scoped>

</style>