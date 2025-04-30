import Vue from 'vue'

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import microApp from '@micro-zoe/micro-app'
import './../static/theme/index.css'

import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
// import '../static/css/iconfont/1.0.0/index.css' /* icofont*/

import App from './App'

import router from './router'
microApp.start({
  disableScopecss: false, // 默认值false
})
Vue.config.ignoredElements = [
  'micro-app',
]


//捕获js报错
Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误发生在哪一个组件。
  console.error(`全局错误捕获: ${info}`, err);
  // 你可以在这里添加更多的错误处理逻辑，比如发送错误到服务器等
};

import '@/permission' // permission control

// Vue.use(VCharts)
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

const cleanVnode = vnode => {
  if (vnode) {
    vnode.elm = null
    vnode._renderChildren = null
    vnode.children = null
    vnode.componentOptions = null
  }
}
Vue.mixin({
  beforeDestroy() {
    if (this.$el) {
      delete this.$el.__vue__
    }
  },
  destroyed() {
    this.$children = []
    this.$parent = null
    this._watchers = []
    this.$refs = {}
    this.$root = null
    this.$slots = []
    this.$store = null
    cleanVnode(this._vnode)
    // cleanVnode(this.$vnode)
    this._vnode = null
    this.$vnode = null
    this._watcher = null

  }
})

const rootVue = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
export default rootVue
