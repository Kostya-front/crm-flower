<template>
  <div class="content">
      <Header/>

      <Aside/>

      <main class="main">
        <router-view/>
      </main>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

.content {
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 80px auto;
  height: 100vh;
  grid-template-areas:
        'header header'
        'aside main';
}

.container {
  max-width: 95%;
  margin: 0 auto;
}

.container__flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main {
  grid-area: main;
  padding: 20px;
}
</style>

<script setup lang="ts">
import Header from '@/widgets/Header/Header'
import Aside from '@/widgets/Aside/Aside'
</script>