<template>
  <div class="toggle__popup">
    <slot :onClick="openPopup"/>
  </div>
</template>

<script setup lang="ts">

import {usePopupStore} from "@/features/popup/store/popupStore";

const popupStore = usePopupStore()

function openPopup() {
  popupStore.openPopup()
}
</script>

<style scoped>

</style>