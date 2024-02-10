<template>
    <form @submit.prevent="onSubmit" class="form">
        <input v-model="advantageStore.title" class="form-control"  type="text">
        <input v-model="advantageStore.url" class="form-control"  type="text">
        <button class="btn btn-primary">Сохранить</button>
        <textarea v-model="advantageStore.description" class="form-control text__area"></textarea>
    </form>
</template>

<script setup lang="ts">
import {useAdvantagesStore} from '@/features/advantages/store/index'

const advantageStore = useAdvantagesStore()

function onSubmit() {
    advantageStore.addAdvantage()
}
</script>

<style scoped>
.form {
    display: grid;
    grid-template-columns: 3fr 3fr 1fr;
    grid-template-areas:
        'inputTitle inputUrl button'
        'descr descr descr';
    gap: 20px;
}

.text__area {
    grid-area: descr
}
</style>