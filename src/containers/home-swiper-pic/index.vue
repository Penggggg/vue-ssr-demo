<template>
  <div class="swiper-pic">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="( item, key ) in swiperPic" :key="key">
        <img :src="item.src" >
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script lang="ts">
import HomeSwiperPic from './index.ts';
export default HomeSwiperPic;
</script>

<style lang="less" scoped>
@import './index.less';
</style>