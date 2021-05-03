<template lang="pug">
    div
        TheHeader
        .container.mt-2
            router-link(:to="{name: 'home'}" )
                BaseButton.btn._btn-outline В каталог
        //auth
        AppSellerEditBooks

</template>

<script>
    import TheHeader from '../components/TheHeader.vue'
    import BaseButton from "../components/ui/BaseButton";
    import AppSellerEditBooks from "../components/AppSellerEditBooks";

    export default {
        name: "PageSeller",
        components: {
            TheHeader,
            AppSellerEditBooks,
            BaseButton,
        }
    }
</script>

<style scoped>

</style>