<template>
  <div class="download-nav">
    <div
      v-for="item in fileList"
      :key="item.label"
      class="download-nav-item icon-hover-effect"
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
      // 下载中心
      fileList: [
        {
          label: '宣传样本',
          icon: require('@/assets/images/header/download/xuanchuan.svg'),
        },
        {
          label: '技术文档',
          icon: require('@/assets/images/header/download/jishu.svg'),
        },
        {
          label: '资质证书',
          icon: require('@/assets/images/header/download/zizhi.svg'),
        },
        {
          label: '专利软著',
          icon: require('@/assets/images/header/download/zhuanli.svg'),
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.download-nav {
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