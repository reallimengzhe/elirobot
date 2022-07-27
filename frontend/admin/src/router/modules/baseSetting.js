import Layout from '@/layout'

const BaseSetting = {
  path: '/base-setting',
  component: Layout,
  meta: { title: '基础设置', icon: 'icon-setting' },
  alwaysShow: true,
  children: [
    {
      path: 'industry',
      name: 'Industry',
      component: () => import('@/views/BaseSetting/industry.vue'),
      meta: {
        title: '行业'
      }
    },
    {
      path: 'channel-classify',
      name: 'ChannelClassify',
      component: () => import('@/views/BaseSetting/channelClassify.vue'),
      meta: {
        title: '渠道分类'
      }
    }

  ]
}
export default BaseSetting
