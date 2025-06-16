<template>
  <div>
    <button @click="$emit('prev')" :disabled="page <= 1">Prev</button>
    <span>Page {{ page }}</span>
    <button @click="$emit('next')">Next</button>
  </div>
</template>

<script>
export default {
  props: ['page']
};
</script>
