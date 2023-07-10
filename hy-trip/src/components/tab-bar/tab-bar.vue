<template>
    <div class="tab-bar">
        <van-tabbar v-model="currentIndex" route >
            <template v-for="(item, index) in tabbarData">
                <van-tabbar-item :to="item.path">
                    <span>{{ item.text }}</span>
                    <template #icon>
                        <img v-if="currentIndex === index" :src="getAssetsImage(item.imageActive)" alt="">
                        <img v-else :src="getAssetsImage(item.image)" alt="">
                    </template>
                </van-tabbar-item>
            </template>
        </van-tabbar>
    </div>
</template>

<script setup>
    import tabbarData from '@/assets/local-data/tab-bar.js'
    import {getAssetsImage} from '@/utils/get_asset_img.js'
    import { ref,watch } from "vue"
    import { useRoute } from 'vue-router'
    const route = useRoute()
    const currentIndex = ref(0)
    watch(route,(newRoute)=>{
        const dex = tabbarData.findIndex(item=>item.path === newRoute.path) 
        if(dex === -1) return
        currentIndex.value = dex
    })
</script>

<style lang="less" scoped>
    .tab-bar {
        //--van-tabbar-item-font-size: 20px;
        img {
            height: 28px;
            width: 100%;
        }
        :deep(.van-tabbar-item){
            font-size: 10px;
        }
    }
 
</style>