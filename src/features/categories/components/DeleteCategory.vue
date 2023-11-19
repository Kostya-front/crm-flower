<template>
  <button @click="onClick(id)" class="btn btn-danger">X</button>
</template>

<script setup lang="ts">
import { useCategoriesStore } from '../store/categoriesStore';

const props = defineProps(['id'])
const categoriesStore = useCategoriesStore()

function onClick(id: number) {
    categoriesStore.deleteCategory(id)
}
</script>

<style>

</style>