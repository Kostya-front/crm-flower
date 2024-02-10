<template>
  <form @submit.prevent="onSubmit" class="form">
<!--    <div class="input-group">-->
<!--      <div class="form-floating">-->
<!--        <input v-model="title" type="text" class="form-control" id="floatingInputGroup1" placeholder="Введите название категории...">-->
<!--        <label for="floatingInputGroup1">Категория</label>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="input-group">-->
<!--      <div class="form-floating">-->
<!--        <input v-model="url" type="text" class="form-control" id="floatingInputGroup1" placeholder="Введите url картинки...">-->
<!--        <label for="floatingInputGroup1">Url картинки</label>-->
<!--      </div>-->
<!--    </div>-->

    <MainInput v-model="categoriesStore.newCategory.title" />
    <MainInput v-model="categoriesStore.newCategory.urlImage" />
    <button class="btn btn-primary">Создать</button>
  </form>
</template>

<script setup lang="ts">
import {useCategoriesStore} from "@/features/categories/store/categoriesStore";
import MainInput from '@/shared/ui/MainInput/MainInput.vue'

const categoriesStore = useCategoriesStore()

function onSubmit() {
  categoriesStore.addCategory()
}
</script>

<style scoped>
.form {
  display: grid;
  grid-template-columns: 6fr 6fr 1fr;
  gap: 20px;
}
</style>