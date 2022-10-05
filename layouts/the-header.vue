<template>
  <header :class="['the-header', { 'light-mode': isLightMode }]">
    <nuxt-link to="/" class="the-header-logo">
      <img
        :src="
          isLightMode
            ? require('@/assets/images/header/logo.svg')
            : require('@/assets/images/header/logo_white.svg')
        "
        alt="logo"
        width="100%"
      />
    </nuxt-link>
    <nav class="the-header-nav" @mouseleave="activeNav = -1">
      <div
        class="the-header-nav-item"
        v-for="(nav, index) in navs"
        :key="nav.label"
        @mouseenter="activeNav = index"
      >
        <span
          :class="[
            {
              'is-active': $route.path.startsWith(nav.path),
            },
          ]"
        >
          {{ $t('nav.' + nav.label) }}
        </span>
        <transition
          enterActiveClass="animate__animated animate__fadeIn"
          leaveActiveClass="animate__animated animate__fadeOut"
        >
          <component
            v-show="activeNav === index"
            class="the-header-nav-item-subnav"
            :is="nav.subNav"
          ></component>
        </transition>
      </div>
    </nav>
    <!-- i18n -->
    <div class="the-header-i18n">
      <svg-icon icon="language"></svg-icon>
      <nuxt-link :to="switchLocalePath('zh')" :disabled="$i18n.locale === 'zh'"
        >中文
      </nuxt-link>
      <span>|</span>
      <nuxt-link :to="switchLocalePath('en')" :disabled="$i18n.locale === 'en'"
        >English
      </nuxt-link>
    </div>
  </header>
</template>
<script>
import NavAbout from './components/nav-about.vue'
import NavCase from './components/nav-case.vue'
import NavDownload from './components/nav-download.vue'
import NavProduct from './components/nav-product.vue'
import NavSupport from './components/nav-support.vue'

export default {
  name: 'the-header',
  components: {},
  data() {
    return {
      // 导航
      navs: [
        { label: 'product_center', path: '/product', subNav: NavProduct },
        { label: 'case_center', path: '/case', subNav: NavCase },
        { label: 'download_center', path: '/download', subNav: NavDownload },
        { label: 'support', path: '/support', subNav: NavSupport },
        { label: 'about', path: '/about', subNav: NavAbout },
      ],
      // 黑色导航的页面
      lightModeRoutes: ['/product/ec/ec66'],
      // 当前打开的一级导航
      activeNav: -1,
    }
  },
  computed: {
    //
    availableLocales() {
      // return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      return this.$i18n.locales
    },
    //
    isLightMode() {
      return (
        this.activeNav > -1 || this.lightModeRoutes.includes(this.$route.path)
      )
    },
  },
  watch: {
    $route() {
      this.activeNav = -1
    },
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    // 打开二级菜单
    openSubNav(route) {
      console.log(route)
      this.activeNav = route
    },
  },
}
</script>
<style lang="scss">
.the-header {
  position: fixed;
  top: 0;
  z-index: 2;

  width: 100%;
  height: 0.3125rem;
  padding: 0 0.625rem;
  box-sizing: border-box;

  display: flex;
  align-items: center;

  transition: all 225ms;

  font-size: var(--font-size-16px);
  backdrop-filter: blur(10px);
  color: white;
  background-color: rgba(0, 8, 22, 0.12);

  &.light-mode {
    color: var(--color-main-bg);
    background-color: white;
  }

  &-logo {
    width: 0.552083rem;
    // height: 0.1666667rem;
  }

  &-nav {
    display: flex;
    height: 100%;
    margin-left: auto;
    &-item {
      > span {
        display: block;
        height: 100%;
        transition: all 225ms;
        box-sizing: border-box;

        display: flex;
        align-items: center;
        border-bottom: 2px solid transparent;

        margin-left: var(--length-40px);

        cursor: pointer;

        &.is-active {
          font-weight: bold;
          border-color: var(--color-blue);
        }
      }
      &:hover {
        > span {
          font-weight: bold;
          border-color: var(--color-blue);
        }
      }
      &-subnav {
        position: absolute;
        top: 0.3125rem;
        left: 0;

        width: 100%;
        padding: var(--length-40px) 0.625rem;
        box-sizing: border-box;

        color: var(--color-main-bg);
        background-color: white;
      }
    }
  }

  &-i18n {
    margin-left: var(--length-40px);

    display: flex;
    align-items: center;

    *:not(:first-child) {
      margin-left: 0.03125rem;
    }
    *[disabled] {
      opacity: 0.5;
    }
  }
}

.icon-hover-effect {
  position: relative;

  &:hover {
    h6 {
      color: var(--color-blue);
    }
    &::before {
      transform: scale(1);
    }
  }

  &::before {
    content: '';
    display: block;

    width: var(--length-40px);
    height: var(--length-40px);
    background-color: rgb(230, 236, 245);

    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    margin: auto;

    border-radius: 50%;
    transform: scale(0);
    transform-origin: center;
    transition: transform 225ms;
  }
}
</style>
