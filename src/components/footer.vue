<template lang="pug">

    footer.footer
        .container
            .footer__wrap
                .footer__copyright
                    .footer__copyright-item Frontend
                        .footer__copyright-name
                            fa-icon.icon.alt.text-success(:icon="['fab', 'vuejs']")
                            <span>Александр Гачегов</span>

                    .footer__copyright-item Backend
                        .footer__copyright-name
                            fa-icon.icon.alt.text-dark(:icon="['fab', 'node']")
                            <span>Игорь Матвиенко</span>
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
        /*min-height: 50px;*/
        &__copyright {
            display: flex;
            &-item {
                display: flex;
                align-items: center;
                font-size: 16px;
                margin-right: 25px;
                @include phone {
                    flex-direction: column;
                    align-items: flex-start;
                    font-size: 12px;
                    margin-right: 10px;
                }
                span {
                    white-space: nowrap;
                    /*display: inline-block;*/
                    /*color: black;*/
                }
                svg {
                    font-size: 20px;
                    margin: 0 10px;
                    @include phone {
                        margin: 0 10px 0 0
                    }
                }
            }
            &-name {
                display: flex;
                align-items: center;
            }
        }
    }
</style>