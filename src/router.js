import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Directors from './pages/Directors.vue';
import Actors from './pages/Actors.vue';
import MovieDetail from './pages/MovieDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/directors', component: Directors },
  { path: '/actors', component: Actors },
  { path: '/movie/:id', component: MovieDetail, props: true }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
