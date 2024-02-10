import { defineStore } from "pinia";
import { ref } from "vue";



export const usePhonesStore = defineStore('phones', () => {
    const phones = ref([
        {id: new Date().getTime(), text: ''}
    ])


    function createPhone() {
        const phone = {id: new Date().getTime(), text: ''}
        phones.value.push(phone)
    }

    function deletePhone(id: number) {
        phones.value = phones.value.filter(phone => phone.id !== id)
    }


    return {
        phones,
        createPhone,
        deletePhone
    }
})