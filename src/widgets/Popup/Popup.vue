<template>
  <div v-if="popupStore.isVisible" class="popup">
    <div @click="closePopup" class="popup__bg"></div>

    <div class="popup__window">
      <slot/>
      <button @click="closePopup" class="popup__close">close</button>
    </div>
  </div>
</template>

<script setup lang="ts">

import {usePopupStore} from "@/features/popup/store/popupStore";

const popupStore = usePopupStore()

function closePopup() {
  popupStore.closePopup()
}
</script>

<style lang="scss" scoped>
  .popup {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &__bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.83);
    }
    &__window {
      background: #fff;
      padding: 20px;
      position: relative;
      min-width: 40%;
      min-height: 30%;
    }
    &__close {
      position: absolute;
      top: 3%;
      right: 3%;
    }
  }
</style>