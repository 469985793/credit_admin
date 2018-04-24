<template>
  <VScrollBar>
    <el-menu
      :collapse-transition="false"
      :default-active="activeMenu"
      mode="vertical"
      class="el-menu-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse">
      <el-menu-item index="/dashboard" @click="goPage('/dashboard')">
        <i class="el-icon-menu"></i>
        <span slot="title">控制面板</span>
      </el-menu-item>
      <el-menu-item index="/authority" @click="goPage('/authority')">
        <i class="el-icon-menu"></i>
        <span slot="title">权限管理</span>
      </el-menu-item>
      <el-menu-item index="/creditQuery" @click="goPage('/creditQuery')">
        <i class="el-icon-menu"></i>
        <span slot="title">信用查询</span>
      </el-menu-item>
      <el-menu-item index="/customer/list" @click="goPage('/customer/list')">
        <i class="el-icon-menu"></i>
        <span slot="title">客户中心</span>
      </el-menu-item>
      <el-submenu index="/process">
        <template slot="title">
          <i class="el-icon-location"></i>
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
          <i class="el-icon-location"></i>
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
