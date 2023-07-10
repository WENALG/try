<template>
    <div class="facility">
      <div class="header">
          <div class="title">{{ title }}</div>
      </div>
      <div class="content">
          <slot>插槽</slot>
      </div>
      <div class="footer" v-if="more.length">
          <div class="more">{{ more }}</div>
          <van-icon name="arrow" />
      </div>
  
    </div>
  </template>
  
  <script setup>
    defineProps({
        title:{
            type:String,
            default:"默认"
        },
        more:{
            type:String,
            default:""
        }
    })
  </script>
  
  <style lang="less" scoped>
  .facility{
    background-color: #fff;
    border-top: 5px solid #f0f0f0;
    padding-top: 5px;
      .header{
          padding: 16px 16px 10px;
          border-bottom: 1px solid #f1f2f3;
          .title{
              font-size: 20px;
              font-weight: 600;
          }
      }
      .content{
          padding: 16px;
      }
      .footer{
          display: flex;
          color: var(--primary-color);
          transform: scale(0.85);
          font-weight: 600;
          justify-content: flex-end;
          padding-bottom: 25px;
      }
  }
  </style>