<template lang="pug">
    modal(name='popupExit' height="auto" adaptive )
        .popup
            h1.popup__title Регистрация
            template
                b-form.form(v-on:submit.prevent)
                    b-form-group#fieldset-horizontal(label-cols-sm='3' label-cols-lg='3' label='Почта' label-for='email' v-model="email")
                        b-form-input#email(v-model="email")
                    b-form-group#fieldset-horizontal(label-cols-sm='3' label-cols-lg='3' label='Пароль' label-for='password' v-model="password")
                        b-form-input#password(v-model="password" type="password")
                    b-form-group#fieldset-horizontal(label-cols-sm='3' label-cols-lg='3' label='Потворите  пароль' label-for='passwordConfirm' v-model="passwordConfirm")
                        b-form-input#passwordConfirm(v-model="passwordConfirm" type="password" )
                    .popup__btns
                        b-button.btn.btn-light.mr-2(type='submit' variant='primary' @click='authAPI') Отправить
                        b-button.btn.btn-light(type='reset' variant='danger' @click="$modal.hide('popupRegister')") Отмена
</template>

<script>
import axios from "axios";
import config from '../../config.js'

export default {
    name: "popupRegister",
    data() {
        return {
            email: '',
            password: '',
            passwordConfirm: ''
        }
    },
    methods: {
        authAPI() {
            axios(`http://${config.api.new}/api/auth/register/`, {
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