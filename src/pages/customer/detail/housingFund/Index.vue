<template>
  <div class="v_housingfund_index">
    <el-tabs class="tab_box" tab-position="right">
      <el-tab-pane label="基本信息">
        <VBaseInfo></VBaseInfo>
      </el-tab-pane>
      <el-tab-pane label="贷款信息">
        <VLoanInfo></VLoanInfo>
      </el-tab-pane>
      <el-tab-pane label="缴存记录">
        <VBillRecord></VBillRecord>
      </el-tab-pane>
      <el-tab-pane label="还款记录">
        <VRepayRecord></VRepayRecord>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'
import VBaseInfo from './BaseInfo'
import VBillRecord from './BillRecord'
import VLoanInfo from './LoanInfo'
import VRepayRecord from './RepayRecord'

export default {
  name: 'VHousingFund',
  data() {
    return {
      isLoading: false,
      pageNum: 1,
      pageSize: 10,
      totalData: 100
    }
  },
  components: {
    VBaseInfo, VBillRecord, VLoanInfo, VRepayRecord
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

.v_housingfund_index {
  height: 100%;
  .el-tabs__content {
    height: 100%;
    overflow-y: auto;
  }
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
