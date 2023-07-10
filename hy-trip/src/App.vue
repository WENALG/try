<template>
    <div class="app">
 
<!-- <router-view v-slot="{Component}">
    <transition name="home">
        <keep-alive>
            <component :is="Component"></component>
        </keep-alive>      
    </transition>
</router-view> -->
        <router-view></router-view>
        <tab-bar></tab-bar>
        <loading></loading>
    </div>

</template>

<script setup>
    import tabBar from '@/components/tab-bar/tab-bar.vue'
    import loading from '@/components/loading/index.vue'
</script>

<style scoped>

</style>
