<template>
  <div class="house-item">
    <div class="content">
        <div class="cover">
            <img :src="itemDate.image.url" alt="">
        </div>
        <div class="info">
            <div class="summary">{{ itemDate.summaryText }}</div>
            <div class="name">{{ itemDate.houseName }}</div>
            <div class="price">
                <van-rate :model-value="itemScore" :size="15" color="#ee2c2c" readonly allow-half/>
                <div class="new">¥ {{ itemDate.finalPrice }}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
    const props = defineProps({
        itemDate:{
            type: Object,
            default:()=>({})
        }
    })
    const itemScore = computed(()=>{
        return Number(props.itemDate.commentScore)
    })
</script>

<style lang="less" scoped>
.house-item{
    width: 50%;
    .content{
        position: relative;
        overflow: hidden;
        border-radius: 10px;
        margin: 3px 3px 5px;
        color: #fff;
        .cover{
            img{
                width: 100%;
            }
        }
        .info{
            transform: scale(.95);
            position: absolute;
            bottom: 0;
            color: #fff;
            padding: 8px 10px;
            .name{
                overflow: hidden;
                margin: 5px 0;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .price{
                display: flex;
                justify-content: space-between;
                margin-top: 10px;
            }
        }
    }
}
</style>