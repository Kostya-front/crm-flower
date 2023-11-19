<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Категории</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(category, index) of categoriesStore.categories" :key="category.id">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ category.title }}</td>
      <td class="td-buttons"><DeleteCategory :id="category.id"/></td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">

import {useCategoriesStore} from "@/features/categories/store/categoriesStore";
import DeleteCategory from "@/features/categories/components/DeleteCategory.vue";
const categoriesStore = useCategoriesStore()
</script>

<style scoped>
.td-buttons {
  text-align: right;
}
</style>