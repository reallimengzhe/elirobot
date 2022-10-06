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
    quotes: 1,
    'comma-dangle': 0, // 逗号
    'space-before-function-paren': 0,
    'no-unused-vars': 1, // 未使用的变量
    'arrow-parens': 0, // 箭头函数的括号
    'eol-last': 0, // 最后空一行
    'no-trailing-spaces': 1,
    'vue/no-unused-vars': 1, // 未使用的变量
    'vue/multi-word-component-names': 0, // 多单词组件
    'vue/max-attributes-per-line': 0, // 每行的属性
    'vue/html-self-closing': 0, // 自闭和标签 <img />
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-unused-components': 1,
  },
}
