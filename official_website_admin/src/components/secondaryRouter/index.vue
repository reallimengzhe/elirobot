<template>
  <keep-alive :include="cachedViews">
    <router-view :key="key" />
  </keep-alive>
</template>

<script>
/**
 * 次级路由组件
 */
export default {
  name: 'SecondaryRouter',
  components: {},
  mixins: [],
  computed: {
    key() {
      return this.$route.path
    },
    cachedViews() {
      return this.$store.state.tagsViews.cachedViews
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
