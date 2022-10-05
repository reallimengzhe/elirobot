<template>
  <div class="nav-support">
    <div
      v-for="item in supportList"
      :key="item.label"
      class="nav-support-item icon-hover-effect"
    >
      <img :src="item.icon" :alt="item.label" />
      <h6>{{ item.label }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 服务支持
      supportList: [
        {
          label: '技术论坛',
          icon: require('@/assets/images/header/support/jishu.svg'),
        },
        {
          label: '培训教程',
          icon: require('@/assets/images/header/support/peixun.svg'),
        },
        {
          label: '售后支持',
          icon: require('@/assets/images/header/support/shouhou.svg'),
        },
        {
          label: '查找经销商',
          icon: require('@/assets/images/header/support/jingxiaoshang.svg'),
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.nav-support {
  display: flex;
  justify-content: center;

  &-item {
    width: 0.458rem;

    img {
      width: var(--length-40px);
      height: var(--length-40px);

      margin: 0 auto var(--font-size-12px);
      position: relative;
    }

    h6 {
      font-size: var(--font-size-12px);
      font-weight: normal;
      text-align: center;
    }
  }
}
</style>