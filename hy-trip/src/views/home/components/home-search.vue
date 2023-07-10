<template>
    <div class="search">
        <!-- 地理位置选择 -->
        <div class="location" @click="myPosition">
            <div class="city">{{ currentCity.cityName }}</div>
            <div class="position">
                <div class="text">我的位置</div>
                <img src="@/assets/img/home/icon_location.png">
            </div>
        </div>
        <!-- 时间范围展示 -->
        <div class="section date-range" @click="showCalender=true">
            <div class="start">
                <div class="date">
                    <span class="tip">入住</span>
                    <span class="time">{{ startDateStr }}</span>
                </div>
                <span class="enjoy">共{{ days }}晚</span>
            </div>
            <div class="end">
                <div class="date">
                    <span class="tip">离店</span>
                    <span class="time">{{ endDateStr }}</span>
                </div>
            </div>
        </div>
        <!-- 选择日期功能 -->
        <div class="calendar">
            <van-calendar v-model:show="showCalender" 
                :show-confirm="true"
                 type="range" 
                @confirm="onConfirm" 
                :round="false"
            />
        </div>
        <!-- 人数价格 -->
        <div class="section price-counter border-line">
            <div class="price">价格不限</div>
            <div class="counter">人数不限</div>
        </div>
        <!-- 关键字 -->
        <div class="section keyword border-line">
            <div class="key">关键字/位置/民宿名</div>
        </div>
        <!-- 热门推荐 -->
        <div class="section hot-suggest">
            <template v-for="(item,index) in hotSuggest" :key="index">
                <div 
                    class="hot-suggest-item"
                    :style="{ color: item.tagText.color , background:item.tagText.background.color}"
                >
                    {{ item.tagText.text }}
                </div>
            </template>
        </div>
        <!-- 开始搜索 -->
        <div class="section btnSearch">
            <div class="btn" @click="Onsearch()">开始搜索</div>
        </div>
    </div>
</template>

<script setup>
 import { ref,computed } from 'vue'
 import useCityStore from '@/stores/moudles/city';
 import { storeToRefs } from 'pinia';
 import { useRouter } from 'vue-router';
 import { formatMonthDay,getDiffDays } from '@/utils/formatMonthDay.js'
 import useHomeStore from '@/stores/moudles/home.js'
 import useMainStore from '@/stores/moudles/main';

 const homeStore = useHomeStore()
 const { hotSuggest } = storeToRefs(homeStore)
/* //定义props
    defineProps({
        hotSuggest:{
            type: Array,
            default:()=>[]
        }
    }) */
  const router = useRouter()
  const myPosition = () => {
    router.push("/city")
}
  const cityStore = useCityStore()
  const { currentCity } = storeToRefs(cityStore)
  
  const mainStore = useMainStore()
  const { startDate,endDate } = storeToRefs(mainStore)
  
  const startDateStr = computed(()=>formatMonthDay(startDate.value))
  const endDateStr = computed(()=>formatMonthDay(endDate.value))
  const days = ref(getDiffDays(startDate.value,endDate.value))

  const showCalender = ref(false)
  const onConfirm = (value)=>{
    const selectStartDate = value[0]
    const selectEndDate = value[1]
    mainStore.startDate = selectStartDate
    mainStore.endDate = selectEndDate
    days.value = getDiffDays(selectStartDate,selectEndDate)
    showCalender.value = false
  }

  function Onsearch(){
    router.push({
        path:'/search',
        query:{
            startDate: startDate.value,
            endDate: endDate.value,
            currentCity: currentCity.value.cityName
        }
    })
  }
</script>

<style lang="less" scoped>
.search{
    --van-calendar-popup-height: 100%;
}
.location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;

    .city {
        flex: 1;
    }
    .position {
        display: flex;
        width: 80px;

        .text {
            font-size: 12px;
            margin-right: 2px;
        }

        img {
            width: 18px;
            height: 18px;
        }
    }
}
.section{
    display: flex;
    padding: 0 20px;
    flex-wrap: wrap;
    align-items: center;
    background-color: #fff;
    .start{
        display: flex; 
        flex:1;
        .date{
            flex: 1;
        }
    }
    .enjoy{
        padding: 10px 70px 0px 0px;
        color: #999;
    }
    .end{
        min-width: 28%;
    }
    .date{
        display: flex;
        flex-direction: column;
    }
    .tip{
        font-size: 10px;
        color: #999;
    }
    .time{
        font-size: 16px;
        font-weight: 500;
        padding-top: 3px;
    }
}
.price-counter{
    padding-top: 18px;
    font-size: 12px;
    color: #999;
    .price{
        flex:1;
    }
    .counter{
        min-width: 28%;
    }
}
.keyword{
    padding-top: 18px;
    font-size: 12px;
    color: #999;
}
.hot-suggest{
    padding-top: 13px;
    align-items: center;
    justify-content: left;
    text-align: center;
    transform: scale(.95);
    .hot-suggest-item{
        padding: 3px 6px;
        border-radius: 14px;
        margin: 5px 5px;
        font-size: 12px;
        line-height: .9;
    }
}
.btnSearch{
    margin: 8px 5px;
    .btn{
        width: 342px;
        height: 38px;
        text-align: center;
        line-height: 38px;
        border-radius: 20px;
        color: #fff;
        font-size: 18px;
        background-image: linear-gradient(90deg,#fa8c1d,#fcaf3f);
    }
}
</style>