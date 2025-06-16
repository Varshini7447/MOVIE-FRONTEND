<template>
  <div class="container">
    <Header />

    <div v-if="movie" class="movie-details">
      <h2 class="title">{{ movie.title }}</h2>
      <img :src="movie.poster" alt="Poster" class="poster" />

      <div class="info">
        <p class="plot">{{ movie.fullplot }}</p>
        <p><strong>🎭 Cast:</strong> {{ movie.cast.join(', ') }}</p>
        <p><strong> 📽️ Director:</strong> {{ movie.directors.join(', ') }}</p>
        <p><strong>⭐ IMDB Rating:</strong> {{ movie.imdb.rating }}</p>
      </div>

      <h3>💬 Comments</h3>
      <ul class="comments">
        <li v-for="comment in comments" :key="comment._id">
          <p>{{ comment.text }}</p>
          <small>— {{ comment.name }}</small>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import Header from '../components/Header.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

// ✅ Get props instead
const props = defineProps(['id'])

const movie = ref(null)
const comments = ref([])

const fetchMovie = async () => {
  const res = await axios.get(`http://localhost:5000/api/movies/${props.id}`)
  movie.value = res.data
}

const fetchComments = async () => {
  const res = await axios.get(`http://localhost:5000/api/movies/${props.id}/comments`)
  comments.value = res.data
}

onMounted(() => {
  fetchMovie()
  fetchComments()
})
</script>


<style >
.container {
  max-width: 800px;
  margin: 30px auto;
  padding: 0 20px;
}

.movie-details {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  padding: 20px;
  text-align: center;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}
/* .poster {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
} */

.movie-details .poster{
  height: 100px;
  background: 2px solid rgb(217, 79, 79);
 

}


.info {
  margin-bottom: 30px;
}

.info p {
  margin: 10px 0;
  line-height: 1.6;
  color: #444;
}

h3 {
  margin-bottom: 10px;
  color: #333;
}

.comments {
  list-style: none;
  padding: 0;
}

.comments li {
  background: #f9f9f9;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.comments p {
  margin: 0 0 8px;
}

.comments small {
  color: #666;
}
</style>
