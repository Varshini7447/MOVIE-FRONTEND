<template>
  <div class="container">
    <Header />

    <h2>Actors</h2>

    <ul class="list">
      <li v-for="actor in actors" :key="actor">
        🎭 {{ actor }}
      </li>
    </ul>

    <div class="pagination">
      <button @click="prevPage" :disabled="page === 1">Previous</button>
      <span>Page {{ page }}</span>
      <button @click="nextPage" :disabled="!hasMore">Next</button>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const actors = ref([])
const page = ref(1)
const hasMore = ref(true) 

const fetchActors = async () => {
  const res = await axios.get(`http://localhost:5000/api/cast?page=${page.value}`)
  actors.value = res.data
  hasMore.value = res.data.length === 12;
}

const nextPage = () => {
  if(hasMore.value){
  page.value++
  fetchActors()
  }

}

const prevPage = () => {
  if (page.value > 1) {
    page.value--
    fetchActors()
  }
}

onMounted(fetchActors)
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 20px auto;
  padding: 0 20px;
  text-align: center;
}

h2 {
  margin-top: 80px;
  text-align: center;
  color: #333;
  
}

.list {
  list-style: none;
  padding: 0;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.list li {
  padding: 12px 20px;
  border-bottom: 1px solid #eee;
  font-size: 1.1rem;
}

.list li:last-child {
  border-bottom: none;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  background: #333;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin: 0 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.pagination button:hover:not(:disabled) {
  background: #555;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination span {
  font-weight: bold;
  color: #333;
}
</style>
