<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    selectMenu: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    var { icon, title, selectMenu, path } = context.props
    const vnodes = []
    if (icon) {
      if (selectMenu && path) {
        const compareStr = selectMenu.split('/')
        if (path.indexOf('/') > -1) {
          const pathLens = String(path).length
          path = path.substring(1, pathLens)
        }

        const curItem = compareStr[1].indexOf(path) > -1
        if (curItem) {
          vnodes.push(<svg-icon className='iconHover' icon-class={icon}/>)
        } else {
          vnodes.push(<svg-icon className='iconNormal' icon-class={icon}/>)
        }
      } else {
        vnodes.push(<svg-icon className='iconNormal' icon-class={icon}/>)
      }
    } else {
      vnodes.push(<span style='margin-right: 4px;'/>)
    }

    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span>)
    }
    return vnodes
  }
}
</script>
<style scoped>
.iconHover{
  color:#ffffff!important;
  fill:#ffffff;
}
.iconNormal{
  color:#A6A9B2;
  fill:#A6A9B2;
}
</style>
