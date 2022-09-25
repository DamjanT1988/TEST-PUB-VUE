<!-- 4. skapa Header-fil med templatekod--> 

<template>
    <header>
        <div class="container">
            <img src="../assets/BANNERBILD.jpg">
            <h1>SPELBIBLIOTEKTJÄNST</h1>
            <!-- 5. skapa huvudmeny-->
            <nav>
                <ul>
                    <!-- 8. skapa länker (känner av RouterLink redan)-->
                    <li>
                        <RouterLink to="/">Start</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/gamelibrary">Bibliotek</RouterLink>                        
                    </li>
                    <li>
                        <RouterLink to="/information">Information</RouterLink>
                    </li>
                </ul>
            </nav>
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

<!-- 11. CSS i header-->
<style scoped>


</style>