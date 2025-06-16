







<!-- 


<template>
  <header class="header">
    <h1 class="logo">🎬 Movie Explorer</h1>
    <div class="search-container">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Search movies..." 
        @input="handleSearch"
      />
      <SearchSuggestions 
        v-if="suggestions.length" 
        :suggestions="suggestions"
        @select="goToMovie"
      />
    </div>
    <nav class="nav-links">
      <router-link to="/directors">Directors</router-link>
      <router-link to="/actors">Actors</router-link>
    </nav>
  </header>
</template>


<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import SearchSuggestions from './SearchSuggestions.vue'

const searchQuery = ref('')
const suggestions = ref([])
const router = useRouter()

const handleSearch = async () => {
  if (searchQuery.value.trim() === '') {
    suggestions.value = []
    return
  }
  const res = await axios.post('http://localhost:5000/api/search', {
    q: searchQuery.value
  })
  suggestions.value = res.data
}

const goToMovie = (movie) => {
  router.push(`/movie/${movie._id}`)
  suggestions.value = []
  searchQuery.value = ''
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #121212;
  color: #2fff;
  padding: 1rem 2rem;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
}

.search-container {
  position: relative;
  flex: 1;
  max-width: 400px;
  margin: 0 2rem;
}

.search-container input {
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  border: none;
  outline: none;
  font-size: 1rem;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-links a {
  background: #1db954;
  color: white;
  text-decoration: none;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  transition: background 0.3s ease;
}

.nav-links a:hover {
  background: #1aa34a;
}

/* Optional: style SearchSuggestions dropdown to overlap input nicely */
.search-container .suggestions {
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  z-index: 10;
}
</style>
 -->






<template>
  <header class="header">
    <h1 class="logo">🎬 Movie Explorer</h1>
    <div class="search-container">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Search movies..." 
        @input="handleSearch"
      />
      <SearchSuggestions 
        v-if="suggestions.length" 
        :suggestions="suggestions"
        @select="goToMovie"
      />
    </div>
    <nav class="nav-links">
      <router-link to="/directors">Directors</router-link>
      <router-link to="/actors">Actors</router-link>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import SearchSuggestions from './SearchSuggestions.vue'

const searchQuery = ref('')
const suggestions = ref([])
const router = useRouter()

const handleSearch = async () => {
  if (searchQuery.value.trim() === '') {
    suggestions.value = []
    return
  }
  const res = await axios.post('http://localhost:5000/api/search', {
    q: searchQuery.value
  })
  suggestions.value = res.data
}

const goToMovie = (movie) => {
  router.push(`/movie/${movie._id}`)
  suggestions.value = []
  searchQuery.value = ''
}
</script>

<style scoped>
.header {
  position: fixed;   /* ✅ fix the header at the top */
  top: 0;
  left: 0;
  width: 100%;       /* ✅ full width */
  z-index: 1000;     /* ✅ stays on top of other content */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #121212;
  color: #2fff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
}

.search-container {
  position: relative;
  flex: 1;
  max-width: 300px;
  margin: 0 2rem;
}

.search-container input {
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  border: none;
  outline: none;
  font-size: 1rem;
}

/* .nav-links {
  display: flex;
  gap: 1rem;
  margin-left: 100px;
} */

.nav-links a {
  background: #1db954;
  color: white;
  text-decoration: none;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  transition: background 0.3s ease;
  margin-right: 50px;
}

.nav-links a:hover {
  background: #1aa34a;
}

.search-container .suggestions {
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  z-index: 10;
}
</style>

