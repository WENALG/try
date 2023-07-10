<template>
    <div class="city">
        <div class="top">
            <van-search v-model="searchValue" show-action placeholder="城市/区域/位置" shape="round" @cancel="onCancel" />
            <van-tabs v-model:active="tabActive" color="#ff9854" line-width="45px">
                <template v-for="(value, key, index) in allCities" :key="key">
                    <van-tab :title="value.title" :name="key">
                        <div class="content">
                            <template v-for="(value, key, index) in allCities" :key="key">
                                <citygroup v-show="tabActive === key" :groupData="value"></citygroup>
                            </template>
                        </div>
                    </van-tab>
                </template>
            </van-tabs>
        </div>
        <!-- <citygroup :group-data="currentCityGroup"></citygroup> -->
    </div>
</template>
    
<script setup>
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import useCityStore from '@/stores/moudles/city.js'
import { storeToRefs } from 'pinia'
import citygroup from './cpns/city-group.vue'
//搜索框相关
const router = useRouter()
const searchValue = ref("")
const onCancel = () => {
    router.back()
}
//tab功能
const tabActive = ref()
/* //网络请求城市数据
const allCity = ref({})
getAllCity().then(res=>
    allCity.value = res.data,
) */
const cityStore = useCityStore()
cityStore.fetchAllCityData()
const { allCities } = storeToRefs(cityStore)
const currentCityGroup = computed(() => allCities.value[tabActive.value])
</script>
    
<style lang="less" scoped>
.city {
    --van-search-left-icon-color: var(--primary-color) !important;
    position: relative;
    z-index: 9;
    height: 100vh;
    background-color: white;
    overflow-y: auto;

    .top {
        position: relative;
        z-index: 9;
    }

    .content {
        height: calc(100vh - 98px);
        overflow-y: auto;
    }
}
</style>