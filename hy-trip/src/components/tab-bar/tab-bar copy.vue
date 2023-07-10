<template>
    <div class="tab-bar">
        <template v-for="(item, index) in tabbarData">
            <div class="tab-bar-item" 
                :class="{ active: currentIndex === index }" 
                @click="itemClick(item,index)"
            >
                <img v-if="currentIndex === index" :src="getAssetsImage(item.imageActive)" alt="">
                <img v-else :src="getAssetsImage(item.image)" alt="">
                <span class="text">{{ item.text }}</span>
            </div>
        </template>
    </div>
</template>

<script setup>
    import tabbarData from '@/assets/local-data/tab-bar.js'
    import {getAssetsImage} from '@/utils/get_asset_img.js'
    import { ref } from "vue"
    import { useRouter } from 'vue-router'
    
    const router = useRouter()
    const currentIndex = ref(0)
    const itemClick = (item,index)=>{ 
        currentIndex.value = index
        router.push(item.path)
    }
</script>

<style lang="less" scoped>
    .tab-bar{
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50px;
    }
    .tab-bar-item{
        border-top: 1px solid gray;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        &.active{
            color: var(--primary-color);
        }

        .text{
            font-size: 12px;
        }
        img{
            width: 36px;
        }
    }
</style>