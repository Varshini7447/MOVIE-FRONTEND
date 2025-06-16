<template>
  <Header />
  <div class="movie-details" v-if="movie">
    <img :src="movie.poster" />
    <h1>{{ movie.title }}</h1>
    <p><strong>Plot:</strong> {{ movie.plot }}</p>
    <p><strong>Full Plot:</strong> {{ movie.fullplot }}</p>
    <p><strong>Cast:</strong> {{ movie.cast?.join(', ') }}</p>
    <p><strong>Directors:</strong> {{ movie.directors?.join(', ') }}</p>
    <p><strong>IMDB Rating:</strong> {{ movie.imdb.rating }}</p>
  </div>
  <div class="comments" v-if="comments.length">
    <h2>Comments</h2>
    <ul>
      <li v-for="comment in comments" :key="comment._id">
        <strong>{{ comment.name }}</strong>: {{ comment.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../components/Header.vue';

export default {
  components: { Header },
  props: ['id'],
  data() {
    return { movie: null, comments: [] };
  },
  async created() {
    const res = await axios.get(`/api/movies/${this.id}`);
    this.movie = res.data;
    const com = await axios.get(`/api/movies/${this.id}/comments`);
    this.comments = com.data;
  }
};
</script>
