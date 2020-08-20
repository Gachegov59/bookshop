<template lang="pug">
    .card.shadow-sm
        img( src="../img/1.jpg")
        .card__content
            .card__title.bold Происхождение
            .card__author Дэн Браун
        .card__price
            fa-icon(icon="ruble-sign"  style="color:grey" ).mr-1
            .fa.fa-rub 710
        button.card__button.btn.btn-light Добавить в корзину

</template>

<script>

    export default {
        name: 'item',
        components: {
        }
    }
    fetch('../ajax/data.json')
        .then(response => response.json())
        .then(json => console.log(json))

    // console.log(fetch('../ajax/data.json'))
        // .then(
        //     function(response) {
        //         if (response.status !== 200) {
        //             console.log('Looks like there was a problem. Status Code: ' +
        //                 response.status);
        //             return;
        //         }
        //
        //         // Examine the text in the response
        //         response.json().then(function(data) {
        //             console.log(data);
        //         });
        //     }
        // )
        // .catch(function(err) {
        //     console.log('Fetch Error :-S', err);
        // });
</script>



<style lang="scss">
.card {
    img {
        max-height: 400px;
        object-fit: cover;
    }
    &__content {
        border-top: 1px solid gray;
        padding: 10px;
    }
    &__price {
        border-top: 1px solid rgba(34, 36, 38, 0.1);
        display: flex;
        align-items: center;
        padding:  10px 20px;
    }
}
</style>
