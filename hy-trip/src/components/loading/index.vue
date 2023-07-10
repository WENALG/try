<template>
  <div class="loading" v-show="mainStore.isLoading">
    <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
  import useMainStore from '@/stores/moudles/main';
  const mainStore = useMainStore()
  
</script>

<style lang="less" scoped>
    .loading{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99;
        background-color: rgba(0,0,0,.4);
        .bg{
          margin-top: -10px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 104px;
          height: 104px;
          background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;
          img{
            margin-top: -10px;
            width: 70px;
            height: 70px;
          }
        }
    }
</style>