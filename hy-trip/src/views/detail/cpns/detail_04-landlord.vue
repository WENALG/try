<template>
  <div class="landlord">
    <landlordSection title="房东介绍" more="查看房东主页">
        <div class="top">
            <img :src="landlordModule.topScroll">
        </div>
        <div class="content">
            <span class="logo"><img :src="landlordModule.hotelLogo"></span>
            <div class="mid">
                <div class="name">{{ landlordModule.hotelName }}</div>
                <div class="item">
                    <template v-for="(item,index) in landlordModule.hotelTags" :key="index">
                        <span class="it">{{ item.tagText.text }}</span>
                    </template>
                </div>
            </div>
            <div class="right">
                <van-button color="var(--primary-color)" text="联系房东" size="mini"></van-button>
            </div>
        </div>
        <div class="section">
            <template v-for="(item,index) in landlordModule.hotelSummary">
                <div class="iten">
                    <div class="title">{{ item.title }}</div>
                    <div class="rate">{{ item.introduction }}</div>
                    <div class="total">{{ item.tip }}</div>
                </div>
            </template>
        </div>
    </landlordSection>
  </div>
</template>

<script setup>
  import landlordSection from '@/components/detail/detail-section.vue'
  defineProps({
    landlordModule:{
        type: Object,
        default:()=>{}
    }
  })
</script>

<style lang="less" scoped>
.landlord{
    .top{
        margin-bottom: 15px;
        img{
            width: 100%;
        }
    }
    .content{
        display: flex;
        .logo{
            img{
                width: 65px;
            }
        }
        .mid{
            justify-content: center;
            align-items: center;
            min-width: 60%;
            .name{
                font-size: 15px;
                font-weight: 600;
                margin-bottom: 3px;
                padding-left: 5px;
                padding-top: 17px;
            }
            .item{
                transform: scale(.8333);
                margin-left: -17px;
                .it{
                    border-right: 1px solid #000;
                    padding: 0 4px;
                    color: #000;
                }
            }
        }
        .right{
            padding-top: 28px;
            min-width: 22%;
        }
    }
    .section{
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
        margin-bottom: 5px;
        .iten{
            justify-content: center;
            align-items: center;
            text-align: center;
            
            .title{
                transform: scale(0.95);
            }
            .rate{
                font-weight: 600;
            }
            .total{
                transform: scale(0.9);
            }
        }
    }
}
</style>