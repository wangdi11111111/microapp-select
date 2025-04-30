import './public-path'

import { createApp, App as AppInstance } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createRouter, createWebHistory, createWebHashHistory, Router, RouterHistory, RouterOptions } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import routes from './router'
import zhCn from 'element-plus/es/locale/lang/zh-cn';
// element css
import 'element-plus/es/components/message/style/css';
import 'element-plus/es/components/message-box/style/css';


declare global {
  interface Window {
    microApp: any
    __MICRO_APP_NAME__: string
    __MICRO_APP_ENVIRONMENT__: string
    __MICRO_APP_BASE_ROUTE__: string
  }
}
// 与基座进行数据交互
function handleMicroData(router: Router) {
  // 是否是微前端环境
  if (window.__MICRO_APP_ENVIRONMENT__) {
    // 主动获取基座下发的数据
    console.log('child-vue3 getData:', window.microApp.getData())

    // 监听基座下发的数据变化
    window.microApp.addDataListener((data: Record<string, unknown>) => {
      console.log('child-vue3 addDataListener:', data)

      // 当基座下发path时进行跳转
      if (data.path && data.path !== router.currentRoute.value.path) {
        router.push(data.path as string)
      }
    })

    // 向基座发送数据
    setTimeout(() => {
      window.microApp.dispatch({ myname: 'child-vue3' })
    }, 3000)
  }
}

/**
 * 用于解决主应用和子应用都是vue-router4时相互冲突，导致点击浏览器返回按钮，路由错误的问题。
 * 相关issue：https://github.com/micro-zoe/micro-app/issues/155
 * 当前vue-router版本：4.0.12
 */
function fixBugForVueRouter4(router: Router) {
  // 判断主应用是main-vue3或main-vite，因为这这两个主应用是 vue-router4
  if (window.location.href.includes('/main-vue3') || window.location.href.includes('/main-vite')) {
    /**
     * 重要说明：
     * 1、这里主应用下发的基础路由为：`/main-xxx/app-vue3`，其中 `/main-xxx` 是主应用的基础路由，需要去掉，我们只取`/app-vue3`，不同项目根据实际情况调整
     *
     * 2、realBaseRoute 的值为 `/app-vue3`
     */
    const realBaseRoute = window.__MICRO_APP_BASE_ROUTE__.replace(/^\/main-[^/]+/g, '')

    router.beforeEach(() => {
      if (typeof window.history.state?.current === 'string') {
        window.history.state.current = window.history.state.current.replace(new RegExp(realBaseRoute, 'g'), '')
      }
    })

    router.afterEach(() => {
      if (typeof window.history.state === 'object') {
        window.history.state.current = realBaseRoute + (window.history.state.current || '')
      }
    })
  }
}

let app: AppInstance | null = null
let router: Router | null = null
let history: any | null = null
// 将渲染操作放入 mount 函数
function mount() {
  // __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
  history = createWebHashHistory(window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL)
  router = createRouter({
    history,
    routes,
  }) as Router

  app = createApp(App)
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  app.use(router)
  app.mount('#vue3-app')

  // 使用element-plus 并且设置全局的大小
  app.use(ElementPlus, {
    locale: zhCn,
    // 支持 large、default、small
    size: 'default',
  })

  console.log('微应用child渲染了')
  handleMicroData(router)
  fixBugForVueRouter4(router)
}

// 将卸载操作放入 unmount 函数
function unmount() {
  app?.unmount()
  history?.destroy()
  app = null
  router = null
  history = null
  console.log('微应用child卸载了')
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_ENVIRONMENT__) {
  // @ts-ignore
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount }
} else {
  // 非微前端环境直接渲染
  mount()
}

