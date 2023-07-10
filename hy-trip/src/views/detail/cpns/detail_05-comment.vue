<template>
  <div class="comments">
    <detailSection title="热门评论" :more="`查看全部${commentModule.totalCount}条评论`">
      <div class="head">
        <div class="left">
          <span class="score">{{ rate }}</span>
          <div class="line"></div>
        </div>
        <div class="mid">
          <div class="title">{{ commentModule.scoreTitle }}</div>
          <div class="total">{{ commentModule.totalCount }}条评论</div>
          <van-rate v-model="rate" size="15" color="#FF7F00" readonly allow-half/>
        </div>
        <div class="right">
          <template v-for="(item,index) in commentModule.subScoresFocus">
            <div class="item">{{ item.text }}</div>
          </template>
        </div>
      </div>
      <div class="section">
        <div class="impression">
            <template v-for="(item,index) in commentModule.commentTagVo" :key="index">
                <div class="text" :style="{ color:item.color, background:item.backgroundColor}">{{ item.text }}</div>
            </template>
        </div>
      </div>
      <div class="footer">
        <div class="up">
            <div class="avarta"><img :src="commentModule.comment.userAvatars"></div>
            
            <div class="user">
                <div class="name">{{ commentModule.comment.userName }}</div>
                <div class="date">{{ commentModule.comment.checkInDate }}</div>
            </div>
            
        </div>
        <div class="down">
            <div class="talk">
                {{ commentModule.comment.commentDetail }}
            </div>
        </div>
      </div>
    </detailSection>
  </div>
</template>

<script setup>
  import detailSection from '@/components/detail/detail-section.vue'
  import { computed } from 'vue'
  const props = defineProps({
    commentModule: {
        type: Object,
        default: ()=>({})
    }
  })
  const rate = computed(()=> props.commentModule.overall)
  console.log()
</script>

<style lang="less" scoped>
  .comments{
    .head{
        display: flex;
        align-items: center;
        .left{
            position: relative;
            .score{
                font-size: 45px;
                font-weight: 600;
                padding-top: 10px;
            }
            .line{
                width: 60px;
                height: 6px;
                background: linear-gradient(90deg,#fa8c1d,#fcaf3f);
                position: relative;
                border-radius: 3px;
                bottom: 6px;
            }
        }
        .mid{
            max-width: 30%;
            transform: scale(.9);
            padding: 5px 5px ;
            .title{
                font-weight: 600;
            }
        }
        .right{
            display: flex;
            flex-wrap: wrap;
            flex: 1;
            justify-content: flex-end;
            
            .item{
                transform: scale(.88);
            }
        }
    }
    .section{
        display: flex;
        .impression{
            display: flex;
            flex-wrap: wrap;
            flex: 1;
            transform: scale(.85);
            margin-left: -20px;
            margin-top: 10px;
            .text{
                
                margin-right: 20px;
                margin-bottom: 5px;
                padding: 3px 2px ;
                border-radius: 5px;
            }
        }
    }
    .footer{
        background-color: #F5F5F5;
        margin-top: 5px;
        padding: 10px;
        border-radius: 5px;
        .up{
            display: flex;
            border-bottom: 1px solid #D1D1D1;
            .avarta{
                width: 55px;
                padding-bottom: 5px;
                img{
                    width: 45px;
                    height: 45px;
                }
            }
            .user{
                .name{
                    padding-top: 4px;
                    padding-left: 7px;
                }
                .date{
                    transform: scale(.85);
                    color: #666666;
                }

            }
        }
        .down{
            display: flex;
            flex-wrap: wrap;
            margin-top: 15px;
            padding-bottom: 5px;
        }
    }
  }
</style>