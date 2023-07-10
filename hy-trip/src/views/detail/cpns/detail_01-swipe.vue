<template>
    <div class="swipe">
        <van-swipe class="swipe-list" :autoplay="1500" indicator-color="orange">
            <template v-for="(item,index) in pros.infos"> 
                <van-swipe-item class="item">
                    <img :src="item.url" alt="">
                </van-swipe-item>
            </template>
            <template #indicator="{ active, total }">
              <div class="indicator">
                <template v-for="(value,key,index) in swipeGroup" :key="key">
                  <span class="item" 
                      :class="{ active: key==infos[active]?.enumPictureCategory}"
                  >
                    <span class="text">{{ formatTitle(value[0].title) +" "}}</span>
                    <span class="count" v-if="key==infos[active]?.enumPictureCategory">
                       {{ getCategoryIndex(infos[active]) }}/{{ value.length }}
                    </span>
                  </span>
                </template>
              </div>
            </template>
        </van-swipe>
    </div>
</template>

<script setup>
    const pros = defineProps({
        infos:({
            type: Array,
            default: ()=>[]
        })
    })
    const swipeGroup = {}
    for(const item of pros.infos){
        let valueArray = swipeGroup[item.enumPictureCategory]
        if(!valueArray){
            valueArray = []
            swipeGroup[item.enumPictureCategory] = valueArray
        }
        valueArray.push(item)
    }
    const titleReg = /【(.*?)】/i
    const formatTitle = (title)=>{
        //return title.replace("【","").replace("】","").replace("：","")
        const consults = titleReg.exec(title)
        return consults[1]
    }
    const getCategoryIndex = (item)=>{
        let valueArray = swipeGroup[item.enumPictureCategory]
        return valueArray.findIndex( data=> data === item) + 1
    }
    
</script>

<style lang="less" scoped>
.swipe {
    .swipe-list {
        .item {
            img {
                width: 100%;
            }
        }
    }

    .indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 3px 5px;
        font-size: 12px;
        color: #fff;
        background: rgba(0, 0, 0, .9);
        .item{
            padding: 0 5px;
            border-radius: 1px;
            &.active{
                background-color: #fff;
                color: #000;
            }
        }
    }
}
</style>