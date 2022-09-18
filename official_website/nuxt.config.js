export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'official_website',
    htmlAttrs: {
      lang: 'zh',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'animate.css',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/styles/font.css',
    '@/assets/styles/reset.css',
    '@/assets/styles/variables.css',
    // '@/assets/styles/common.scss',
    // '@/assets/styles/declaration.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',

    // { src: '@/plugins/popper', mode: 'client' },
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '@/plugins/flexible', mode: 'client' },
    { src: '@/plugins/wow.min', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://i18n.nuxtjs.org/setup
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  i18n: {
    locales: [
      { code: 'zh', iso: 'zh-CN', name: '中文', file: 'zh.js' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.js' },
    ],
    langDir: 'i18n/',
    defaultLocale: 'zh',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
}
