<template>
  <div class="tab-control" >
    <template v-for="(item,index) in tabs" :key="index">
        <div class="tab-item"
            :class="{ active: currentIndex === index }"
            @click="tabClick(index)"
        >
            <span class="item">{{ item }}</span>
        </div>
        
    </template>
  </div>
</template>

<script setup>
    import {ref} from 'vue'
    const currentIndex = ref(0);
    const emit = defineEmits(["tabClick"])
    const props =defineProps({
        tabs:{
            type:Array,
            default:()=>([])
        },
    })
    function tabClick(index){
        currentIndex.value = index
        emit("tabClick",index)
    }
    function setcurrentIndex(index){
        this.currentIndex = index
    }
    defineExpose({
        currentIndex,
        setcurrentIndex,
    })

</script>

<style lang="less" scoped>
    .tab-control{
        display: flex;
        padding: 12px 0 8px;
        background-color: #fff;
        .active{
            border-bottom: 4px solid var(--primary-color);
            padding-bottom: 2px;
        }
        .tab-item{
            flex: 1;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin: 0 12px ;
        }
    }
</style>