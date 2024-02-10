<template>
  <input v-clear="() =>  emit('update:modelValue', '')" :value="modelValue" @input="($event) => onInput($event)" class="form-control" type="text" v-mask="'##/##/####'" >
</template>

<script setup lang="ts">
import { vClear } from '@/shared/directives';
const props = defineProps(['modelValue'])

const emit = defineEmits(['update:modelValue'])

function onInput(event: Event) {
  const text = (event.target as HTMLInputElement).value;
  emit('update:modelValue', text)
}
</script>

<style scoped>

</style>