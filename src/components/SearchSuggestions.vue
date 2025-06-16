<template>
  <ul class="suggestions">
    <li v-for="movie in suggestions" :key="movie._id" @click="select(movie)">
      {{ movie.title }}
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(['suggestions'])
const emit = defineEmits(['select'])

const select = (movie) => {
  emit('select', movie)
}
</script>

<style scoped>
.suggestions {
  background: #201f1f;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
}

.suggestions li {
  padding: 8px;
  cursor: pointer;
}

.suggestions li:hover {
  background: #eee;
}
</style>
