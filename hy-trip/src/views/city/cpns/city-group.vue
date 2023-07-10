<template>
    <div class="city-group">
        <van-index-bar  :index-list="indexList" :sticky="false">
            <van-index-anchor index="热门" />
            <div class="hotCity">
                <template v-for="(item, index) in groupData.hotCities">
                    <div class="its" @click="currentCity(item)">{{ item.cityName }}</div>
                </template>
            </div>
            <template v-for="(groups, index) in groupData.cities" :key="index">
                <van-index-anchor :index="groups.group" />
                <template v-for="(city, indey) in groups.cities" :key="indey">
                    <van-cell :title="city.cityName" @click="currentCity(city)" />
                </template>
            </template>
        </van-index-bar>
    </div>
</template>

<script setup>
    import router from '@/router'
    import useCityStore from '@/stores/moudles/city'
    import { computed } from 'vue'
    const props = defineProps({
        groupData: {
            type: Object,
            default: ()=>({})
        }
    })
    const indexList = computed(()=>{
        const list = props.groupData.cities.map(item=>item.group)
        list.unshift("#")
        return list
    })
    const cityStore = useCityStore()
    function currentCity(item){
        cityStore.currentCity = item
        router.back()
    }
</script>

<style lang="less" scoped>
.hotCity{
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    padding-right: 25px;
    justify-content: space-around;
    .its{
        height: 28px;
        width: 70px;
        border-radius: 14px;
        font-size: 12px;
        background-color: #fff4ec;
        color: #000;
        text-align: center;
        line-height: 28px;
        margin-top: 6px;
    }
}
</style>