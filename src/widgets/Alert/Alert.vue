<template>
    <div class="alerts">
        <div class="alert" v-for="alertItem of alertStore.alerts">
            {{ alertItem }}
        </div>
    </div>
</template>

<script setup lang="ts">
import {useAlertStore} from '../../features/alert/store'
const alertStore = useAlertStore()

</script>

<style scoped>
.alerts {
    position: fixed;
    display: flex;
    flex-direction: column;
    right: 5%;
    bottom: 5%;
}
.alert {
    width: 200px;
    height: 100px;
    background-color: green;
}
</style>