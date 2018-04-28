<template>
  <div class="v_customer_detail_operator_container">
    <el-tabs class="tab_box" tab-position="right">
      <el-tab-pane label="个人信息">
        <VBaseInfo></VBaseInfo>
      </el-tab-pane>
      <el-tab-pane label="账单记录">
        <VBillRecord></VBillRecord>
      </el-tab-pane>
      <el-tab-pane label="亲情网">
        <VFamily></VFamily>
      </el-tab-pane>
      <el-tab-pane label="通话记录">
        <VCallRecord></VCallRecord>
      </el-tab-pane>
      <el-tab-pane label="充值记录">
        <VRechargeRecord></VRechargeRecord>
      </el-tab-pane>
      <el-tab-pane label="报告基本信息">
        <VReportInfo></VReportInfo>
      </el-tab-pane>
      <el-tab-pane label="信息校验">
        <VInfoCheck></VInfoCheck>
      </el-tab-pane>
      <el-tab-pane label="联系人信息">
        <VContactInfo></VContactInfo>
      </el-tab-pane>
      <el-tab-pane label="联系人分析">
        <VContactParse></VContactParse>
      </el-tab-pane>
      <el-tab-pane label="用户分析">
        <VUserParse></VUserParse>
      </el-tab-pane>
      <el-tab-pane label="服务号通话详情">
        <VReportInfo></VReportInfo>
      </el-tab-pane>
      <el-tab-pane label="消费统计">
        <VReportInfo></VReportInfo>
      </el-tab-pane>
      <el-tab-pane label="漫游详情">
        <VReportInfo></VReportInfo>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'
import VBaseInfo from './BaseInfo'
import VBillRecord from './BillRecord'
import VFamily from './Family'
import VCallRecord from './CallRecord'
import VRechargeRecord from './RechargeRecord'
import VReportInfo from './ReportInfo'
import VInfoCheck from './InfoCheck'
import VContactInfo from './contactInfo/Index'
import VContactParse from './contactParse/Index'
import VUserParse from './userParse/Index'

export default {
  name: 'VCustomerDetailApply',
  data() {
    return {
      isLoading: false,
      pageNum: 1,
      pageSize: 10,
      totalData: 100
    }
  },
  components: {
    VBaseInfo,
    VBillRecord,
    VFamily,
    VCallRecord,
    VRechargeRecord,
    VReportInfo,
    VInfoCheck,
    VContactInfo,
    VContactParse,
    VUserParse
  },
  methods: {
    doSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.fetchData();
      console.log(`每页 ${pageSize} 条`);
    },
    doCurrentChange(pageNum) {
      this.pageNum = pageNum;
      this.fetchData();
      console.log(`当前页: ${pageNum}`);
    }
  }
}
</script>

<style lang="scss">
@import '../../../../assets/css/vars.scss';

.v_customer_detail_operator_container {
  height: 100%;
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
  .tab_box {
    height: 100%;
    .el-tabs__item {
      font-size: 12px;
      &:nth-child(6) {
        border-bottom: 1px double $ent-color-primary;
      }
    }
  }
  .page_box {
    text-align: right;
    margin: $ent-gap-small;
    font-size: 13px;
    font-weight: lighter;
  }
}
</style>






