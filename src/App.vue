<template lang="pug">
    #app
        router-view



</template>

<script>
    import {mapGetters} from "vuex";
    export default {
        name: 'App',
        components: {

        },
        computed: {
            ...mapGetters([
                'CART'
            ])

        }
    }
</script>

<style lang="scss">
    @import "src/styles/styles";

    .container {
        max-width: 1400px;
        margin: auto;
        padding: 20px;
    }

</style>
