<template>
  <div class="v_tag_container">
    <VTagScroll class='item_wrapper' ref='tagScroll'>
      <router-link 
        class="item_box"
        v-for="(item, index) in tagItemList" 
        :key="index"
        :class="isActive(item) ? 'active' : ''"
        ref='tagItem'
        :to="item.path">
        {{item.title}}
        <span class='el-icon-delete' @click.prevent.stop='closeTagItem(item)'></span>
      </router-link>
    </VTagScroll>
  </div>
</template>

<script>
import VTagScroll from '../tagScroll'
import * as types from '../../../store/mutationsType'

export default {
  components: { VTagScroll },
  data() {
    return {
    }
  },
  computed: {
    tagItemList() {
      return Array.from(this.$store.state.tagView)
    }
  },
  watch: {
    '$route'() {
      this.addTagItem()
    }
  },
  mounted() {
    this.addTagItem()
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path || route.name === this.$route.name
    },
    addTagItem() {
      this.$store.dispatch(types.ADD_TAG_VIEW, this.$route)
    },
    closeTagItem(tagItem) {
      this.$store.dispatch(types.DEL_TAG_VIEW, tagItem).then((tagItemList) => {
        if (this.isActive(tagItem)) {
          let lastView = tagItemList.slice(-1)[0]
          if (lastView) {
            this.$router.push(lastView.path)
          } else {
            this.$router.push('/')
          }
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/css/vars.scss';

.v_tag_container {
  margin-bottom: $ent-gap-small;
  .item_wrapper {
    display: flex;
    align-items: center;
    height: 45px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    .item_box {
      display: inline-block;
      position: relative;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: $ent-color-white;
      padding: 0 $ent-gap-small;
      margin: 0 $ent-gap-xx-small;
      font-size: 12px;
      border-radius: 15px;
      transition: all 0.5s ease-in-out;
      &:first-of-type {
        margin-left: $ent-gap-small;
      }
      &.active {
        background-color: $ent-color-primary;
        color: #fff;
        border-color: $ent-color-primary;
        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
    }
  }
}
</style>

