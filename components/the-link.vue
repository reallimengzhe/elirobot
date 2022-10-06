<template>
  <div class="the-link">
    <span class="gradient_text"><slot /></span>
    <img src="@/assets/images/common/triangle.svg" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.the-link {
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    margin-right: 0.0625rem;
    font-size: var(--font-size-14px);
  }

  img {
    width: var(--font-size-14px);
  }
}
</style>