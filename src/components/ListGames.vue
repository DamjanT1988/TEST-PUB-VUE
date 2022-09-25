<!-- 12. lägg till bibliotekfunktioner-->
<template>
    <!-- 18. händelselyssnare för DELETE, genom ett EMIT mot föräldrarkomponent-->
    <article @click="$emit('deleteGame')">
       <h3> {{ game.title }} </h3>
       <p> {{ game.year }} </p> 
        <!-- 24 ändra 1/0 till strängar-->
      <p v-if="game.played == 1"> Spelat</p>
      <p v-else>Inte spelat</p>
    </article>
</template>


<script scoped>
    // 15. ta emot objekter; markera game-objekt som objekt
    export default {
        props: {
            game: Object
        }
    
    
    }


</script>

<style scoped>

</style>