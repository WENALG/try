<template>
  <div class="facilitys">
    <facilitySection title="房屋设施" more="查看全部内容">
        <template v-for="(item,index) in houseFacility.houseFacilitys" :key="index">
            <div class="select" v-if="houseFacility.facilitySort?.includes(index)">
                <div class="left">
                    <img :src="item.icon">
                    <div class="name">{{ item.groupName }}</div>
                </div>
                <div class="right">
                    <template v-for="(iten,indey) in item.facilitys.slice(0,4)">
                        <div class="list">
                            <i class="icon_check"></i>
                            {{ iten.name }}
                        </div>
                    </template>
                </div>
            </div>
        </template>

    </facilitySection>
  </div>
</template>

<script setup>
  import facilitySection from '@/components/detail/detail-section.vue'
  
  const pros = defineProps({
    houseFacility: {
        type: Object,
        default: ()=>({})
    }
  })
</script>

<style lang="less" scoped>
  .facilitys{
    padding: 5px 0;
    .select{
        display: flex;
        background-color: #f0f8ff;
        border-radius: 6px;
        padding-top: 10px;
        padding-bottom: 5px;
        .left{
            text-align: center;
            justify-content: center;
            align-items: center;
            margin: 2px;
            min-width: 30%;
            margin-bottom: 10px;
            padding: 8px 0;
            img{
                width: 20px;
            }
            .name{
                margin-top: 5px;
                transform: scale(0.9);
            }
        }
        .right{
            display: flex;
            flex-wrap: wrap;
            flex: 1;
            align-items: center;
            padding-top: 10px;
            padding-bottom: 5px;
            .list{
                display: flex;
                align-items: center;
                width: 50%;
                margin-top: -12px;
                margin-bottom: 5px;
            }
        }
    }
  }
 
</style>