<template>
  <el-tooltip v-if="alt" :effect="effect" :content="alt" :placement="placement">
    <el-button type="text" @click="onClick">
      <slot />
    </el-button>
  </el-tooltip>
  <el-button v-else type="text" @click="onClick">
    <slot />
  </el-button>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    alt: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'top'
    },
    effect: {
      type: String,
      default: 'dark'
    }
  },
  data() {
    return {

    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}

</script>

<style>
</style>
