<template>
  <div>
    <h1>Категории</h1>

    <CreateCategory/>

    <ErrorsList :errors="[]"/>

    <CategoryTable/>

    <transition>
      <Popup>
        <EditCategory/>
      </Popup>
    </transition>
  </div>
</template>

<script setup lang="ts">
import CategoryTable from "@/widgets/CategoryTable/CategoryTable.vue";
import CreateCategory from "@/features/categories/components/CreateCategory.vue";
import ErrorsList from '@/entities/ErrorsList/ErrorsList.vue'
import Popup from "@/widgets/Popup/Popup.vue";
import EditCategory from "@/features/categories/components/EditCategory.vue";

</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(1.2);
}
</style>