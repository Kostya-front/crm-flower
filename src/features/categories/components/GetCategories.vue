<template>
  <!-- <table v-if="categoriesStore.categories.length > 0" class="table">
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
      <td class="td-buttons">
        <TogglePopup v-slot="childrenProps">
          <SelectCategory :category="category" :openPopup="childrenProps.onClick"/>
        </TogglePopup>

        <DeleteCategory :id="category.id"/>
      </td>
    </tr>
    </tbody>
  </table>

  <p v-else>Нет созданых категорий</p> -->

  <Table
    :condition="categoriesStore.categories.length > 0"
    :columns="['Категории']"
    :rows="categoriesStore.categories"
    message="Нет созданых категорий"
  >
  <template v-slot="categoriesProps: {index: number, item: ICategory}">
    <tr>
      <th scope="row">{{ categoriesProps.index + 1 }}</th>
      <td>{{categoriesProps.item.title}}</td>
      <td><DeleteCategory :id="categoriesProps.item.id"/></td>
    </tr>
  </template>
  </Table>
</template>

<script setup lang="ts">
import {useCategoriesStore} from "@/features/categories/store/categoriesStore";
import DeleteCategory from "@/features/categories/components/DeleteCategory.vue";
import {onMounted} from "vue";
import SuccessButton from '@/shared/ui/SuccessButton/SuccessButton.vue'
import TogglePopup from "@/features/popup/components/TogglePopup.vue";
import SelectCategory from '@/features/categories/components/SelectCategory.vue'
import Table from '@/shared/ui/Table/Table.vue'
import { ICategory } from "../store/types";

const categoriesStore = useCategoriesStore()


await new Promise((res) => {
  setTimeout(() => {
    res(1)
  },1000)
})

await categoriesStore.getCategories()
</script>

<style scoped>
.td-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
}
</style>