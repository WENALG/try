<template>
  <div class="rules">
    <detailSection title="预定须知">
      <div class="notice">
        <template v-for="(item,index) in orderRules">
            <div class="title">{{ item.title }}</div>
            <div class="introduction">
                {{ item.introduction }}
                <div class="tip" v-if="item.tips">查看说明</div>
            </div>
            
        </template>
      </div>
    </detailSection>
  </div>
</template>

<script setup>
  import detailSection from '@/components/detail/detail-section.vue';
  const props = defineProps({
    orderRules: {
        type: Array,
        default:()=>([])
    }
  })
</script>

<style lang="less" scoped>
    .rules{
        .notice{
            display: flex;
            flex-wrap: wrap;
            margin-left: -15px;
            margin-right: -20px;
            justify-content: center;
            align-items: center;
            transform: scale(.9);
            .title{
                width: 64px;
                padding:10px 0;
            }
            .introduction{
                display: flex;
                padding-left: 15px;
                width: 285px;
                flex: 1;
                flex: auto;
                .tip{
                    font-weight: 600;
                    margin-left: 64px;
                    
                }
            }
        }
    }
</style>