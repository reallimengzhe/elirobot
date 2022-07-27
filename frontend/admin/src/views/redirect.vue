<template>
  <div class="main-content" />
</template>

<script>

export default {
  name: 'Redirect',
  computed: {
    message() {
      return '重新刷新页面'
    }
  },
  created() {
    const path = this.$route.fullPath.substring(this.$route.fullPath.indexOf('=') + 1)
  	this.$router.replace({
      path: decodeURIComponent(path)
    })
  }
}
</script>
