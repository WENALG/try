<template>
  <div class="search-bar">
    <div class="select-time">
        <div class="start">
            <div class="text">住</div>
            <div class="startTime">{{startDateStr}}</div>
        </div>
        <div class="end">
            <div class="text">离</div>
            <div class="endTime">{{endDateStr}}</div>
        </div>
    </div>
    <div class="content">
        <div class="keyword">关键字/位置/名宿</div>
    </div>
    <div class="right">
        <i class="icon-search"></i>
    </div>
  </div>
</template>

<script setup>
    import useMainStore from '@/stores/moudles/main';
    import { formatMonthDay } from '@/utils/formatMonthDay.js'
    import { storeToRefs } from 'pinia';
    import { computed } from 'vue';

    const mainStore = useMainStore()
    const { startDate,endDate } = storeToRefs(mainStore)
    const startDateStr = computed(()=>formatMonthDay(startDate.value,"MM.DD"))
    const endDateStr = computed(()=>formatMonthDay(endDate.value,"MM.DD"))

</script>

<style lang="less" scoped>
    .search-bar{
        display: flex;
        align-items: center;
        height: 45px;
        padding: 2px;
        color: #999;
        border-radius: 5px;
        background-color: #EDEDED;
        .select-time{
            transform: scale(.9);
            padding-left: 10px;
            width: 65px;
            display: flex;
            flex-direction: column;
            font-size: 14px;
            font-weight: 600;
            .start{
            display: flex;
            font-size: 10px;
                .startTime{
                    font-size: 10px;
                    color: #333;
                    padding-left: 5px;
                }
            }
            .end{
            display: flex;
                .endTime{
                    color: #333;
                    padding-left: 5px;
                }
            }
        }
        .content{
            position: relative;
            flex: 1;
            padding: 0 10px;
            text-align: left;
            border-left: 1px solid #333;
            .keyword{
                max-width: 150px;
            }
        }
        .right{
            min-width: 10%;
            .icon-search{
            width: 24px;
            height: 24px;
            display: inline-block;
            background-image: url(../../assets/img/home/home-sprite.png);
            background-position: -29px -151px;
            background-size: 207px 192px;
        }
        }
        
    }
</style>