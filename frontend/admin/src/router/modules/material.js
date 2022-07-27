import Layout from '@/layout'
// eslint-disable-next-line no-unused-vars
const Transaction = {
  path: '/material',
  component: Layout,
  meta: { title: '素材库', icon: 'icon-material' },
  // alwaysShow: true,
  children: [
    {
      path: 'material',
      name: 'Material',
      component: () => import('@/views/Material/index.vue'),
      meta: {
        title: '素材库'
      }
    }

  ]
}
export default Transaction
