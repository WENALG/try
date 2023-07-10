<template>
  <div class="info">
    <div class="houseName">{{ topInfos.houseName }}</div>
    <div class="tags">
      <template v-for="(item,index) in topInfos.houseTags" :key="index">
        <span class="item"
          v-if="item.tagText"
          :style="{ color: item.tagText.color, background: item.tagText.background.color}">
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment">
      <div class="left">
        <div class="score">{{ topInfos.commentBrief.overall }}</div>
        <div class="scoreTitle">{{ topInfos.commentBrief.scoreTitle }}</div>
        <div class="brief">'{{ topInfos.commentBrief.commentBrief }}'</div>
      </div>
      <div class="right">
        <div>{{ topInfos.commentBrief.totalCount }}条评论</div>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="location">
      <div class="left">
        <div class="position">{{ topInfos.nearByPosition.address }}</div>
      </div>
      <div class="right">
        <span class="text">地图·周边</span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>
  const pros = defineProps({
    topInfos: ({
      type: Object,
      default:()=>({})
    })
  })
</script>

<style lang="less" scoped>
  .info{
    margin-bottom: 35px;
    .houseName{
      font-size: 20px;
      font-weight: 700;
      padding: 15px 14px 5px;
      text-align: justify;
    }
    .tags{
      display: flex;
      flex-wrap: wrap;
      padding: 3px 16px 5px;
      
      .item{
        margin: 0 0 4px 1px;
        font-size: 12px;
        transform:scale(0.9);
        font-weight: 600;
      }
    }
    .comment{
      display: flex;
      background-color: #f8f9fb;
      border-radius: 10px;
      margin: 5px 16px 5px;
      padding: 12px 0;
      padding-left: 10px;
      .left{
        display: flex;
        flex: 1;
        .score{
          font-size: 18px;
          font-weight: 700;
          margin-right: 5px;
        }
        .scoreTitle{
          font-size: 14px;
          font-weight: 600;
          padding-top: 2px;
          transform:scale(0.95);
          min-width: 13%;
        }
        .brief{
          padding-top: 3px;
          transform:scale(0.9);
        }
      }
      .right{
        display: flex;
        color: var(--primary-color);
        transform:scale(0.85);
      }
    }
    .location{
      display: flex;
      background-color: #f8f9fb;
      border-radius: 10px;
      margin: 4px 16px 4px;
      padding: 12px 2px;
      padding-right: 0;
      .left{
        display: flex;
        flex: 1;
        .position{
          font-size: 14px;
          font-weight: 600;
          padding: 1px 0;
          transform:scale(0.95);
        }
      }
      .right{
        color: var(--primary-color);
        font-size: 12px;
        transform:scale(0.85);
      }
    }
  }
</style>