<template>
  <div class="movie-card" @click="goToDetails">
    <img :src="movie.poster" alt="Poster" class="poster" />
    <h3>{{ movie.title }}</h3>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps(['movie'])
const router = useRouter()

const goToDetails = () => {
  router.push(`/movie/${props.movie._id}`)
}
</script>

<style scoped>
.movie-card {
  cursor: pointer;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background: #fff;
  transition: transform 0.2s, box-shadow 0.2s;
}

.movie-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.movie-card img {
  
  width: 50%;
  height: 100px;
  
}

.movie-card h3 {
  margin: 10px 0;
  padding: 0 10px;
  font-size: 1rem;
  color: #333;
  
}


</style>
