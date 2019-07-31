<template>
  <div class="yyt_basic_body" />
</template>

<script>
    export default {
        name: 'BasicLayout',
        props:{} ,
        data () {
            return {

            };
        }
    };
</script>

<style lang="less" scoped>
    .yyt_basic_body {
        position: relative;
        min-height: 100vh;
        max-width: 812px; // 手机横屏最大宽度
        margin: 0 auto;
        background: #ffffff;
    }
</style>
