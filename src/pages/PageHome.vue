<template lang="pug">
    ._flex-wrap
        TheHeader
        AppContent
        TheFooter

</template>

<script>
    import TheHeader from '../components/TheHeader.vue'
    import AppContent from '../components/AppContent.vue'
    import TheFooter from '../components/TheFooter.vue'
    import { Fragment } from 'vue-fragment'
    export default {
        name: "pageHome",
        data() {
            return{

            }
        },
        components: {
            TheHeader,
            AppContent,
            TheFooter,
            Fragment
        }
    }
</script>

<style scoped>

</style>