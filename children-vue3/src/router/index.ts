import Layout from '../layout/index.vue'
const routes = [
  {
    path: '/',
    redirect: '/intelligence/intelligentAssistant'
  },
  {
    path: '/intelligence',
    component: Layout,
    redirect: '/intelligence/intelligentAssistant',
    children: [
      {
        path: 'intelligentAssistant',
        meta: {
          title: '智能助手'
        },
        name: 'intelligentAssistant',
        component: () => import('@/views/IntelligentAssistant/index.vue')
      },

    ]
  }
]

export default routes
