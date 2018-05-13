<template>
  <div class="v_housingfund_index">
    <el-table
      class="table_box"
      stripe
      :highlight-current-row="true"
      :data="dataList">
      <el-table-column
        type="index"
        label="序号"
        width="auto">
      </el-table-column>
      <el-table-column
        label="任务ID"
        prop="task_id">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click.stop="doShowModal(scope.$index)" type="primary" size="small">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="公积金详情" :visible.sync="isShowDialog">
      <el-tabs class="tab_box" tab-position="right">
        <el-tab-pane label="基本信息">
          <VBaseInfo :data="itemObj.user_info"></VBaseInfo>
        </el-tab-pane>
        <el-tab-pane label="贷款信息">
          <VLoanInfo :dataList="itemObj.loan_info"></VLoanInfo>
        </el-tab-pane>
        <el-tab-pane label="缴存记录">
          <VBillRecord :dataList="itemObj.bill_record"></VBillRecord>
        </el-tab-pane>
        <el-tab-pane label="还款记录">
          <VRepayRecord :dataList="itemObj.loan_repay_record"></VRepayRecord>
        </el-tab-pane>
      </el-tabs>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowDialog = false">关闭</el-button>
      </div>
    </el-dialog>
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
      isShowDialog: false,
      dataList: [],
      itemObj: {}
    }
  },
  components: {
    VBaseInfo, VBillRecord, VLoanInfo, VRepayRecord
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.httpService.get('/api/housingFund', (res) => {
        this.dataList = res.data.data.data;
      });
    },
    doShowModal(index) {
      this.itemObj = this.dataList[index];
      this.isShowDialog = true;
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
  .el-dialog {
    width: 80%;
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
}
</style>
