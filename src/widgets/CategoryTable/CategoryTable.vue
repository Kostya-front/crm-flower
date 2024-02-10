<template>
<Loading>
  <GetCategories/>
</Loading>
</template>

<script setup lang="ts">
// import GetCategories from '@/features/categories/components/GetCategories.vue'
import { defineAsyncComponent } from 'vue';
import Loading from '@/widgets/Loading/Loading.vue'
const GetCategories = defineAsyncComponent(() => import('@/features/categories/components/GetCategories.vue'))
</script>

<style scoped>

</style>