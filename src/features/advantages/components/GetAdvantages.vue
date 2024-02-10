<template>
    <!-- <table v-if="advantageStore.advantages.length !== 0" class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Название преимущества</th>
          <th scope="col">Описание преимущества</th>  ['Название', 'Описание']
        </tr>
        </thead>
        <tbody>
        <tr v-for="(advantage, index) of advantageStore.advantages">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{advantage.title}}</td>
          <td>{{advantage.description}}</td>
          <td><DeleteAdvantage :advantadeId="advantage.id"/></td>
        </tr>
        </tbody>
      </table>
    
      <p v-else>Создайте первое преимущество</p> -->

      <Table
        :condition="advantageStore.advantages.length !== 0"
        :columns="['Название преимущества', 'Описание преимущества']"
        message="Создайте первое преимущество"
        :rows="advantageStore.advantages"
      >
      <template v-slot="advantageProps: {index: number, item: IAdavantage}">
        <tr>
          <th scope="row">{{ advantageProps.index + 1 }}</th>
          <td>{{advantageProps.item.title}}</td>
          <EditDescription 
            v-model="advantageProps.item.description" 
            :advantageId="advantageProps.item.id"
            :description="advantageProps.item.description"
          />
          <td class="buttons">
            <SuccessButton text=""/>
            <DeleteAdvantage :advantadeId="advantageProps.item.id"/>
          </td>
        </tr>
      </template>
      </Table>
</template>

<script setup lang="ts">
import {useAdvantagesStore} from '@/features/advantages/store'
import DeleteAdvantage from './DeleteAdvantage.vue';
import Table from '@/shared/ui/Table/Table.vue'
import { IAdavantage } from '../types';
import EditDescription from './EditDescription.vue';
import { onMounted } from 'vue';
import SuccessButton from '@/shared/ui/SuccessButton/SuccessButton.vue';

const advantageStore = useAdvantagesStore()

onMounted(() => {
  advantageStore.getAdvantages()
})
</script>

<style scoped>
.buttons {
  display: flex;
  gap: 20px;
}
</style>