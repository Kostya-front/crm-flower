<template>
    <table v-if="condition" class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th 
            v-for="column of columns" 
            :key="column" 
            scope="col">
            {{ column }}
        </th>
        </tr>
        </thead>
        <tbody>
        <slot 
            v-for="(item, index) of rows"
            :key="item.id"
            :item="item"
            :index="index"
        />
        </tbody>
      </table>
    
      <p v-else>{{message}}</p>
</template>

<script setup lang="ts">
interface IProps {
    condition: boolean
    columns: string []
    message: string
    rows: any []
}
const props = defineProps<IProps>()
</script>

<style scoped>

</style>