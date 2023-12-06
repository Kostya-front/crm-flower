import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import {ICategory, INewCategory} from "@/features/categories/store/types";
import {instance} from "@/shared/axios";
import {AxiosError} from "axios";



export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<ICategory[]>([])
  const newCategory = reactive<INewCategory>({
    title: '',
    urlImage: ''
  })
  let errors = reactive<string []>([])

  async function getCategories() {
    try {
      const {data} = await instance.get('categories')
      categories.value = data
    } catch (e) {
      console.log(e)
    }
  }

  async function addCategory() {
    try {
      const {data} = await instance.post<ICategory>('categories', newCategory)
      categories.value.push(data)
      newCategory.title = ''
      newCategory.urlImage = ''
    } catch (e: AxiosError | any) {
      errors = JSON.parse(e.message)
    }
  }

  async function deleteCategory(id: number) {
    try {
      await instance.delete(`categories/${id}`)
      categories.value = categories.value.filter(category => category.id !== id)
    } catch (e) {
      console.log(e)
    }
  }

  return {
    categories,
    newCategory,
    addCategory,
    getCategories,
    deleteCategory
  }
})

