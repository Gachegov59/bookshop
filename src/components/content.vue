<template lang="pug">
    main
        .container.pb-0
            AppFilters
        .container
            .cards
                .row
                   .col-12.col-sm-6.col-md-4.col-lg-3
                        AppItem
</template>

<script>
    import AppItem from './item.vue'
    import AppFilters from './filters.vue'
    import icons from './experiments/icons'

    export default {
        name: 'content',
        components: {
            AppItem,
            AppFilters,
            icons
        }
    }

</script>



<style>

</style>
