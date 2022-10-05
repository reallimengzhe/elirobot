<template>
  <button class="the-button">
    <span class="gradient_text"><slot /></span>
    <img src="@/assets/images/common/triangle.svg" />
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/styles/common.scss';

.the-button {
  @extend .gradient_border;

  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  padding: var(--font-size-12px) var(--font-size-24px);

  span {
    margin-right: 0.0625rem;
    font-size: var(--font-size-14px);
  }
}
</style>