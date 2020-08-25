<template lang="pug">
    .filters
        ul.filters__list
            li: button(checked).btn.btn-primary Все
            li(:title="low"): button.btn.btn-btn-light Цена: #[fa-icon(icon="long-arrow-alt-down" )]
            li(:title="high"): button.btn.btn-btn-light Цена: #[fa-icon(icon="long-arrow-alt-up")]
            li: button.btn.btn-btn-light Автор

        .filters__search
            .input-group
                input.form-control(type='text',  placeholder="Введите запрос" aria-label='Amount (to the nearest dollar)')
                .input-group-append
                    span.input-group-text
                        fa-icon(icon="search")


</template>

<script>


    export default {
        name: 'filters',
        data(){
            return{
                low:'дешевле',
                high:'дороже',
            }
        },
        components: {

        }
    }

</script>



<style lang="scss">
.filters {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    &__list {
        display: flex;
        flex-grow: .5;
        padding: 0;
        margin: 10px 0;
        list-style-type: none;
        li {
            padding-right: 5px;
        }
    }
    &__search {
        /*margin-left: 20px;*/
        flex-grow: .5;
    }
}
</style>
