<template>
  <el-breadcrumb class="v_breadcrumb_container" separator="/">
    <el-breadcrumb-item v-for="item in matchPageList" :key="item.path">
        <router-link v-if="item.meta.title" :to="item.redirect || item.path">
          {{item.meta.title}}
        </router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  created() {
    this.getBreadcrumb()
  },
  data() {
    return {
      matchPageList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb() {
      this.matchPageList = this.$route.matched.filter(item => item.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.v_breadcrumb_container.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 10px;
}
</style>
