<template lang="pug">

    footer.footer
        .container
            .footer__wrap
                .footer__copyright
                    .footer__copyright-item frontend Александр Гачегов
                        fa-icon(icon="shopping-cart")
                    .footer__copyright-item backend Игорь Матвиенко
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style scoped lang="scss">
    .footer {
        background: $base;
        padding: 20px 0;
        color: white;
        min-height: 50px;
        &__copyright {
            display: flex;
            &-item {
                margin-right: 10px;
            }
        }
    }
</style>