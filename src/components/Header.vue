<!-- 4. skapa Header-fil med templatekod--> 

<template>
    <header class="row">
        <div>
            <!-- 5. skapa huvudmeny-->
            <nav class="navbar fixed-top navbar-dark bg-dark bg-gradient d-flex justify-content-center">
                
                    <!-- 8. skapa länker (känner av RouterLink redan)-->
                    <a>
                        <RouterLink to="/" class="m-3 btn btn-light text-decoration-none">Start</RouterLink>
                    </a>
                    <a>
                        <RouterLink to="/gamelibrary" class="m-3 btn btn-light text-decoration-none">Bibliotek</RouterLink>                        
                    </a>
                    <a>
                        <RouterLink to="/information" class="m-3 btn btn-light text-decoration-none">Information</RouterLink>
                    </a>
               
            </nav>
            <br><br><br><br><br>
            <h1 class="font-weight-bolder text-center ">SPELBIBLIOTEKSTJÄNST</h1>
            <br>
            <img src="../assets/BANNERBILD.jpg" class="img-fluid">
            <br>
        </div>
    </header>
</template>

<script>
    // 6. importera routerlänk
    import { RouterLink } from 'vue-router';

    // 7. vilka komponenter vi vill använda
    export default {
        components: {
            RouterLink
        }
    }
</script>

