import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/')
  },
  {
    path: '/',
    component: () => import('@/views/BottomLayout/'),
    children: [
      {
        path: '', /* 默认子路由 */
        name: 'homePage',
        component: () => import('@/views/homePage/')
      },
      {
        path: '/video', /* 视频 */
        name: 'video',
        component: () => import('@/views/video/')
      },
      {
        path: '/qa', /* 问答 */
        name: 'qa',
        component: () => import('@/views/qa/')
      },
      {
        path: '/my', /* 我 */
        name: 'my',
        component: () => import('@/views/my/')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
