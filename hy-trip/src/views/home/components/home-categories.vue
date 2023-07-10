<template>
  <div class="categories">
    <template v-for="item in categories">
        <div class="item">
            <img :src="item.pictureUrl" alt="">
            <div class="text">{{ item.title }}</div>
        </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/moudles/home';
import { storeToRefs } from 'pinia';
    const homeStore = useHomeStore()
    const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.categories{
    display: flex;
    overflow-x: auto;
    margin: 15px 10px 10px;
    &::-webkit-scrollbar{display: none;}
    .item{
        display: flex;
        flex-direction: column;
        width: 70px;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        text-align: center;
        
        img{
            width: 32px;
            height: 32px;
        }
        .text{
            font-size: 10px;
        }
    }
}
</style>