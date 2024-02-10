<template>
  <form @submit.prevent="onSubmit">
    <MainInput v-model="categoryStore.updatingCategory.title" />
    <MainInput v-model="categoryStore.updatingCategory.urlImage" />
    <SuccessButton text="Сохранить"/>
  </form>
</template>

<script setup lang="ts">
import MainInput from "@/shared/ui/MainInput/MainInput.vue";
import SecondaryButton from "@/shared/ui/SecondaryButton/SecondaryButton.vue";
import SuccessButton from '@/shared/ui/SuccessButton/SuccessButton.vue'
import {useCategoriesStore} from "@/features/categories/store/categoriesStore";
import {usePopupStore} from "@/features/popup/store/popupStore";

const categoryStore = useCategoriesStore()
const popupStore = usePopupStore()

const id = categoryStore.updatingCategory.id

async function onSubmit() {
  await categoryStore.editCategory(id)
  popupStore.closePopup()
}
</script>

<style scoped>

</style>