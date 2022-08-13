import Layout from '@/layout'
// eslint-disable-next-line no-unused-vars
const IndexPage = {
  path: '/indexPage',
  component: Layout,
  meta: { title: '首页', icon: 'icon-material' },
  // alwaysShow: true,
  children: [
    {
      path: 'banner',
      name: 'Banner',
      component: () => import('@/views/IndexPage/Banner.vue'),
      meta: {
        title: 'BANNER',
      }
    },
    {
        path: 'linkUrl',
        name: 'LinkUrl',
        component: () => import('@/views/IndexPage/LinkUrl.vue'),
        meta: {
          title: '友情链接',
        }
      }

  ]
}
export default IndexPage
