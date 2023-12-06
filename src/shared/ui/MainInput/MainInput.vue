<template>
  <input :value="modelValue" @input="($event) => onInput($event)" type="text">
</template>

<script setup lang="ts">
const props = defineProps(['modelValue'])

const emit = defineEmits(['update:modelValue'])

function onInput(event: Event) {
  const text = (event.target as HTMLInputElement).value;
  emit('update:modelValue', text)
}
</script>

<style scoped>

</style>