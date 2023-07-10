<template>
    <div class="nav-bar">
        <div class="title">鸿源旅途</div>
    </div>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
</template>
  
  <script setup>
  
  </script>
  
  <style lang="less" scoped>
    .nav-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 42px;
        border-bottom: 1px solid #f2f2f2;
        .title {
          font-size: 18px;
          font-size: 500;
          color: var(--primary-color);
        }
      }
      .banner {
            img {
                width: 100%;
            }
        }
  </style>