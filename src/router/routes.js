/**
 * @type { import('vue-router').RouteConfig[] }
 */
export default [
  {
    path: '/',
    name: 'demo',
    component: () => import('~/views/demo.vue')
  }
]
