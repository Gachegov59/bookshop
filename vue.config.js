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
    publicPath: '/vue/dist/',
    chainWebpack: config => {
        config.plugin('html').tap((args) => {
            args[0].minify = {
                ...args[0].minify,
                removeAttributeQuotes: false
            }
            return args
        })
    }
};