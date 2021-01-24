<template>
  <div class="layout-container">
    <router-view />

    <!-- 底部导航栏 -->
    <van-tabbar v-model="active" route  active-color="red">
      <van-tabbar-item replace to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/video" icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item replace to="/qa" icon="comment-circle-o"
        >问答</van-tabbar-item
      >
      <van-tabbar-item replace to="/my" icon="manager-o">未登录</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  props: {},
  data () {
    return {
      active: 0
    }
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
</style>
