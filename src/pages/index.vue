<template>
  <div>
    <header class="header_banner">
      <img :src="banner" alt="" class="header_banner_image">
    </header>
    <section v-for="(item, index) in data" :key="index" class="section_content">
      <div class="content_card" @click="handleToMessage">
        <div class="content_card_left">
          <p class="content_card_title">{{ item.title }}</p>
          <p class="content_card_desc">{{ item.desc }}</p>
        </div>
        <div class="content_card_right">
          <p>{{ item.time }}</p>
          <p class="content_card_redNum">浏览 {{ item.readNum }}+</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const data = Array.from({ length: 20 }).map((item, index) => {
  return {
    title: `标题内容${index}`,
    desc: `描述描述描述描述描述描述描述描述描述描述描述描述描述描述`,
    time: '11:34',
    readNum: '999'
  }
})
import banner from 'assets/01-banner.png'
export default {
  data() {
    return {
      data,
      banner
    }
  },
  methods: {
    handleToMessage() {
      this.$router.push({
        path: '/message'
      })
    }
  }
}
</script>

<style lang="less">
  .header_banner {
    position: relative;
    min-height: 200px;
  }
  .header_banner_image {
    display: inline-block;
    width: 100%;
  }
  .section_content {
    background: #ffffff;
    padding-top: 10px;
    margin-left: 25px;
  }

  .content_card {
    border-bottom: 1px solid #dddddd;
    padding-top: 15px;
    padding-bottom: 8px;
    width: 100%;
  }
  .content_card_left {
    display: inline-block;
    width: 56.58914728%;
  }
  .content_card_title {
    font-size: 16px;
    color: #333333;
    font-weight: 500;
    font-family: PingFangSC-Medium;
  }
  .content_card_desc {
    padding-top: 5px;
    font-size: 14px;
    color: #666666;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }
  .content_card_right {
    display: inline-block;
    padding-right: 25px;
    width: 43.4105272%;
    box-sizing: border-box;
    color: #bbbbbb;
    font-family: PingFangSC-Regular;
    text-align: right;
    font-size: 12px;
  }
  .content_card_redNum {
    padding-top: 5px;
  }

</style>
