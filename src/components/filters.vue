<template lang="pug">
    .filters
        ul.filters__list
            li: button.btn.btn-btn-light Все
            li: button.btn.btn-btn-light Цена (дорогие)
            li: button.btn.btn-btn-light Цена (дешевые)
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
        components: {

        }
    }

</script>



<style lang="scss">
.filters {
    display: flex;
    align-items: center;
    &__list {
        display: flex;
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
    &__search {
        margin-left: 20px;
    }
}
</style>
