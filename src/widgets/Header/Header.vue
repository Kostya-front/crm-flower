<template>
  <header class="header">
    <div class="container container__flex">
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="logo">
      </router-link>

      <SecondaryButton text="Выйти"/>
    </div>
  </header>
</template>

<script setup lang="ts">
import SecondaryButton from '@/shared/ui/SecondaryButton/SecondaryButton'
</script>

<style scoped>
  .header {
    background: linear-gradient(90deg, #04041A, #15164D);
    padding: 20px 0;
    grid-area: header;
  }
</style>