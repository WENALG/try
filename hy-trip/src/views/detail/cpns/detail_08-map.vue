<template>
  <div class="map">
    <detailSection title="位置周边" more="查看更多周边信息">
        <div class="baidu" ref="mapRef">百度地图</div>
    </detailSection>
  </div>
</template>

<script setup> 
  import { ref,onMounted } from 'vue'
  import detailSection from '@/components/detail/detail-section.vue';
  const mapRef = ref()
  const props = defineProps({
    positionModule:{
        type: Object,
        default: ()=>({})
    }
  })
  onMounted(()=>{
    var map = new BMapGL.Map(mapRef.value);          // 创建地图实例 
    var point = new BMapGL.Point(props.positionModule.longitude,props.positionModule.latitude);  // 创建点坐标 
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    var marker = new BMapGL.Marker(point);        // 创建标注   
    map.addOverlay(marker);                     // 将标注添加到地图中 
  })
</script>

<style lang="less" scoped>
.map{
    .baidu{
        height: 280px;
    }
} 
</style>