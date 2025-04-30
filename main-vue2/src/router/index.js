import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'
// import logLayout from '../views/layout/loginLayout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  {
    path: "",
    component: Layout,
    redirect: "/intelligence/intelligentAssistant"
  },
  {
    path: "/",
    component: Layout,
    redirect: "/intelligence/intelligentAssistant"
  },
  {
    path: "/intelligence",
    name: "index",
    meta: {
      title: "首页",
      icon: "home-fill",
      role: "all",
    },
    alwaysShow: true,
    redirect: "noredirect",
    component: Layout,
    children: [
      {
        path: "intelligentAssistant",
        name: "SubIIndex",
        component: () => import("@/views/intelligence"),
        meta: {
          title: "首页",
          role: "all"
        }
      }
    ]
  },

  {
    path: "/404",
    component: () => import("@/views/errorPage/404"),
    hidden: true,
    meta: { role: "all" }
  },
  {
    path: "/401",
    component: () => import("@/views/errorPage/401"),
    hidden: true,
    meta: { role: "all" }
  },
];

// 异步加载，校验权限
export const asyncRouterMap = [];
export default new Router({
  // mode: 'history', //后端支持可开
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
