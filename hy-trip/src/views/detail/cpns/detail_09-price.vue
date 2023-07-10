<template>
  <div class="price">
    <detailSection :title="introductionModule.title">
        <div class="show">
            {{ introductionModule.introduction }}
        </div>
        <div class="safe">
          <img src="@/assets/img/detail/icon_check.png">
          <div class="text">鸿源旅途，永无止境！</div>
        </div>
    </detailSection>
  </div>
</template>

<script setup>
  import detailSection from '@/components/detail/detail-section.vue';
  const props = defineProps({
    introductionModule: {
        type: Object,
        default: ()=>({})
    }
  })
</script>

<style lang="less" scoped>
  .price{
    .show{
      transform: scale(.9);
      margin: -10px;
    }
    .safe{
      margin: 30px 0 100px; 
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
    .text{
      padding-left: 5px;
    }
  }
</style>