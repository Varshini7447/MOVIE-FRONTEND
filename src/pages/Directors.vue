<template>
  <Header />
  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
  <Pagination :page="page" @next="nextPage" @prev="prevPage" />
</template>

<script>
import axios from 'axios';
import Header from '../components/Header.vue';
import Pagination from '../components/Pagination.vue';

export default {
  components: { Header, Pagination },
  data() {
    return { items: [], page: 1 };
  },
  created() {
    this.loadItems();
  },
  methods: {
  async loadItems() {
  const res = await axios.get(`/api/directors?page=${this.page}`);
  this.items = res.data;
},
    nextPage() {
      this.page++;
      this.loadItems();
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
        this.loadItems();
      }
    }
  }
};
</script>
