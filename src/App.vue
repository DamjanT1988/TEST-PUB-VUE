<template>
  <div class="container">
<!-- 11. infoga Header-component-->
  <Header />

<!-- 11-1. infoga RouterView-->
  <main>
    <RouterView />
  </main>

  <Footer />
</div>
</template>

<script>
import { RouterView } from 'vue-router'

// 9. importera header till rootkomponent
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

// 10. använd header
export default {
  components: {
    Header, RouterView, Footer
  }
}




</script>


<style scoped>

</style>
