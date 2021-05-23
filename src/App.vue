<template lang="pug">
    #app
        keep-alive
            router-view

</template>

<script>
// import axios from "axios";
// import config from "@/config";

export default {
    name: 'App',
    components: {},
    mounted() {
        // axios(`http://${config.api.new}/api/auth/user`, {
        //     method: "GET",
        //     withCredentials: true
        // })
        // .then((response) => {
        //     console.log(response.data)
        // })
    //     fetch(`http://${config.api.new}/api/auth/user`, {
    //         method: 'GET',
    //         credentials: "include",
    //         headers: {
    //             "Content-Type": "text/plain;charset=UTF-8"
    //         },
    //     })
    //         .then((response) => {
    //             response.json()
    //                 .then((data) => {
    //                     console.log(data);
    //                 });
    //         });
    }
}
</script>

<style lang="scss">
@import "src/styles/styles";

.container {
    max-width: 1400px;
    margin: auto;
    padding: 20px;
}

</style>
