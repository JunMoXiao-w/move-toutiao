<template>
  <div class="my-container">
    <van-cell-group class="my-info">
      <van-cell class="base-info" center title="单元格" value="内容">
        <van-image
          round
          slot="icon"
          width="50px"
          height="50px"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div slot="title" class="my-TheUserName">名称</div>
        <van-button round size="small">编辑资料</van-button>
      </van-cell>
      <van-grid :column-num="4" class="base-info">
        <van-grid-item>
          <div slo1="text">
            <div class="sapn">123</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slo1="text">
            <div class="sapn">123</div>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slo1="text">
            <div class="sapn">123</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item class="borderRight">
          <div slo1="text">
            <div class="sapn">123</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <van-grid :column-num="2">
      <van-grid-item icon="star-o" text="收藏" badge="99+" />
      <van-grid-item icon="clock-o" text="历史" />
    </van-grid>
    <van-cell title="消息通知" is-link to="/" />
    <van-cell class="borderBottom" title="小智同学" is-link to="/" />
    <van-button type="primary" class="my-LogOut" block>退出登录</van-button>
  </div>
</template>

<script>
export default {
  name: 'myIndex',
  props: {},
  data () {
    return {}
  },

  components: {},

  computed: {},

  created () {},

  beforeMount () {},

  mounted () {},

  methods: {},

  watch: {}
}
</script>
<style scoped lang='less'>
.my-container {
  .my-info {
    background: url("../../assets/5.jpg") no-repeat;
    background-size: 100% 100%;
    .base-info,/deep/.van-grid-item__content{
      background-color: unset;
      color: #fff;
      font-size: 16px;
    }
    /deep/.van-cell::after{
       border-bottom: none;
    }
    .borderRight{
      border-right: none;
    }
  }
  .borderBottom::after{
      border-bottom: none;
    }
  .my-TheUserName {
    margin-left: 10px;
  }
  .my-LogOut {
    width: 80%;
    margin: 55px auto;
    background-color: #f02121;
    border: none;
  }
}
</style>
