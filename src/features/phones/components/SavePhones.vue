<template>
    <div class="phones">
        <template v-for="(phone, index) of phonesStore.phones" :key="phone.id">
            <MaskInput v-model="phone.text" mask="+7(###)-###-##-##"/> 
            <button 
            v-if="index === 0" 
            @click="phonesStore.createPhone"
            class="btn btn-primary"
            >+</button>
            <DangerButton text="X" v-else />
        </template>

        <button class="btn btn-primary">Сохранять</button>
    </div>
</template>

<script setup lang="ts">
import {MaskInput} from 'vue-3-mask'
import MainInput from '@/shared/ui/MainInput/MainInput.vue'
import DangerButton from '@/shared/ui/DangerButton/DangetButton.vue'
import { ref } from 'vue';
import {usePhonesStore} from '@/features/phones/store'

const phonesStore = usePhonesStore()

function name(params:type) {
    
}
</script>

<style scoped>
.phones {
    display: grid;
    grid-template-columns: 1fr max-content;
    gap: 17px;
}
</style>