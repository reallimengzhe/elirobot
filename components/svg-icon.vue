<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.icon}`
    },
    svgClass() {
      return this.className ? 'svg-icon ' + this.className : 'svg-icon'
    },
  },
}
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  /* font-size: 1.2em; */
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
