<template lang="pug">
    div
        AppHeader
        .container.mt-2
            router-link(:to="{name: 'catalog'}" )
                btn.btn._btn-outline В каталог
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