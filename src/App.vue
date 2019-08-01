<template>
  <div id="app">
    <div :class="[type ? 'yyt_basic_body' : 'yyt_exception_body']">
      <keep-alive exclude="classify,detail">
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        type: true
      }
    }
  }
</script>

<style lang="less">
  @import 'assets/css/reset.css';
  @import 'assets/css/common.less';
  @import 'assets/css/mixin.less';
  .yyt_basic_body {
    position: relative;
    min-height: 100vh;
    max-width: 812px; // 手机横屏最大宽度
    margin: 0 auto;
    background: #ffffff;
  }
  .yyt_exception_body {
    position: relative;
    min-width: 800px;
    max-width: 1280px;
    background: #fff;
    margin: 0 auto;
  }
</style>
