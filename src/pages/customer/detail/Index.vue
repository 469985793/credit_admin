<template>
  <div class="v_customer_detail_container">
    <el-tabs v-model="activeTab" tab-position="top" @tab-click="goPage">
      <el-tab-pane label="基本信息" name="baseInfo"></el-tab-pane>
      <el-tab-pane label="支付宝认证" name="alipay"></el-tab-pane>
      <el-tab-pane label="淘宝认证" name="alimarket"></el-tab-pane>
      <el-tab-pane label="运营商认证" name="operator"></el-tab-pane>
      <el-tab-pane label="征信报告" name="credit"></el-tab-pane>
      <el-tab-pane label="社保" name="insurance"></el-tab-pane>
      <el-tab-pane label="公积金" name="housingFund"></el-tab-pane>
      <el-tab-pane label="通讯录" name="contact"></el-tab-pane>
      <el-tab-pane label="申请记录" name="applyRecord"></el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'VCustomerDetail',
  data() {
    return {
      activeTab: this.$route.path.substr(this.$route.path.lastIndexOf('/') + 1),
      customerId: this.$route.params.customerId
    }
  },
  methods: {
    goPage(tab) {
      this.$router.push({path: '/customer/' + 'detail/' + this.customerId + '/' + tab.name});
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/css/vars.scss';

.v_customer_detail_container {
  height: calc(100% - 60px);
  .highlight {
    color: $ent-color-danger;
  }

  /* overwrite */
  .el-table {
    font-size: 13px;
    .cell {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .el-badge__content.is-fixed.is-dot {
      left: -20px;
      top: 2px;
    }
  }
  .el-form-item {
    margin-bottom: $ent-gap-x-small;
  } /* overwrite */

  .page_box {
    text-align: right;
    margin: $ent-gap-small;
    font-size: 13px;
    font-weight: lighter;
  }
}
</style>






