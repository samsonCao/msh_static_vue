<template>
  <div class="message_bg">
    <section v-for="(item, index) in data" class="message_body" :key="index">
      <div class="message_card">
        <p class="message_card_time">{{ item.time }}</p>
        <div class="message_card_box">
          <p class="message_card_title">{{ item.title }}</p>
          <p class="message_card_desc">{{ item.desc }}</p>
          <div class="message_card_footer">
            <div class="message_card_footer_name">
              附件: <a>【附件名称】</a>
            </div>
            <span class="message_card_footer_read">浏览 999+</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const data = Array.from({ length: 20 }).map((item, index) => {
  return {
    title: `标题内容${index}`,
    desc: `描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描`,
    time: '07月21日 11:21',
    readNum: '999'
  }
})
export default {
  components: {

  },
  data() {
    return {
      data
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  .message_bg {
    background: #f5f5f5;
  }
  .message_body {
    padding-top: 8px;
  }

  .message_card {
    margin: 20px;
    border-radius: 5px;
  }
  .message_card_time {
    text-align: center;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    color: #7f7f7f;
    padding-bottom: 20px;
  }
  .message_card_box {
    padding: 25px 26px;
    background: #ffffff;
    border-radius: 5px;
    p {
      line-height: 22px;
    }
  }
  .message_card_title {
    padding-bottom: 10px;
    font-size: 16px;
    color: #333333;
    font-weight: 500;
    font-family: PingFangSC-Semibold;
  }
  .message_card_desc {
    font-size: 14px;
    color: #666666;
    font-family: PingFangSC-Regular;
  }
  .message_card_footer {
    position: relative;
    padding-right: 90px;
    padding-top: 8px;
    font-size: 12px;
    text-align: left;
  }
  .message_card_footer_name {
    display: inline-block;
    text-align: left;
    a {
      color: rgb(48, 125, 245);
    }
  }
  .message_card_footer_read {
    position: absolute;
    right: 5px;
    font-size: 12px;
    color: #7f7f7f;
    font-family: PingFangSC-Regular;
  }
</style>
