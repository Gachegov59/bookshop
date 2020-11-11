<template lang="pug">
    #app
        keep-alive
            router-view

</template>

<script>
    import notifications from 'vue-notification'
    export default {
        name: 'App',
        components: {
            notifications
        },
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
