<template>
    <td @dblclick="toggleTextArea" v-if="!isEdit">{{description}}</td>

    <td v-else >
        <textarea 
        v-focus
        :value="modelValue"
        @input="($event) => onInput($event)"
        @blur="onBlur" 
        class="form-control">
    </textarea>
    </td>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useAdvantagesStore} from '@/features/advantages/store'
import {vFocus} from '@/shared/directives/index'
interface IProps {
    description: string
    modelValue: string
    advantageId: number
}
const props = defineProps<IProps>()
const emit = defineEmits(['update:modelValue'])
const isEdit = ref(false)

const advantageStore = useAdvantagesStore()


function toggleTextArea() {
    isEdit.value = !isEdit.value
}

function onInput(event: Event) {
  const text = (event.target as HTMLInputElement).value;
  emit('update:modelValue', text)
}

function onBlur() {
    advantageStore.editAdvantage(props.advantageId)
    toggleTextArea()
}

</script>

<style scoped>

</style>