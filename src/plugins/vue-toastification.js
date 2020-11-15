import Vue from 'vue'
import Toast from "vue-toastification";

const ToastOptions = {
    transition: "Vue-Toastification__bounce",
    maxToasts: 3,
    newestOnTop: true,
    position: "top-right",
    timeout: 2000,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    draggable: true,
    pauseOnHover: true,
    draggablePercent: 0.7,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false,
}
Vue.use(Toast, ToastOptions)

