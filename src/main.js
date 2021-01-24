import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* 加载全局样式 */
import './styles/index.less'
/* 加载Vant组件库 */
import Vant from 'vant'
/* 加载Vant组件库样式 */
import 'vant/lib/index.css'
/* 自动设置REM基准值（html标签字体大小） */
import 'amfe-flexible'
/* 加载自定义图标 */
import '@/styles/icon.less'

/* 全局注册Vant中的组件 */
Vue.use(Vant)
Vue.config.productionTip = false

/* 创建Vue根实例，将router、store配置 */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
