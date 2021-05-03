<template lang="pug">
    .container
        .row.mt-4
            //.col-12.col-md-10.col-lg-7
            .col-12.col-md-8
              hr
              h2  Добавить книгу
              b-form.form(v-on:submit.prevent)
                b-form-group#fieldset-horizontal(label-cols-sm='2' label-cols-lg='3' label='Название ' label-for='title' v-model="title" )
                  b-form-input#title(v-model="title" placeholder="Введите название книги..")
                b-form-group#fieldset-horizontal(label-cols-sm='2' label-cols-lg='3' label='Автор' label-for='author' v-model="author")
                  b-form-input#author(v-model="author" placeholder="Введите автора..")
                b-form-group#fieldset-horizontal(label-cols-sm='2' label-cols-lg='3' label='Цена' label-for='price' v-model="price")
                  b-form-input#price(v-model="price" placeholder="Введите цену..")
                b-form-group
                  b-form-group#fieldset-horizontal(label-cols-sm='2' label-cols-lg='3' label='Путь картинки:' label-for='url' v-model="url")
                    b-form-input#url(v-model="url" placeholder="Название книги")
                  template
                    div
                      .row
                        .col-8
                          b-form-file(v-model='file1' :state='Boolean(file1)' placeholder='Выберите файл или перетащите сюда ....' drop-placeholder='перетащите сюда...')
                        .col-4(v-if="file1")
                          .mt-3 Selected file: {{ file1 ? file1.name : '' }}
                div.mt-2
                  b-button.btn._btn-outline.mr-2(type='submit' variant='primary' @click='addbookAPI') Добавить
                  b-button.btn._btn-close(type='reset' variant='danger') сброс

            //.col-12.col-md-10.col-lg-7.mt-5
            .col-12.col-md-4
              hr
              h2 Удалить книгу
              b-form.form(v-on:submit.prevent)
                b-form-group#fieldset-horizontal(label-cols-sm='3' label-cols-lg='3' label='ID книги' label-for='id' v-model="title")
                  b-form-input#id(v-model="id")
                  div.mt-2
                    b-button.btn._btn-outline.mr-2(type='submit' variant='primary' @click='deleteBoock') Удалить
                    b-button.btn._btn-close(type='reset' variant='danger') сброс




            //toastification(group="foo")

        TheFooter
</template>

<script>
    import axios from "axios";
    // import toastification from '../plugins/vue-toastification'
    import TheFooter from "./TheFooter";

    export default {
        name: "PageSellerEditBooks",
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
            TheFooter
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