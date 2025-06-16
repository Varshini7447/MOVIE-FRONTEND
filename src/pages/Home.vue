<template>
  <Header />
  <div class="movies">
    <MovieCard v-for="movie in movies" :key="movie._id" :movie="movie" />
  </div>
  <Pagination :page="page" @next="nextPage" @prev="prevPage" />
</template>

<script>
import axios from 'axios';
import Header from '../components/Header.vue';
import MovieCard from '../components/MovieCard.vue';
import Pagination from '../components/Pagination.vue';

export default {
  components: { Header, MovieCard, Pagination },
  data() {
    return { movies: [], page: 1 };
  },
  async created() {
    this.loadMovies();
  },
  methods: {
    async loadMovies() {
      const res = await axios.get(`/api/movies?page=${this.page}&sort=year`);
      this.movies = res.data;
    },
    nextPage() {
      this.page++;
      this.loadMovies();
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
        this.loadMovies();
      }
    }
  }
};
</script>
