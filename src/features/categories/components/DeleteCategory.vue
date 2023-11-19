<template>
  <DangerButton @click="onClick(id)" text="X"/>
</template>

<script setup lang="ts">
import { useCategoriesStore } from '../store/categoriesStore';
import DangerButton from '@/shared/ui/DangerButton/DangetButton.vue'

const props = defineProps(['id'])
const categoriesStore = useCategoriesStore()

function onClick(id: number) {
    categoriesStore.deleteCategory(id)
}
</script>

<style>

</style>