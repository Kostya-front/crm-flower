import {defineStore} from "pinia";
import {ref} from "vue";


export const usePopupStore = defineStore('popup', () => {
  const isVisible = ref(false)

  function openPopup() {
    isVisible.value = true
  }

  function closePopup() {
    isVisible.value = false
  }

  return {
    isVisible,
    openPopup,
    closePopup
  }
})