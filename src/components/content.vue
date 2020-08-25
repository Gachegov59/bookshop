<template lang="pug">
    main
        .container.py-0
            AppFilters
        .container
            .cards
                .row
                    AppCard(v-for="(item, i) in PRODUCTS"
                        :key="i"
                        :card_data="item"
                        @sendPrice="showConsole")
</template>

<script>
    import AppCard from './card'
    import AppFilters from './filters.vue'
    import icons from './experiments/icons'
    import {mapActions, mapGetters} from 'vuex'
    export default {
        data() {
            return {
                // items: null
            }
        },
        components: {
            AppCard,
            AppFilters,
            icons
        },
        computed: {
            ...mapGetters([
                'PRODUCTS'
            ])
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API'
            ]),
            showConsole(data){
                console.log(data)
            }
        },
        mounted() {
           this.GET_PRODUCTS_FROM_API()
            .then((response) =>{
                if(response.data){
                    console.log('data kek')
                }
            })
        }
    }

</script>



<style lang="scss">
.cards{
}
</style>
