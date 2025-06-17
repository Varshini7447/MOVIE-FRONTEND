<template>
  <div class="home-container">
    <Header />
    <main>
      <h2>Recent Movies</h2>
      <MovieList :movies="movies" />
      <div class="pagination">
        <button @click="prevPage" :disabled="page === 1">Previous</button>
        <span>Page {{ page }}</span>
        <button @click="nextPage" :disabled="!hasMore">Next</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import MovieList from '../components/MovieList.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const movies = ref([])
const page = ref(1)
const hasMore = ref(true) 


const fetchMovies = async () => {
  const res = await axios.get(`http://localhost:5000/api/movies?page=${page.value}`)
  // movies.value = res.data
  // hasMore.value = res.data.length === 12;
  movies.value = res.data.movies;  
  hasMore.value = res.data.hasMore;
}

const nextPage = () => {
  if(hasMore.value){
  page.value++
  fetchMovies()
  }
}

const prevPage = () => {
  if (page.value > 1) {
    page.value--
    fetchMovies()
  }
}

onMounted(fetchMovies)
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: #f4f4f4;
  width: 100%;
}

main {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  text-align: center;
}

h2 {
  margin-top: 80px;
  /* margin-bottom: 1.3rem; */
  font-size: 2rem;
  color: #333;
}

.pagination {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.pagination button {
  padding: 0.6rem 1.2rem;
  border: none;
  background: #1db954;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.pagination button:disabled {
  background: #aaa;
  cursor: not-allowed;
}

.pagination button:hover:not(:disabled) {
  background: #1aa34a;
}

.pagination span {
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
