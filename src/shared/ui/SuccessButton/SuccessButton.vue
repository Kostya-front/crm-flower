<template>
  <button :class="{'button__icon': !text}" class="button btn btn-success">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
interface IProps {
  text: string
}

const props = defineProps<IProps>()
</script>

<style scoped>
.button {
  border-radius: 10px;
  padding: 5px;
  min-height: 35px;
  min-width: 35px;
}
.button__icon {
  background-image: url('../../../assets/edit.svg');
  background-repeat: no-repeat;
  background-position: center;
}
</style>