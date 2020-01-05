<template>
  <a class="btn">
    {{ text }}
  </a>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.btn {
  overflow: hidden;
  position: relative;
  &::after {
    position: absolute;
    bottom: 0;
    content: "";
    height: 100%;
    width: 1px;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
  }
  &::before {
  }
}
</style>
