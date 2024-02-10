<template>
    <DangerButton @click="onClick" text="X"/>
</template>

<script setup lang="ts">
import DangerButton from '@/shared/ui/DangerButton/DangetButton.vue';
import { useAdvantagesStore } from '@/features/advantages/store';

const props = defineProps(['advantadeId'])
const advantageStore = useAdvantagesStore()

function onClick() {
    advantageStore.deleteAdvantage(props.advantadeId)
}
</script>

<style scoped>

</style>