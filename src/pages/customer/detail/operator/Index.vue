<template>
  <div class="v_customer_detail_operator_container">
    <el-tabs class="tab_box" tab-position="right">
      <el-tab-pane label="个人信息">
        <VBaseInfo></VBaseInfo>
      </el-tab-pane>
      <el-tab-pane label="账单记录">
        <VBillRecord></VBillRecord>
      </el-tab-pane>
      <el-tab-pane label="通话记录">
        <VCallRecord></VCallRecord>
      </el-tab-pane>
      <el-tab-pane label="短信记录">
        <VMsgRecord></VMsgRecord>
      </el-tab-pane>
      <el-tab-pane label="充值记录">
        <VRechargeRecord></VRechargeRecord>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'
import VBaseInfo from './BaseInfo'
import VBillRecord from './BillRecord'
import VCallRecord from './CallRecord'
import VMsgRecord from './MsgRecord'
import VRechargeRecord from './RechargeRecord'

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
    VBaseInfo, VBillRecord, VCallRecord, VMsgRecord, VRechargeRecord
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
    .el-tabs__item {
      font-size: 12px;
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






