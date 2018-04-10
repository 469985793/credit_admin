<template>
  <div>
    <span class="el-icon-tickets hamburger" :class="{'is-active':isActive}"></span>
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
    width: 20px;
    height: 20px;
    transform: rotate(0deg);
    transition: all 0.8s ease-in-out;
    transform-origin: 50% 50%;
}

.hamburger.is-active {
    transform: rotate(90deg);
}
</style>
