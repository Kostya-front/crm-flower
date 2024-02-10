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

  const updatingCategory = reactive({id:0, title: '', urlImage: ''})





  let errors = ref<string []>([])

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
      console.log(JSON.parse(e.response?.data))
      errors.value = [...JSON.parse(e.response?.data)]
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

  async function editCategory(id: number) {
    try {
      const {data} = await instance.patch<ICategory>(`/categories/${id}`, updatingCategory)

      // categories.value = categories.value.map((category) => {
      //   if(category.id === id) {
      //     category.title = data.title
      //     category.urlImage = data.urlImage
      //   }
      //   return category
      // })

      const foundCategory = categories.value.find((category) => category.id === id)

      if(foundCategory) {
        foundCategory.title = data.title
        foundCategory.urlImage = data.urlImage
      }
    } catch (e) {
      console.log(e)
    }
  }

  function selectCategory(category: ICategory) {
    updatingCategory.id = category.id
    updatingCategory.title = category.title
    updatingCategory.urlImage = category.urlImage
  }

  return {
    categories,
    newCategory,
    addCategory,
    getCategories,
    deleteCategory,
    updatingCategory,
    editCategory,
    selectCategory,
    errors
  }
})

