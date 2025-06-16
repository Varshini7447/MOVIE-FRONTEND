<template>
  <div class="movie-list">
    <MovieCard v-for="movie in movies" :key="movie._id" :movie="movie" />
  </div>
</template>

<script setup>
import MovieCard from './MovieCard.vue'
const props = defineProps(['movies'])
</script>

<style scoped>
.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}
</style>
