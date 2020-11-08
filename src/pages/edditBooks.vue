<template lang="pug">
    .container
        h2.mt-5 Добовление книг
        .row
            .col-8

                template
                    div
                        b-form()
                            b-form-group#input-group-1(label="Название книги:")
                                b-form-input#input-1(v-model="title")
                            b-form-group#input-group-1(label="Автор:")
                                b-form-input#input-1(v-model="author")
                            b-form-group#input-group-1(label="путь картинки:")
                                b-form-input#input-1(v-model="url")
                            b-form-group#input-group-1(label="цена:")
                                b-form-input#input-1(v-model="price")
                            b-button(type='submit' variant='primary' @click='addbookAPI') Submit
                            b-button(type='reset' variant='danger') Reset
        //div
                    b-form-group#input-group-2(label='Your Name:' label-for='input-2')
                        b-form-input#input-2(v-model='form.name' required='' placeholder='Enter name')
                    b-form-group#input-group-3(label='Food:' label-for='input-3')
                        b-form-select#input-3(v-model='form.food' :options='foods' required='')
                    b-form-group#input-group-4
                        b-form-checkbox-group#checkboxes-4(v-model='form.checked')
                            b-form-checkbox(value='me') Check me out
                            b-form-checkbox(value='that') Check that out
                    b-button(type='submit' variant='primary') Submit
                    b-button(type='reset' variant='danger') Reset
                    b-card.mt-3(header='Form Data Result')
                        pre.m-0.
                            \n{{ form }}

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