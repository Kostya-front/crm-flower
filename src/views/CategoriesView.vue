<template>
  <div>
    <h1>Категории</h1>

    <CreateCategory/>

    <CategoryTable/>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import CategoryTable from "@/widgets/CategoryTable/CategoryTable.vue";
import CreateCategory from "@/features/categories/components/CreateCategory.vue";
</script>

<style scoped>

</style>