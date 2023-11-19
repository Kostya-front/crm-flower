import {defineStore} from "pinia";
import {ref} from "vue";
import {ICategory} from "@/features/categories/store/types";



export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<ICategory[]>([
    {id:1, title: 'букеты', url: ''},
    {id:2, title: 'монобукеты', url: ''},
    {id:3, title: 'подарки', url: ''},
  ])


  function addCategory(category: ICategory ) {
    categories.value.push(category)
  }

  function deleteCategory(id: number) {
    categories.value = categories.value.filter(category => category.id !== id)
  }

  return {
    categories,
    addCategory,
    deleteCategory
  }
})

