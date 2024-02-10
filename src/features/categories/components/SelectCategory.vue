<template>
  <SuccessButton text="" @click.native="onClick"/>
</template>

<script setup lang="ts">
import {ICategory} from "@/features/categories/store/types";
import SuccessButton from "@/shared/ui/SuccessButton/SuccessButton.vue";
import {useCategoriesStore} from "@/features/categories/store/categoriesStore";

interface IProps {
  category: ICategory
  openPopup: () => void
}
const props = defineProps<IProps>()

const categoryStore = useCategoriesStore()

function onClick() {
  categoryStore.selectCategory(props.category)
  props.openPopup()
}

</script>

<style scoped>

</style>