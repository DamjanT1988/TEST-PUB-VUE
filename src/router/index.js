import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// 2. importera vue-fil
import GameLibraryView from '../views/GameLibraryView.vue';
import InformationView from '../views/InformationView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: HomeView
    },
    // 3. skapa router
    {
      path: '/gamelibrary',
      name: 'bibliotek',
      component: GameLibraryView
    },
    {
      path: '/information',
      name: 'om',
      component: InformationView
    }
  ]
})

export default router

