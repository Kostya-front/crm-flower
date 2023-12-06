<template>
  <div>
    <h1>Категории</h1>

    <CreateCategory/>

    <ErrorsList :errors="[]"/>

    <CategoryTable/>
  </div>
</template>

<script setup lang="ts">
import CategoryTable from "@/widgets/CategoryTable/CategoryTable.vue";
import CreateCategory from "@/features/categories/components/CreateCategory.vue";
import ErrorsList from '@/entities/ErrorsList/ErrorsList.vue'

</script>

<style scoped>

</style>