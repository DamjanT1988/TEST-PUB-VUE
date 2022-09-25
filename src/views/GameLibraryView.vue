<template>
    <!-- 1. skapa en ny view-fil-->
    <h2>SPELBIBLIOTEK</h2>
    <!-- 13-1. lägg till i HTML-->
    <!-- 15. loopa igenom array med objekt-->
    <!-- 18-1. koppla med barnkomponent deleteGame & instruera funktion att köras vid händelse
    title.id hjälper att få rätt ID-->
    <!-- 22. lägg till i sidan-->
    <!-- 23-2 ladda om listan från barnkomponent-->
    <AddGame @addedGame="getGames()"/>
    <ListGames @deleteGame="deleteGame(game.id)" v-for="game in games" :game="game" :key="game.id"/>
</template>

<script>
// 13. importera komponent för att lägga till spel
import ListGames from '../components/ListGames.vue';
// 21. lägg till AddGame.vue
import AddGame from '../components/AddGame.vue';
    export default {

        // 14. skapa props för varje AddGame-objekt
        // array skickas med till relevant komponent (AddGames)
        // dessa array-objekt har properties som skrivs ut 
        data () {
            return {
                games: []
            }
        },
       // 13-->
        components: {
            ListGames,
            // 21-->
            AddGame
        },
        // 16 hämta data dynamiskt via AJAX; skapa funktion (hämtar inte)
        methods: {
                async getGames() {
                    //16-1 vue-fetch syntax mot API/webbtjänst (await = vänta in ett svar)
                    const resp = await fetch("https://damjan-moment2.herokuapp.com/api/games");
                
                    //16-2 svar från api, lagra i data
                    const data = await resp.json();

                    //16-3 lagra listan i games
                    this.games = data;
                },
                // 19. skapa funktion för DELETE; skickar ID som parameter; 20.-> async
                async deleteGame(id) {

                    // test
                    //console.log(id);

                    // 20. nytt AJAX-anrop, med FETCH-data
                    const resp = await fetch ("https://damjan-moment2.herokuapp.com/api/games/" + id, {
                        method: "DELETE",
                        headers: {
                            "Accept": "application/json",
                            "Content-type": "application/json"
                        }
                    });

                    // 20-1 lagra respons i JSON-format
                    const data = await resp.json()

                    // 20-2 läs in bibliotek på nytt
                    this.getGames();
                }
            },
        
        //17 skapa funktion med metod mounted för att anropa API; kör när laddats in
            mounted () {
                this.getGames();
            }

    }


</script>



<style>
    
</style>