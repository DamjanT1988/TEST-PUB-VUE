# MOMENT 3 - FRONT-END FRAMEWORK VUEJS
Syftet med uppgiften är att:
* utvärdera och använda JavaScript-ramverket Vue.js för webbutveckling,
* konsumera webbtjänsten du skapade i moment 2 samt skapa gränssnitt för att läsa ut, radera och lägga till data (Create, Read, Delete)
* publicera till lämplig webbhost som inte är FTP-baserad.

## REPO-BESKRIVNING
Repo består av rootkataloger och rootfiler för Vue-skapad SPA-applikation. Här finns utvecklingsfiler (src) och distributionsfiler (dist). I utvecklingsfiler finns komponenter (components) och view-filer (views) samt olika tillgångar (assets) som bilder. En router finns för att det är en Single Page Application (SPA) som kräver router för att navigera mellan sidor genom JavaScript.

### APPLIKATIONEN
SPA-applikation fungerar som ett minimalt persionligt bibliotek vilket lagrar spel som titel, publiceringsår och om spelat. Spelen kan också tas bort från den lista som visar alla lagrade spel.

SPA-applikation gör AJAX-anrop med Fetch() till webbtjänsten från moment 2.  

## DOKUMENTATION AV WEBBTJÄNST
Se & hämta data i JSON-format. Webbtjänsten används för att hantera en spelbibliotek i MySQL-databas. Användare kan bygga ett bibliotek av speltitlar, år när spelet lanserades & om en har spelat det eller inte.

### LAGRA (CREATE) - C
Lagra nytt spel, skicka en POST-förfrågan i JSON-format till:
https://damjan-moment2.herokuapp.com/api/games/

Tre fält att fylla:
{
    "title" : "STRÄNGVÄRDE",
    "year" : "STRÄNGVÄRDE",
    "played" : true/false
}

### HÄMTA (RECEIVE) - R
Visa hela spelbibliotek, skicka en GET-förfrågan på:
https://damjan-moment2.herokuapp.com/api/games/

Visa en specifik spel, lägg till dess id-nummer i ändelse; GET-förfrågan:
https://damjan-moment2.herokuapp.com/api/games/{id}

### UPPDATERA (UPDATE) - U
Uppdatera information av ett specifikt spel gen PUT-förfrågan med id-nummer i ändelsen: 
https://damjan-moment2.herokuapp.com/api/games/{id} 

### ELIMINERA (DELETE) - D
Ta bort en speltitel, gör en DEL-förfrågan med id-nummer i ändelsen: 
https://damjan-moment2.herokuapp.com/api/games/{id}  

## ARBETSPROCESS
1. skapa nya view-filer
2. importera vue-filer
3. skapa router
4. --HEADER-- skapa en Header-fil med template-kod
5. skapa huvudmeny
6. importera routerlänk
7. redogör vilka komponenter att använda
8. skapa länklista med RouterLink
9. --APP.VUE-- importera Header-komponent till rootkomponent
10. redogör komponent att använda
11. infoga Header i template 
11-1. infoga RouterView i <main>
12. --LISTGAMES.VUE-- lägg till biblioteksfunktioner 
13. --GAMELIBRARYVIEW.VUE-- importera komponent för ListGames samt lägg till komponentmetod
13-. lägg till HTML
14. skapa props för varje AddGame-objekt
15. loopa igenom array med objekt
16. methods: hämta data dynamiskt via AJAX; skapa funktioner
16-1. skapa FETCH mot API
16-2. lagra svar i JSON-format
16-3. lagra svaren/JSON-objektet i games-array
17. skapa metod mounted() för att anropa API igen vid tillägg
18. skapa händelselyssnare för DELETE, genom emit 
18-1. koppla händelselyssnare med barnkomponent och funktionen deleteGame
19. skapa funktion för DELETE deleteGame, med id som argument
20. nytt AJAX-anrop med FETCH-data
20-1. lagra svara i JSON
20-2. anropa getGames för att uppdatera listan
21. lägg till AddGame.vue; importera i view-fil; lägg till komponenten i components
22. --ADDGAME.VUE-- skapa formulär
22-0. skapa data för inmatning - länka med formulär-HTML
22-1. länka inmatninsgfält med "game" i data
22-2. lägg till händelselyssnare för submit samt prevent.default
22-3. skapa funktion för att lagra data
22-4. kontroll om någon inmatning
22-5. skapa varibel för body för JS-objekt som ska skickas
22-6. omvandla variabeln till JSON-objekt
23. ladda om sidan vid submit med en emit
23-1. deklerara emitten 
23-2. lägg till emitten i föräldrarkomponenten
24. lägg till övrig formulär