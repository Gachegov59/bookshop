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
    // eslint-disable-next-line no-unused-vars
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "pageHome",
        data() {
            return{
                user: ''
            }
        },
        components: {
            TheHeader,
            AppContent,
            TheFooter,
            Fragment
        },

    }
</script>

<style scoped>

</style>