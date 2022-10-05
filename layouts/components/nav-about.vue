<template>
  <div class="nav-about">
    <div
      v-for="item in aboutList"
      :key="item.label"
      class="nav-about-item icon-hover-effect"
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
      // 关于
      aboutList: [
        {
          label: '公司介绍',
          icon: require('@/assets/images/header/about/gongsi.svg'),
        },
        {
          label: '新闻中心',
          icon: require('@/assets/images/header/about/xinwen.svg'),
        },
        {
          label: '招聘精英',
          icon: require('@/assets/images/header/about/zhaopin.svg'),
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.nav-about {
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