import { defineStore } from "pinia";
import { ref } from "vue";
import type { IAdavantage } from "../types";
import { instance } from "@/shared/axios";


export const useAdvantagesStore = defineStore('advantages', () => {
    const advantages = ref<IAdavantage []>([])

    const title = ref('')
    const url = ref('')
    const description = ref('')


    async function getAdvantages() {
        try {
            const {data} = await instance.get('advantages')
            advantages.value = data
        }
        catch(e) {

        }
    }

    async function addAdvantage() {
        const advantage = {
            title: title.value,
            url: url.value,
            description: description.value
        }

        const {data} = await instance.post('advantages', advantage)

        advantages.value.push(data)

        title.value = ''
        url.value = ''
        description.value = ''
    }

    function deleteAdvantage(id: number) {
        advantages.value = advantages.value.filter((advantage) => advantage.id !== id)
    }

    async function editAdvantage(id: number) {
        const foundAdvantage = advantages.value.find((advantage) => advantage.id === id)

        if(foundAdvantage) {
            await instance.patch(`advantages/${id}`, foundAdvantage)
        }
    }


    return {
        advantages,
        title,
        url,
        description,
        addAdvantage,
        editAdvantage,
        deleteAdvantage,
        getAdvantages
    }
})