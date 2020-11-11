<template lang="pug">
    .container
        h2.mt-2 Добовление книг
        .row
            .col-8
                template
                    div
                        b-form
                            b-form-group#input-group-1(label="Название книги:")
                                b-form-input#input-1(v-model="title")
                            b-form-group#input-group-1(label="Автор:")
                                b-form-input#input-1(v-model="author")
                            b-form-group#input-group-1(label="путь картинки:")
                                b-form-input#input-1(v-model="url")
                            b-form-group#input-group-1(label="цена:")
                                b-form-input#input-1(v-model="price")
                            div.pb-2
                                b-button.btn._btn-outline.mr-2(type='submit' variant='primary' @click='addbookAPI') Submit
                                b-button.btn._btn-close(type='reset' variant='danger') Reset

</template>

<script>
    import axios from "axios";

    export default {
        name: "edditBooks",
        data() {
            return {
                title: '',
                author: '',
                url: '',
                price: null,
            }
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
                        .then(response  => {
                            console.log(response )
                        })

            }
        }
    }
</script>

<style scoped>

</style>