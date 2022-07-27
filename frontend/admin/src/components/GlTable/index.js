import GlTable from './src/index.vue'
 
// 支持按需引用
GlTable.install = function (Vue) {
  Vue.component(GlTable.name, GlTable);
};
 
export default GlTable;