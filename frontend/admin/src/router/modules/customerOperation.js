import Layout from '@/layout'

const CustomerOperation = {
  path: '/customer-operation',
  component: Layout,
  meta: { title: '客户运营', icon: 'icon-customer-operation' },
  alwaysShow: true,
  children: [
    {
      path: 'user-list',
      name: 'UserList',
      component: () => import('@/views/CustomerOperation/userList.vue'),
      meta: {
        title: '用户列表'
      }
    },
    {
      path: 'retention-list',
      name: 'RetentionList',
      component: () => import('@/views/CustomerOperation/retentionList.vue'),
      meta: {
        title: '留资列表'
      }
    },
    {
      path: 'source-channel',
      name: 'SourceChannel',
      component: () => import('@/views/CustomerOperation/sourceChannel.vue'),
      meta: {
        title: '来源渠道'
      }
    }

  ]
}
export default CustomerOperation
