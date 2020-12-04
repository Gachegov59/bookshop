module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData:
                `@import "~@/styles/mixin.scss";
                 @import "~@/styles/constans.scss"; `
            }
        }
    },
    // publicPath: '/vue/',
    publicPath: process.env.NODE_ENV === 'production'
            ? '/vue/dist/'
            : '/vue/',
    chainWebpack: config => {
        config.plugin('html').tap((args) => {
            args[0].minify = {
                ...args[0].minify,
                removeAttributeQuotes: false
            }
            return args
        })
    },
    devServer: {
        proxy: 'http://81.163.30.135'
    }
    // configureWebpack: {
    //     plugins: [
    //         // {src: "@/plugins/vue-swiper.js", ssr: false},
    //         // '~plugins/vue-js-modal.js',
    //         // '~plugins/vue-bootstrap',
    //         // {src: '~plugins/leaflet', mode: 'client'},
    //         {src: '~plugins/vue-toastification.js'},
    //     ]
    // }
};