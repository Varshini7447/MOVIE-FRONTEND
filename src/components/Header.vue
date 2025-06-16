<template>
  <header>
    <input v-model="query" @input="searchMovies" placeholder="Search movies..." />
    <ul v-if="results.length">
      <li v-for="movie in results" :key="movie._id">
        <router-link :to="`/movie/${movie._id}`">{{ movie.title }}</router-link>
      </li>
    </ul>
    <nav>
      <router-link to="/directors">Directors</router-link>
      <router-link to="/actors">Actors</router-link>
    </nav>
  </header>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return { query: '', results: [] };
  },
  methods: {
    async searchMovies() {
      if (this.query.length < 2) {
        this.results = [];
        return;
      }
      const res = await axios.post('/api/search', { q: this.query });
      this.results = res.data;
    }
  }
};
</script>

<style scoped>
/* Add styling for dropdown and layout */
</style>
