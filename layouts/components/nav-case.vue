<template>
  <div class="the-header-nav-subnav nav-case">
    <div class="nav-case-content">
      <h5>应用：</h5>
      <div
        v-for="item in sceneCaseList"
        :key="item.label"
        class="nav-case-content-item icon-hover-effect"
      >
        <img :src="item.icon" :alt="item.label" />
        <h6>{{ item.label }}</h6>
      </div>
    </div>
    <div class="nav-case-divider"></div>
    <div class="nav-case-content">
      <h5>行业：</h5>
      <div
        v-for="item in sectorCaseList"
        :key="item.label"
        class="nav-case-content-item icon-hover-effect"
      >
        <img :src="item.icon" :alt="item.label" />
        <h6>{{ item.label }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 案例中心二级导航
      sceneCaseList: [
        {
          label: '螺丝锁缚',
          icon: require('@/assets/images/header/case/luosi.svg'),
        },
        {
          label: '抛光打磨',
          icon: require('@/assets/images/header/case/paoguang.svg'),
        },
        {
          label: '涂胶',
          icon: require('@/assets/images/header/case/tujiao.svg'),
        },
        {
          label: '上下料',
          icon: require('@/assets/images/header/case/shangxialiao.svg'),
        },
        {
          label: '包装',
          icon: require('@/assets/images/header/case/baozhuang.svg'),
        },
        {
          label: '码垛',
          icon: require('@/assets/images/header/case/maduo.svg'),
        },
        {
          label: '质量检验',
          icon: require('@/assets/images/header/case/zhiliangjianyan.svg'),
        },
        {
          label: '其他',
          icon: require('@/assets/images/header/case/other.svg'),
        },
      ],
      // 案例 - 行业 - 列表
      sectorCaseList: [
        {
          label: '3C 电子',
          icon: require('@/assets/images/header/case/3cdianzi.svg'),
        },
        {
          label: '家具家电',
          icon: require('@/assets/images/header/case/jiajvjiadian.svg'),
        },
        {
          label: '教育',
          icon: require('@/assets/images/header/case/jiaoyu.svg'),
        },
        {
          label: '金属加工',
          icon: require('@/assets/images/header/case/jinshujiagong.svg'),
        },
        {
          label: '汽车',
          icon: require('@/assets/images/header/case/qiche.svg'),
        },
        {
          label: '日化',
          icon: require('@/assets/images/header/case/rihua.svg'),
        },
        {
          label: '新消费',
          icon: require('@/assets/images/header/case/xinxiaofei.svg'),
        },
        {
          label: '注塑',
          icon: require('@/assets/images/header/case/zhusu.svg'),
        },
        {
          label: '其他',
          icon: require('@/assets/images/header/case/other.svg'),
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.nav-case {
  margin-bottom: var(--length-40px);

  &-content {
    display: flex;
    align-items: center;
    // justify-content: center;
    padding-left: 2.343rem;

    h5 {
      font-size: var(--font-size-16px);
      margin-right: var(--length-40px);
      font-weight: normal;
    }

    &-item {
      width: 0.416rem;
      text-align: center;

      img {
        width: var(--length-40px);
        height: var(--length-40px);

        margin: 0 auto var(--font-size-12px);
        position: relative;
      }

      h6 {
        font-size: var(--font-size-12px);
        font-weight: normal;
      }
    }
  }
  &-divider {
    width: 100%;
    height: 0.005rem;
    background-color: #e1e1e1;
    margin: var(--length-40px) 0;
  }
}
</style>