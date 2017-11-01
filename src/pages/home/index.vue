<template>
  <div class="p-home">

    <!--标题-->
    <div class="my-title">
      
    </div>

    <!--内容-->
    <div class="my-content">

      <!--轮播图-->
      <home-swiper-pic></home-swiper-pic>

      <!--ICON入口-->
      <div class="icon-list">
        <div class="icon-container">
          <a  v-for="( item, key ) in iconEntry" :key="key" :href="item.url">
            <svg class="ali-icon" aria-hidden="true" >
              <use :xlink:href="item.iconType"></use>
            </svg>
            <p class="description">{{ item.description }}</p>
          </a>
        </div>
      </div>

      <!--公告-->
      <div class="notice-block">

      </div>

      <!--预约列表-->

    </div>

  </div>
</template>

<script lang="ts">
import Home from './index.ts';
export default Home;
</script>

<style lang="less" scoped>
@import './index.less';
</style>