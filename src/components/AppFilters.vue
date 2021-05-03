<template lang="pug">
    .filters
        ul.filters__list
            li: button.btn.btn-btn-light(:title="all" @click="sort('all')" ) сброс
            li: button.btn.btn-btn-light(:title="low" @click="sort('low')" :class="{_active: this.active === 'low' }"): fa-icon(icon="sort-amount-down-alt" )
            li: button.btn.btn-btn-light(:title="high" @click="sort('high')" :class="{_active: this.active === 'high' }"): fa-icon(icon="sort-amount-down" )
            li: button.btn.btn-btn-light: fa-icon(icon="filter")

        .filters__search
            .input-group
                input.form-control(type='text',  placeholder="Введите название.." aria-label='Amount (to the nearest dollar)')
                .input-group-append
                    span.input-group-text
                        fa-icon(icon="search")
</template>

<script>
    export default {
        name: 'AppFilters',
        data(){
            return{
                low:'по возростанию',
                high:'по убыванию',
                all:'всe',
                active: 'all'
            }
        },
        components: {

        },
        methods: {
            sort(e) {
                this.$emit('sort', e)
                this.active = e
            }
        }
    }

</script>



<style lang="scss">
.filters {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 10px;
    &__list {
        display: flex;
        flex-grow: .5;
        padding: 0;
        list-style-type: none;
        margin: 5px 0;
        li {
            padding-right: 5px;
            button{
               &._active{
                   //box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
                   color: $base;
               }
            }
            svg {
                transition: all .3s ease;
            }
            &:hover {
                svg {
                    color: $accent;
                }
            }
        }

    }
    &__search {
        /*margin-left: 20px;*/
        margin: 5px 0;
        flex-grow: .5;
        input {
            font-size: 16px;
        }
    }
}
</style>
