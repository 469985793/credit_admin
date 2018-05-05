<template>
  <div class="v_tag_scroll_container" ref="scrollContainer" @wheel.prevent="handleScroll">
    <div class="wrapper" ref="wrapper" :style="{left: left + 'px'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const padding = 15

export default {
  name: 'VTagScroll',
  data() {
    return {
      left: 0
    }
  },
  methods: {
    handleScroll(ev) {
      const eventDelta = ev.wheelDelta || -ev.deltaY * 3
      const $container = this.$refs.scrollContainer
      const $containerWidth = $container.offsetWidth
      const $wrapper = this.$refs.wrapper
      const $wrapperWidth = $wrapper.offsetWidth

      if (eventDelta > 0) {
        this.left = Math.min(0, this.left + eventDelta)
      } else {
        if ($containerWidth - padding < $wrapperWidth) {
          if (this.left < -($wrapperWidth - $containerWidth + padding)) {
            this.left = this.left
          } else {
            this.left = Math.max(this.left + eventDelta, $containerWidth - $wrapperWidth - padding)
          }
        } else {
          this.left = 0
        }
      }
    },
    moveToTarget($target) {
      const $container = this.$refs.scrollContainer
      const $containerWidth = $container.offsetWidth
      const $targetLeft = $target.offsetLeft
      const $targetWidth = $target.offsetWidth

      if ($targetLeft < -this.left) {
        this.left = -$targetLeft + padding
      } else {
        this.left = -($targetLeft - ($containerWidth - $targetWidth) + padding)
      }
    }
  }
}
</script>

<style lang="scss">
.v_tag_scroll_container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  .wrapper {
    position: absolute;
  }
}
</style>
