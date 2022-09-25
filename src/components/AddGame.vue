<template>
    <!-- 22. skapa formulär för inmatning av data-->
    <!-- 22-2 lägg till händelselyssnare för att fånga submit/data (prevent default = ej laddas om)-->
    <form @submit.prevent="addGame()" >
        <label for="addGame">Spelets titel:</label>
        <!-- 22-1. länka inmatningsfält med "game" i data (dynamiskt)-->
        <input v-model="title" type="text">

        <!-- 24. lägg till övrigt-->
        <label for="addGame">Spelets publiceringsår:</label>
        <input v-model="year" type="number" placeholder="xxxx">
        
        <label for="addGame">Spelat?</label>
        <input v-model="played" type="radio" id="playedyes" value="1">
        <label for="playedyes">Ja</label>
        <input v-model="played" type="radio" id="playedyno" value="0">
        <label for="playedno">Nej</label>
        
        <input type="submit" value="Lägg till">
    </form>
</template>

<script>
    //22. skapa data för inmatning - länka det med objektet i data med HTML-elementet
    export default {
        data() {
            return {
                title: "",
                year: "",
                played: ""
            }
        },
        // 22-3 skapa funktion för att lagra data - ASYNC/WAIT alltid vid fetch()
        methods: {
            async addGame() {
                // 22-4 kontroll att något fylls i
                if (this.title.length > 0 ) {

                //test
                //console.log(this.title);
                //console.log(this.year);
                //console.log(this.played);


                    // 22-5 skapa en JS-objekt att skicka med
                    let gameBody = {
                        title: this.title,
                        year: this.year,
                        played: this.played
                    };

                    const resp = await fetch("https://damjan-moment2.herokuapp.com/api/games", {
                        method: "POST",
                        headers: {
                            "Accept": "application/json",
                            "Content-type": "application/json"
                        },
                        // 22-6 omvandla JS-objekt till JSON
                        body: JSON.stringify(gameBody)
                });
                
                
                    //22-7 lagra svar
                    const data = await resp.json();

                    //22-8 töm inmatningsfält
                    this.title = "";
                    this.year = "";
                    this.pLayed = "";

                    //23 ladda om listan vid submit via emit mot förälderkomoponent
                    this.$emit("addedGame");
                } 
                            }
        },
        //23-1 deklarera emit före
        emits: ["addedGame"]
    }
</script>

<style scoped>

</style>