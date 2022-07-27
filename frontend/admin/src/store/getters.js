const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  dictionary: state => state.app.dictionary,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  roles: state => state.user.roles,
  name: state => state.user.name,
  visitedViews: state => state.tagsViews.visitedViews,
  cachedViews: state => state.tagsViews.cachedViews,
  permission_routes: state => state.permission.routes,
}
export default getters
