<template lang="pug">
    main
        .container.pb-0
            AppFilters
        .container
            .cards
                AppItem
</template>

<script>
    import AppItem from './item.vue'
    import AppFilters from './filters.vue'
    import icons from './experiments/icons'

    export default {
        components: {
            AppItem,
            AppFilters,
            icons
        }
    }

</script>



<style>

</style>
