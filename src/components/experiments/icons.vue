<template lang="pug">
    div
        fa-icon(icon="spinner" size="2x" spin).mr-1
            fa-layer.fa-4x
                fa-icon(icon="circle" style="color:Tomato")
                fa-icon(icon="times" transform="shrink-9")

        fa-layer.fa-4x
            fa-icon(icon="tag" style="color:forestgreen" )
            fa-layer-text(value="NEW" transform="shrink-12 rotate--45" style="color:White"  )

        fa-icon(icon="grin-hearts" style="color:Tomato" mask="coffee" transform="shrink-9 up-2 left-1" ).fa-4x

</template>

<script>
    export default {
        name: 'icons',
        components: {
        }
    }
</script>

<style>

</style>
