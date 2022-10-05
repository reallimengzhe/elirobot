module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 0, // 多单词组件
    'vue/max-attributes-per-line': 0, // 每行的属性
    'comma-dangle': 0, // 逗号
    'space-before-function-paren': 0,
    'no-unused-vars': 1, // 未使用的变量
    'arrow-parens': 0, // 箭头函数的括号
    'eol-last': 0, // 最后空一行
    quotes: 1,
    'no-trailing-spaces': 1,
  },
}
