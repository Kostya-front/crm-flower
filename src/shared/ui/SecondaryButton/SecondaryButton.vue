<template>
  <button class="button">{{ text }}</button>
</template>

<script setup lang="ts">
const props = defineProps(['text'])
</script>

<style scoped>
  .button {
    background-color: #ffffff;
    border: 1px solid #0A0A22;
    color: #030319;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.99);
    border-radius: 24px;
    padding: 10px 49px;
  }
</style>