<template>
  <div>
    <span class="iconfont icon-toggle hamburger" :class="{'is_active':isActive}"></span>
  </div>
</template>

<script>
export default {
  name: 'hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.hamburger {
    display: inline-block;
    cursor: pointer;
    width: 25px;
    height: 25px;
    font-size: 25px;
    transform: rotate(0deg);
    transition: all 0.8s ease-in-out;
    transform-origin: 50% 50%;
}

.hamburger.is_active {
    transform: rotate(90deg);
}
</style>
