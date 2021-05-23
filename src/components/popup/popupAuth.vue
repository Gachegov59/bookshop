<template lang="pug">
    modal(name='popupAuth'  height="auto" adaptive)
        .popup
            h1.popup__title Вход
            template
                b-form.form(v-on:submit.prevent)
                    b-form-group#fieldset-horizontal(label-cols-sm='3' label-cols-lg='3' label='Почта' label-for='email' v-model="email")
                        b-form-input#email(v-model="email")
                    b-form-group#fieldset-horizontal(label-cols-sm='3' label-cols-lg='3' label='Пароль' label-for='password' v-model="password")
                        b-form-input#password(v-model="password" type="password")

                    div.popup__btns
                        b-button.btn.btn-light.mr-2(type='submit' variant='primary' @click='authAPI') Вход
                        b-button.btn.btn-light(type='reset' variant='danger' @click="$modal.hide('popupAuth')") Отмена

                    .header__nav-item(@click="openPopupRegister")
                        fa-icon(icon="user-alt"  )
                        span Регистрация
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import config from '../../config.js'

export default {
    name: "popupAuth",
    data() {
        return {
            email: '',
            password: '',

        }
    },
    methods: {
        openPopupRegister() {
            this.$modal.hide('popupAuth');
            this.$modal.show('popupRegister');
        },
        authAPI() {
            // axios(`http://${config.api.new}/api/auth/login/`, {
            //     method: "POST",
            //     credentials: "include",
            //     data: {
            //         email: this.email,
            //         password: this.password,
            //     }
            // })
            //
            // .then(response => {
            //     console.log(response.data)
            //     if (response.status === 200) {
            //         this.$toast.warning(response.data.message, {
            //             icon: "cart-plus",
            //
            //         });
            //     } else {
            //         this.$toast.success(response.data.message, {
            //             icon: "cart-plus",
            //         });
            //     }
            //     console.log(response.config)
            // })
            // .catch((error) => {
            //     this.$toast.error(error, {
            //         icon: "cart-plus",
            //     });
            //     console.log(error)
            //     return error;
            // })
            fetch(`http://${config.api.new}/api/auth/login/`, {
                method: 'POST',
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password,
                })
            })
                .then((response) => {
                    response.json()
                        .then((data) => {
                            console.log(data);
                        });
                });
        },
    }
}
</script>

<style scoped lang="scss">

</style>