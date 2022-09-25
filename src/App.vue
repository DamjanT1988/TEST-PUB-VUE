<template>
<!-- 11. infoga Header-component-->
  <Header />

<!-- 11-1. infoga RouterView-->
  <main>
    <RouterView />
  </main>
</template>

<script>
import { RouterView } from 'vue-router'

// 9. importera header till rootkomponent
import Header from './components/Header.vue'

// 10. använd header
export default {
  components: {
    Header, RouterView
  }
}




</script>


<style scoped>

</style>
