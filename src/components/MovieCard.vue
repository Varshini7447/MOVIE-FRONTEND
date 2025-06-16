<template>
  <div class="movie-card">
    <img :src="movie.poster" alt="Poster" />
    <h3>{{ movie.title }}</h3>
    <router-link :to="`/movie/${movie._id}`">Details</router-link>
  </div>
</template>

<script>
export default {
  props: ['movie']
};
</script>
