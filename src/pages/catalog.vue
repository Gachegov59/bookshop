<template lang="pug">
    ._flex-wrap
        AppHeader
        AppContent
        AppFooter

</template>

<script>
    import AppHeader from '../components/header.vue'
    import AppContent from '../components/content.vue'
    import AppFooter from '../components/footer.vue'
    import { Fragment } from 'vue-fragment'
    export default {
        name: "catalog",
        data() {
            return{

            }
        },
        components: {
            AppHeader,
            AppContent,
            AppFooter,
            Fragment
        }
    }
</script>

<style scoped>

</style>