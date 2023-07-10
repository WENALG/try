<template>
  <div class="hot-content">
    <div class="title">热门推荐</div>
    <div class="list"> 
        <template v-for="(item,index) in homeList" :key="item.data.houseId">
            <houseItemType3 v-if="item.discoveryContentType === 3" :itemDate="item.data"
              @click="itemClick(item.data)"
            />
            <houseItemType9 v-else-if="item.discoveryContentType === 9" :itemDate="item.data"
              @click="itemClick(item.data)"
            />
        </template>
    </div>
  </div>
</template>

<script setup>
import houseItemType3 from '@/components/house-item-type3/house-item-type3.vue';
import houseItemType9 from '@/components/house-item-type9/house-item-type9.vue';
import useHomeStore from '@/stores/moudles/home';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
const homeStore = useHomeStore()
const { homeList } = storeToRefs(homeStore)

const router = useRouter()
const itemClick = (item) =>{
  router.push("/detail/" + item.houseId)
  
}
</script>

<style lang="less" scoped>
.hot-content{
    padding: 10px;
    .title{
        font-size: 20px;
        font-weight: 600;
        margin:10px 2px 15px;
    }
    .list{
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 80px;
    }
}
</style>