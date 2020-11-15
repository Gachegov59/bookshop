<template lang="pug">
    div
        .container
            h2.mt-2 Книги
            .row.mt-4
                .col-12.col-md-8

                    template
                        .accordion(role='tablist')
                            b-card.mb-1(no-body='' close)
                                b-card-header.p-1(header-tag='header' role='tab')
                                    b-button.collapsed(block='' v-b-toggle.accordion-1='' ) Добавить книгу
                                b-collapse#accordion-1(visible='' accordion='my-accordion' role='tabpanel' :visible="false")
                                    b-card-body
                                        b-card-text
                                            template
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
                                                                        .mt-3 Selected file: {{ file1 ? file1.name : '' }}
                                                            div.mt-2
                                                                b-button.btn._btn-outline.mr-2(type='submit' variant='primary' @click='addbookAPI') Submit
                                                                b-button.btn._btn-close(type='reset' variant='danger') Reset


                            b-card.mb-1(no-body='')
                                b-card-header.p-1(header-tag='header' role='tab')
                                    b-button(block='' v-b-toggle.accordion-2='' ) Удалить книгу
                                b-collapse#accordion-2(accordion='my-accordion' role='tabpanel')
                                    b-card-body
                                        b-card-text
                                            b-form.form(v-on:submit.prevent)
                                                b-form-group#fieldset-horizontal(label-cols-sm='3' label-cols-lg='3' label='ID книги' label-for='title' v-model="title")
                                                    b-form-input#title(v-model="id")
                                                    div.mt-2
                                                        b-button.btn._btn-outline.mr-2(type='submit' variant='primary' @click='deleteBoock') Submit
                                                        b-button.btn._btn-close(type='reset' variant='danger') Reset
            //toastification(group="foo")

        //AppFooter
</template>

<script>
    import axios from "axios";
    // import toastification from '../plugins/vue-toastification'
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
                file2: null,
                id: null
            }
        },
        components: {
            // toastification,
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
                            if (response.status === 200) {
                                this.$toast.warning(response.data.message, {
                                    icon: "cart-plus",
                                });
                            } else {
                                this.$toast.success(response.data.message, {
                                    icon: "cart-plus",
                                });
                            }
                            console.log(response)
                        })
                        .catch((error) => {
                            this.$toast.error(error, {
                                icon: "cart-plus",
                            });
                            console.log(error)
                            return error;
                        })

            },
            deleteBoock() {
                axios.delete(`http://81.163.30.135/api/books/${this.id}`)
                        .then(response => {
                            if (response.status === 200) {
                                this.$toast.warning(response.data.message, {
                                    icon: "cart-plus",
                                });
                            } else {
                                this.$toast.success(response.data.message, {
                                    icon: "cart-plus",
                                });
                            }
                            console.log(response)
                        })
                        .catch((error) => {
                            this.$toast.error(error.data.message, {
                                icon: "cart-plus",
                            });
                            console.log(error)
                            return error;
                        })
            }
        },
    }
</script>

<style scoped lang="scss">
    .card-header {
        background: $base;

        button {
            background: $base;
            color: white;
            font-size: 20px;
            border-color: white;
        }
    }
</style>