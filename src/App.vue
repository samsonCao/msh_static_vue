<template>
  <div id="app">
    <keep-alive exclude="classify,detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
  import BasicLayout from './components/BasicLayout';
  import ExceptionLayout from './components/ExceptionLayout';

  export default {
    name: 'App',
    components: {
      'app-basic': BasicLayout,
      'app-exception': ExceptionLayout,
    },
  }
</script>

<style lang="less">
  @import './assets/css/reset.css';
  @import './assets/css/common.less';
  @import './assets/css/mixin.less';
</style>
