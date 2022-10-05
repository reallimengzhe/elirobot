// eslint-disable-next-line nuxt/no-cjs-in-config
const path = require('path')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ELITE ROBOT',
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
    '@/assets/styles/font.css',
    '@/assets/styles/reset.css',
    '@/assets/styles/common.scss',
    'animate.css/animate.min.css',
    // 'element-ui/lib/theme-chalk/index.css',
    '@/assets/styles/variables.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/element-ui',

    { src: '@/plugins/vue-agile', mode: 'client' },
    // { src: '@/plugins/swiper', mode: 'client' },
    { src: '@/plugins/flexible', mode: 'client' },
    { src: '@/plugins/svg-icon', ssr: true },
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
    // transpile: [/^element-ui/],

    // svg-icon
    extend(config, ctx) {
      // ...
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [path.resolve(__dirname, 'assets/icon')]
      // Includes /icons/svg for svg-sprite-loader
      config.module.rules.push({
        test: /\.svg$/,
        include: [path.resolve(__dirname, 'assets/icon')],
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]',
        },
      })
    },
  },
}
