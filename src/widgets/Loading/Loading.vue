<template>
    <Suspense>
        <template #default>
            <transition name="slot" appear>
                <slot/>
            </transition>
        </template>
    
        <template #fallback>
            <transition name="loading" appear>
                <div class="loader">
                    <p>Идет загрузка</p>
                </div>
            </transition>  
        </template>
      </Suspense>
</template>

<script setup lang="ts">

</script>

<style scoped>
.slot-enter-active {
    transition: 1s;
}
.slot-enter-from {
    opacity: 0;
}

.slot-enter-to {
    opacity: 1;
}

.loading-enter-active, .loading-leave-active {
    transition: all 0.5s ease-out;
}

.loading-enter-from, .loading-leave-to {
    opacity: 0;
    translate: 20px;
}

.loading-enter-to, .loading-leave-from {
    opacity: 1;
}

.loader {
    position: fixed;
    background: #000000a3;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
.loader p {
    background: #fff;
    padding: 50px;
}
</style>