<template lang="pug">
    .container
        h1 Регистрация
        template
            b-form.form(v-on:submit.prevent)
                b-form-group#fieldset-horizontal(label-cols-sm='3' label-cols-lg='3' label='Почта' label-for='email' v-model="email")
                    b-form-input#email(v-model="email")
                b-form-group#fieldset-horizontal(label-cols-sm='3' label-cols-lg='3' label='Пароль' label-for='password' v-model="password")
                    b-form-input#password(v-model="password" type="password")
                b-form-group#fieldset-horizontal(label-cols-sm='3' label-cols-lg='3' label='Потворите пароль' label-for='passwordConfirm' v-model="passwordConfirm")
                    b-form-input#passwordConfirm(v-model="passwordConfirm" type="password" )
                div.mt-2
                    b-button.btn._btn-outline.mr-2(type='submit' variant='primary' @click='authAPI') Submit
                    b-button.btn._btn-close(type='reset' variant='danger') Reset
</template>

<script>
    import axios from "axios";

    export default {
        name: "auth",
        data() {
            return {
                email: '',
                password: '',
                passwordConfirm: ''
            }
        },
        methods: {
            authAPI() {
                axios('http://81.163.30.135/api/auth/register/', {
                    method: "POST",
                    data: {
                        email: this.email,
                        password: this.password,
                        passwordConfirm: this.passwordConfirm,
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
        }
    }
</script>

<style scoped lang="scss">

</style>