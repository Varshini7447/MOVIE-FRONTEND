<template>
  <router-link :to="`/movie/${movie._id}`" class="movie-card">
    <img :src="movie.poster" alt="Poster" class="poster" />
    <h3>{{ movie.title }}</h3>
  </router-link>
</template>

<script setup>
const props = defineProps(['movie'])
</script>

<style scoped>
.movie-card {
  display: block;                
  cursor: pointer;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background: #fff;
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;        
}

.movie-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.movie-card img {
  height: 100px;                 
  object-fit: cover;            
}

.movie-card h3 {
  margin: 10px 0;
  padding: 0 10px;
  font-size: 1rem;
  color: rgb(146, 91, 40);
}
</style>
