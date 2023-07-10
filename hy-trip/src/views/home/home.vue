<template>
  <div class="home">
    <div class="top">
      <home-nav-bar></home-nav-bar>
    </div>
    
    <div class="search">
      <home-search></home-search>
    </div>

    <div class="categories">
      <categories></categories>
    </div>

    <div class="search-bar1" v-if="isShowSearchBar">
      <search-bar></search-bar>
    </div>

    <div class="hotContent">
      <hot-content></hot-content>
    </div>
  </div>
</template>

<script setup>
import homeNavBar from './components/home-nav-bar.vue'
import homeSearch from './components/home-search.vue'
import categories from './components/home-categories.vue'
import hotContent from './components/home-hot-content.vue'
import searchBar from '@/components/search-bar/search-bar.vue'
import useHomeStore from '@/stores/moudles/home.js'
import { storeToRefs } from 'pinia'
import useScroll from '@/hooks/useScroll.js'
import { watch,ref, computed } from 'vue'
  const homeStore = useHomeStore()
  homeStore.fetchHotSuggestData()
  homeStore.fetchHomeCategories()
  const { page } = storeToRefs(homeStore)
  if(page.value===1){
    homeStore.fetchHomeHouseList()
    page.value++
  }
  //监听滚动条
  const { isReachButtom,scrollTop } = useScroll()
  watch(isReachButtom,(newValue)=>{
    if(newValue){
      homeStore.fetchHomeHouseList().then(()=>{
        isReachButtom.value = false 
      })
    }
  })
  const isShowSearchBar = computed(()=>{
    return scrollTop.value >= 350
  })

</script>

<style lang="less" scoped>
  .home {
    height: 100%;
    .search-bar1{
      position: fixed;
      padding: 14px 14px 10px;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9;
      background-color: #fff;
    }
  }
</style>