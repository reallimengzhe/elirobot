<template>
  <section
    class="app-main"
    :class="{'full-screen': fullScreen}"
  >
    <!-- <transition
      name="fade-transform"
      mode="out-in"
    > -->
    <keep-alive :include="cachedViews">
      <router-view :key="key" />
    </keep-alive>
    <!-- </transition> -->
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    },
    cachedViews() {
      return this.$store.state.tagsViews.cachedViews
    },
    fullScreen() {
      return this.$route.meta.full
    }
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 100px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
  background-color: #fff;
  /* padding: 0 16px 16px 16px; */
}
.app-main.full-screen{
  padding: 0;
}

.fixed-header + .app-main {
  padding-top: 50px;
}

/* // fix css style bug in open el-dialog */
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
