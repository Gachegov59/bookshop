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
    publicPath: '/bookshop/'
};