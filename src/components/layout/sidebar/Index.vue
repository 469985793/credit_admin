<template>
  <VScrollBar class="side_bar_box">
    <el-menu
      :default-active="activeMenu"
      :unique-opened="true"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      :collapse="isCollapse">
      <el-menu-item index="/dashboard" @click="goPage('/dashboard')">
        <i class="iconfont icon-dashboard"></i>
        <span slot="title">控制面板</span>
      </el-menu-item>
      <el-menu-item index="/authority" @click="goPage('/authority')">
        <i class="iconfont icon-authority"></i>
        <span slot="title">权限管理</span>
      </el-menu-item>
      <el-menu-item index="/creditQuery" @click="goPage('/creditQuery')">
        <i class="iconfont icon-credit-quary"></i>
        <span slot="title">信用查询</span>
      </el-menu-item>
      <el-menu-item index="/customer/list" @click="goPage('/customer/list')">
        <i class="iconfont icon-customer"></i>
        <span slot="title">客户中心</span>
      </el-menu-item>
      <el-submenu index="/process">
        <template slot="title">
          <i class="iconfont icon-process"></i>
          <span slot="title">进度管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/process/waitVerify" @click="goPage('/process/waitVerify')">待审核</el-menu-item>
          <el-menu-item index="/process/verify" @click="goPage('/process/verify')">审核中</el-menu-item>
          <el-menu-item index="/process/refuse" @click="goPage('/process/refuse')">拒绝受理</el-menu-item>
          <el-menu-item index="/process/waitLoan" @click="goPage('/process/waitLoan')">待放款</el-menu-item>
          <el-menu-item index="/process/loan" @click="goPage('/process/loan')">已放款</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/postLoan">
        <template slot="title">
          <i class="iconfont icon-postloan"></i>
          <span slot="title">贷后管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/postLoan/repay" @click="goPage('/postLoan/repay')">还款</el-menu-item>
          <el-menu-item index="/postLoan/acquitt" @click="goPage('/postLoan/acquitt')">已结清</el-menu-item>
          <el-menu-item index="/postLoan/overdue" @click="goPage('/postLoan/overdue')">逾期</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </VScrollBar>
</template>

<script>
import VScrollBar from '../../base/scrollBar'

export default {
  props: {
    isCollapse: false
  },
  computed: {
    activeMenu(menu) {
      let path = this.$route.path;
      if (path.indexOf('customer/detail') !== -1) {
        return '/customer/list'
      } else {
        return path;
      }
    }
  },
  components: { VScrollBar },
  methods: {
    goPage(page) {
      this.$router.push({path: page});
    }
  }
}
</script>
<style lang="scss">
.side_bar_box {
  & .iconfont {
    margin-right: 5px !important;
  }
}
</style>