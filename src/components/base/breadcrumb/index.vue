<template>
  <el-breadcrumb class="v_breadcrumb_container" separator="/">
    <el-breadcrumb-item v-for="(item, index) in matchPageList" :key="item.path">
        <span class="un_redirect" v-if='item.redirect=== null || index === matchPageList.length - 1'>
          {{item.meta.title}}
        </span>
        <router-link v-else :to="filterPath(item)">
          {{item.meta.title}}
        </router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
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
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      this.matchPageList = this.$route.matched.filter(item => item.name)
    },
    filterPath(item) {
      if (item.path === '/customer/detail/:customerId') {
        return '';
      } else {
        return item.redirect || item.path;
      }
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
  .un_redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
