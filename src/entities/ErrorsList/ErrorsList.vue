<template>
  <ul class="list">
    <li v-for="(error, index) of errors" :key="index"> {{error}}</li>
  </ul>
</template>

<script setup lang="ts">
interface IProps {
  errors: string []
}

const props = defineProps<IProps>()
</script>

<style scoped>
.list {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #dc3545;
}
</style>