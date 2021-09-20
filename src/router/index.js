import Vue from 'vue'
import Router from 'vue-router'
// 用户数据
import { userCache } from '@/user'
import BaseLayout from '@/views/layout/index.vue'
import LogIn from '@/views/login/index.vue'
import Table from '@/views/table/index.vue'
import DashBoard from '@/views/dashboard/index.vue'
import ValiDation from '@/views/validation'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      // redirect 是重新定向
      component: BaseLayout,
      redirect: '/dashboard',
      children: [
        {
          path: '/table',
          name: 'Table',
          component: Table,
          meta: {
            menu: true,
            title: 'Pagianted Tables'
          }
        },
        {
          path: '/dashboard',
          name: 'DashBoard',
          component: DashBoard,
          meta: {
            menu: true, // 控制菜单显示或隐藏
            title: 'Dashboard'
          }
        },
        {
          path: '/validation',
          name: 'ValiDation',
          component: ValiDation,
          meta: {
            menu: true, // 控制菜单显示或隐藏
            title: 'Validation Forms'
          }
        }]
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    }
  ]
})

// 注册路由拦截
router.beforeEach((to, from, next) => {
  // 页面是否是要去登陆页
  if (to.name === 'LogIn') {
    next()
  } else {
    if (userCache.token) {
      next()
    } else {
      next({
        name: 'LogIn',
        replace: true
      })
    }
  }
})
export default router
