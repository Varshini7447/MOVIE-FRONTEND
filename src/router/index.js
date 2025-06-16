import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Directors from '../views/Directors.vue'
import Actors from '../views/Actors.vue'
import MovieDetails from '../views/MovieDetails.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/directors', name: 'Directors', component: Directors },
  { path: '/actors', name: 'Actors', component: Actors },
  { path: '/movie/:id', name: 'MovieDetails', component: MovieDetails, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
