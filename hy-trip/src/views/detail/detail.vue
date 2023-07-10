<template>
  <div class="detail top-page" ref="elRef">
    <div class="tab" v-if="showTabControl">
      <tabControl 
        @tab-click="itemClick"
        :tabs="names" 
        ref="tabRef">
      </tabControl>
    </div>
    <van-nav-bar title="房源详细" left-text="旅途" left-arrow @click-left="onClickLeft" />
    <div class="picture" v-if="mainPart" v-memo="[mainPart]">
      <detailSwipe :infos="mainPart.topModule.housePicture.housePics"></detailSwipe>
      <dtInfos name="描述" :ref="getSectionRef"  :topInfos="mainPart.topModule"></dtInfos>
      <dtFacility name="设施" :ref="getSectionRef"  :houseFacility="mainPart.dynamicModule.facilityModule.houseFacility"></dtFacility>
      <dtLandlord name="房东" :ref="getSectionRef"  :landlordModule="mainPart.dynamicModule.landlordModule"></dtLandlord>
      <dtComment name="评价" :ref="getSectionRef"  :commentModule="mainPart.dynamicModule.commentModule"></dtComment>
      <dtRule name="须知" :ref="getSectionRef"  :orderRules="mainPart.dynamicModule.rulesModule.orderRules"></dtRule>
      <dtMap name="周边" :ref="getSectionRef"  :positionModule="mainPart.dynamicModule.positionModule"></dtMap>
      <dtPrice :introductionModule="mainPart.introductionModule"></dtPrice>
    </div>
  </div>
</template>

<script setup>
  import { ref,computed,watch } from 'vue'
  import { useRouter,useRoute } from 'vue-router'
  import { getDetailInfos } from '@/services/modules/detail.js'
  import tabControl from '@/components/tab-control/tab-control.vue'
  import detailSwipe from './cpns/detail_01-swipe.vue'
  import dtInfos from './cpns/detail_02-infos.vue'
  import dtFacility from './cpns/detail_03-facility.vue'
  import dtLandlord from './cpns/detail_04-landlord.vue'
  import dtComment from './cpns/detail_05-comment.vue'
  import dtRule from './cpns/detail_06-rule.vue'
  import dtMap from './cpns/detail_08-map.vue'
  import dtPrice from './cpns/detail_09-price.vue'
  import useScroll from '@/hooks/useScroll'

  //路由相关
  const route = useRoute()
  const houseId = route.params.id
  const router = useRouter()
  const onClickLeft = ()=>{
    router.back()
  }
  //网络请求：获取具体房屋数据
  const detailInfos = ref({})
  const mainPart = computed(()=>detailInfos.value.mainPart)
  getDetailInfos(houseId).then((res)=>{
    detailInfos.value = res.data
  }).catch((err)=>{})
  //tab控制相关
  const elRef = ref()
  const { scrollTop } = useScroll(elRef.value)
  const showTabControl = computed(()=>{
    return scrollTop.value > 280
  })
  // 对象-控制
  const sectionEls = ref({})
  const getSectionRef = (value)=>{
    if(value){
      const name = value.$el.getAttribute("name")
    sectionEls.value[name] = value.$el
    }
  }
  const names = computed(()=>{
    return Object.keys(sectionEls.value)
  })
  let isClick = false
  let currentHeight = -1
  const itemClick = (index)=>{
    const key = Object.keys(sectionEls.value)[index]
    const el = sectionEls.value[key]
    let height = el.offsetTop
    
    isClick = true
    currentHeight = height
    console.log(height,currentHeight)

    window.scrollTo({
      top: el.offsetTop - 44,
      behavior: 'smooth'
    })

  }
  //滚动页面，tabcontrol显示正确的位置
  const tabRef = ref()
  watch(scrollTop,(newValue)=>{
    /* if(Math.round(newValue)+44 === currentHeight){
      isClick = false
    } */
    if(isClick) {
      isClick = false
      return
    }
    const els = Object.values(sectionEls.value)
    const indexs = els.map(el=>el.offsetTop)
    let index = indexs.length-1
    for(let i=0;i<indexs.length;i++){
      if(newValue<indexs[i]-100){
        index = i-1;
        break;
      }
    }
    tabRef.value?.setcurrentIndex(index)
  })

  //数组-控制
  /* const sectionEls = []
  const getSectionRef = (value)=>{
    if(value){
      sectionEls.push(value.$el)
    }
  }
  const itemClick = (index)=>{
    window.scrollTo({
      top: sectionEls[index].offsetTop - 44,
      behavior: 'smooth'
    })
  } */

</script>

<style lang="less" scoped>
.tab{
  position: fixed;
  left: 0;
  right: 0;
  top:0;
  z-index: 9;
}
</style>