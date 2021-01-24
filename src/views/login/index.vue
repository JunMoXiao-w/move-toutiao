<template>
  <div class="login-container">
    <van-form
      validate-first
      :show-error="false"
      :show-error-message="false"
      ref="login-form"
      @failed="onFailed"
      @submit="onLogin"
    >
      <!-- 导航栏 -->
      <van-nav-bar left-arrow @click-left="$router.back()" />
      <!-- 输入栏 -->
      <van-cell-group>
        <van-nav-bar left-text="手机号快速登录" safe-area-inset-top pattern />
        <van-field
          v-model="user.mobile"
          label="手机号"
          placeholder="请输入手机号"
          name="mobile"
          :rules="formRules.mobile"
        />
      </van-cell-group>
      <van-field
        v-model="user.code"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
        name="code"
        :rules="formRules.code"
      >
        <template #button>
          <van-count-down
          :time="1000 * 60"
          format=" ss "
          @finish='xiangshi = false'
          v-if="xiangshi">
            <template #default="timeData">
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
          <van-button
            v-else
            size="small"
            class="yzhm"
            type="primary"
            round
            :loading="jinzhiLoading"
            @click.prevent="oncaptcha"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div class="kaishi">
        <van-button type="primary" block round @click="reg"
          >开始使用</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, sendcaptcha } from '@/api/user'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      },
      formRules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          {
            pattern: /^[0-9]{11}$/,
            required: true,
            message: '请输入11位数字的手机号',
            trigger: 'blur'
          }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          {
            pattern: /^[0-9]{6}$/,
            required: true,
            message: '请输入正确的验证码',
            trigger: 'blur'
          }
        ]
      },
      xiangshi: false, // 控制倒计时和发送按钮的显示状态
      jinzhiLoading: false // 点击发送验证码的loading状态
    }
  },

  computed: {},

  watch: {},

  created () {},

  beforeMount () {},

  mounted () {},

  methods: {
    /* 登录确定方法 */
    async onLogin () {
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true /* 禁止背景点击 */,
        duration: 0
      })
      try {
        const { data } = await login(this.user)
        /* 响应处理 */
        this.$toast.success('登录成功')
        this.$store.commit('setUser', data.data)
      } catch (err) {
        this.$toast.fail('登录失败')
      }
    },
    onFailed (error) {
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message,
          position: 'top'
        })
      }
    },

    /* 验证码 */
    async oncaptcha () {
      try {
        /* 验证手机号 */
        await this.$refs['login-form'].validate('mobile')
        this.jinzhiLoading = true
        /* 请求发送验证码 */
        await sendcaptcha(this.user.mobile)
        this.xiangshi = true
      } catch (err) {
        if (err.name === 'mobile') {
          this.$toast({
            message: err.message,
            position: 'top'
          })
        } else if (err.response.status === 429) {
          this.$toast({
            message: '发送次数频繁，请1分钟后之后尝试',
            position: 'top'
          })
        } else if (err.response.status === 404) {
          this.$toast({
            message: '手机号不正确',
            position: 'top'
          })
        } else {
          this.$toast({
            message: '发送失败，请重新发送',
            position: 'top'
          })
        }
      }
      this.jinzhiLoading = false
    },
    async reg () {
      try {
        await this.$refs['login-form'].validate('mobile', 'code')
      } catch (err) {
        this.$toast({
          message: err.message,
          position: 'top'
        })
      }
    }
  }
}
</script>

<style scoped lang='less'>
.login-container {
  .van-nav-bar {
    padding-top: 10px;
    background-color: #eeeeee;
  }
  .yzhm {
    font-size: 15px;
    width: 100px;
    height: 25px;
  }
  .yzhm,
  .kaishi > .van-button--normal {
    background-color: #f02121;
    border: none;
  }
  .kaishi {
    .van-button--normal {
      width: 250px;
      margin: 25px auto;
      font-size: 15px;
    }
  }
  .block {
    display: inline-block;
    width: 100px;
    height: 25px;
    line-height: 25px;
    color: #A9A9A9;
    font-size: 18px;
    text-align: center;
  }
}
</style>
