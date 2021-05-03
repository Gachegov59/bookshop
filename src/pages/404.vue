<template lang="pug">
    .container
        .page-home
            router-link(:to="{name: 'home'}" )
                include ../img/logo.svg
        .page-not
            h1 4<span>0</span>4
            p  тут нет ничего
</template>

<script>
    export default {
        name: "404"
    }
</script>

<style scoped lang="scss">
    .page-home {
        position: fixed;
        left: -10px;
        top: 25px;
        padding: 10px;
        background: white;
        //border: 1px solid $base;
        border-radius: 25px;

        svg {
            height: 40px;
            width: 80px;
            -webkit-animation: NAME-YOUR-ANIMATION 3s infinite;
            -webkit-animation-iteration-count: infinite;

            @-webkit-keyframes NAME-YOUR-ANIMATION {
                0% {
                }
                10% {
                    -webkit-transform: rotate(5deg);
                    -moz-transform: rotate(5deg);
                    -o-transform: rotate(5deg);
                }
                20% {
                    -webkit-transform: rotate(-5deg);
                    -moz-transform: rotate(-5deg);
                    -o-transform: rotate(-5deg);
                }
                30% {
                    -webkit-transform: rotate(5deg);
                    -moz-transform: rotate(5deg);
                    -o-transform: rotate(5deg);
                }
                40% {
                    -webkit-transform: rotate(-5deg);
                    -moz-transform: rotate(-5deg);
                    -o-transform: rotate(-5deg);
                }
                50% {
                    -webkit-transform: rotate(5deg);
                    -moz-transform: rotate(5deg);
                    -o-transform: rotate(5deg);
                }
                60% {
                    -webkit-transform: rotate(-5deg);
                    -moz-transform: rotate(-5deg);
                    -o-transform: rotate(-5deg);
                }
                70% {
                    -webkit-transform: rotate(5deg);
                    -moz-transform: rotate(5deg);
                    -o-transform: rotate(5deg);
                }
                80% {
                    -webkit-transform: rotate(-5deg);
                    -moz-transform: rotate(-5deg);
                    -o-transform: rotate(-5deg);
                }
                90% {
                    -webkit-transform: rotate(5deg);
                    -moz-transform: rotate(5deg);
                    -o-transform: rotate(5deg);
                }
                100% {
                    -webkit-transform: rotate(-5deg);
                    -moz-transform: rotate(-5deg);
                    -o-transform: rotate(-5deg);
                }
            }
        }
    }

    .page-not {
        margin: 50px auto;
        max-width: 300px;

        h1 {
            color: $accent;
            font-size: 145px;
            line-height: .85;

            span {
                display: inline-block;
                transform-origin: 0 100% 0;
                transform:none;
                 animation: NAME-YOUR-ANIMATION2 1s;
                animation-iteration-count: 0.9;
                animation-delay: 3s;
                animation-fill-mode: forwards;
                @-webkit-keyframes NAME-YOUR-ANIMATION2 {
                    0% {
                        transform-origin: 0 100% 0;
                        transform: rotateX(0deg);
                    }
                    10% {
                        transform-origin: 0 100% 0;
                        transform: rotateX(10deg);
                    }
                    20% {
                        ransform-origin: 0 100% 0;
                        transform: rotateX(20deg);
                    }
                    30% {
                        ransform-origin: 0 100% 0;
                        transform: rotateX(30deg);
                    }
                    40% {
                        ransform-origin: 0 100% 0;
                        transform: rotateX(40deg);
                    }
                    50% {
                        ransform-origin: 0 100% 0;
                        transform: rotateX(50deg);
                    }
                    60% {
                        ransform-origin: 0 100% 0;
                        transform: rotateX(60deg);
                    }
                    70% {
                        ransform-origin: 0 100% 0;
                        transform: rotateX(70deg);
                    }
                    80% {
                        ransform-origin: 0 100% 0;
                        transform: rotateX(80deg);
                    }
                    80% {
                        ransform-origin: 0 100% 0;
                        transform: rotateX(80deg);
                    }


                    100% {
                        transform-origin: 0 100% 0;
                        transform: rotateX(79deg);
                    }
                }
            }
        }

        p {
            font-size: 30px;
            color: $base;
        }

    }
</style>