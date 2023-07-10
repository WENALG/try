<template>
    <div class="house-item">
        <div class="content">
            <div class="cover">
                <img :src="itemDate.image.url" alt="">
            </div>
            <div class="info">
                <div class="location">
                    <img src="@/assets/img/home/location.png">
                    <div class="position">{{ itemDate.location }}</div>
                </div>
                <div class="name">{{ itemDate.houseName }}</div>
                <div class="summary">{{ itemDate.summaryText }}</div>
                <div class="price">
                    <div class="new">¥ {{ itemDate.finalPrice }}</div>
                    <div class="old">¥ {{ itemDate.productPrice }}</div>
                    <div class="priceTipBadge" v-if="itemDate.priceTipBadge">{{ itemDate.priceTipBadge.text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script setup>
  import { computed } from 'vue'
      const props = defineProps({
          itemDate:{
              type: Object,
              default:()=>({})
          }
      })
      const itemScore = computed(()=>{
          return Number(props.itemDate.commentScore)
      })
  </script>
  
  <style lang="less" scoped>
  .house-item{
      width: 50%;
      height: 240px;
      .content{
          overflow: hidden;
          position: relative;
          border-radius: 10px;
          margin: 3px 3px 5px;

          .cover{
              img{
                  width: 100%;
              }
          }
          .info{
              padding: 6px 6px;
              background-color:whitesmoke;
              transform: scale(.95);
              
              .location{
                display: flex;
                img{
                    width: 16px;
                    height: 16px;
                }
              }
              .name{
                  overflow: hidden;
                  margin: 5px ;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
              }
              .price{
                  display: flex;
                  margin-top: 5px;
                  .new{
                    color: #ff9854;
                    font-size: 17px;
                  }
                  .old{
                    color: gray;
                    text-decoration: line-through;
                    padding: 0 3px;
                  }
                  .priceTipBadge{
                    color: white;
                    border-radius: 5px;
                    background-color:#ff6a6a;
                  }
              }
          }
      }
  }
  </style>