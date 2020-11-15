<template lang="pug">
    div
        AppHeader
        .container.mt-2
            router-link(:to="{name: 'catalog'}" )
                btn.btn._btn-outline В каталог
        auth
        pageEdditBooks

</template>

<script>
    import AppHeader from '../components/header.vue'
    import AppContent from "../components/content";
    import btn from "../components/ui/btn";
    import pageEdditBooks from "../pages/edditBooks";
    import auth from "../components/auth";

    export default {
        name: "seller",
        components: {
            AppHeader,
            AppContent,
            pageEdditBooks,
            btn,
            auth
        }
    }
</script>

<style scoped>

</style>