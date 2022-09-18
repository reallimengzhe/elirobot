<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from './the-header.vue'
import TheFooter from './the-footer.vue'
export default {
  components: { TheHeader, TheFooter },
}
</script>
