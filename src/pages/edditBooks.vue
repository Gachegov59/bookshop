<template lang="pug">
    div
        .container
            h2.mt-2 Добовление книг
            .row.mt-4
                .col-12.col-md-8
                    template
                        div
                            b-form.form(v-on:submit.prevent)
                                b-form-group#fieldset-horizontal(label-cols-sm='3' label-cols-lg='3' label='Название книги' label-for='title' v-model="title")
                                    b-form-input#title(v-model="title")
                                b-form-group#fieldset-horizontal(label-cols-sm='3' label-cols-lg='3' label='Автор' label-for='author' v-model="author")
                                    b-form-input#author(v-model="author")
                                b-form-group#fieldset-horizontal(label-cols-sm='3' label-cols-lg='3' label='Цена' label-for='price' v-model="price")
                                    b-form-input#price(v-model="price")
                                b-form-group
                                    b-form-group#fieldset-horizontal(label-cols-sm='3' label-cols-lg='3' label='Путь картинки:' label-for='url' v-model="url")
                                        b-form-input#url(v-model="url")
                                    template
                                        div
                                            .row
                                                .col-8
                                                    b-form-file(v-model='file1' :state='Boolean(file1)' placeholder='Выберите файл или перетащите сюда ....' drop-placeholder='перетащите сюда...')
                                                .col-4(v-show="this.file1")
                                                    .mt-3 Selected file: {{ file1 ? file1.name : '' }}

                                div.pb-2
                                    b-button.btn._btn-outline.mr-2(type='submit' variant='primary' @click='addbookAPI') Submit
                                    b-button.btn._btn-close(type='reset' variant='danger') Reset


                notifications(group="foo")
        //AppFooter
</template>

<script>
    import axios from "axios";
    import notification from '../plugins/vue-notification'
    import toastification from '../plugins/vue-toastification'
    import AppFooter from "../components/footer";

    export default {
        name: "edditBooks",
        data() {
            return {
                title: '',
                author: '',
                url: '',
                price: null,
                file1: null,
                file2: null
            }
        },
        components: {
            notification,
            toastification,
            AppFooter
        },
        methods: {
            addbookAPI() {
                axios('http://81.163.30.135/api/books', {
                    method: "POST",
                    data: {
                        title: this.title,
                        author: this.author,
                        picture: this.url,
                        price: this.price,
                    }
                })
                        .then(response => {
                            if( response.status === 200) {
                                // this.$notify({
                                //     group: 'foo',
                                //     type: 'warn',
                                //     title: 'атата',
                                //     text: response.data.message
                                // })
                                this.$toast.warning(response.data.message, {
                                    icon: "cart-plus",
                                });
                            }
                            else {
                                this.$toast.success(response.data.message, {
                                    icon: "cart-plus",
                                });
                            }
                            console.log( response)
                        })
                        .catch((error) => {
                            // this.$notify.error({group: 'foo', text: error})
                            return error;
                        })

            }
        }
    }
</script>

<style scoped>

</style>