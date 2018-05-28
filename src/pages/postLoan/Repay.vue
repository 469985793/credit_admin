<template>
  <div class="v_loan_container">
    <el-form :inline="true">
      <el-form-item>
        <el-input size="small" v-model="searchData.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input size="small" v-model="searchData.telNum" placeholder="手机号" :maxlength="11"></el-input>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          size="small"
          v-model="searchData.date"
          value-format="yyyy-MM-dd"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" icon="el-icon-search" @click="doQuery" :loading="isLoading">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      class="table_box"
      :data="dataList"
      stripe
      v-loading="isLoadingTable"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :highlight-current-row="true"
      style="width: 100%"
      height="100%">
      <el-table-column
        fixed="left"
        type="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        fixed="left"
        label="姓名">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column
        fixed="left"
        prop="mobileNum"
        label="手机号">
      </el-table-column>
      <el-table-column
        fixed="left"
        prop="identityCard"
        label="身份证号">
      </el-table-column>
      <el-table-column
        fixed
        prop="gender"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="applyMoney"
        label="申请金额">
      </el-table-column>
      <el-table-column
        prop="approveMoney"
        label="审批金额">
      </el-table-column>
      <el-table-column
        prop="grantMoney"
        label="放款金额">
      </el-table-column>
      <el-table-column
        prop="grantDate"
        label="放款时间">
      </el-table-column>
      <el-table-column
        prop="returnDate"
        label="应还款时间">
      </el-table-column>
      <el-table-column
        prop="applyMoney"
        label="申请时间">
      </el-table-column>
      <el-table-column
        prop="payCount"
        label="结清次数">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button @click.stop="doShowDialog(scope.$index)" type="primary" size="small">还款确认</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="page_box"
      background
      @size-change="doSizeChange"
      @current-change="doCurrentChange"
      :current-page="1"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalData">
    </el-pagination>
    <el-dialog title="已放款" :visible.sync="isShowDialog">
      <el-form :model="dialogFormData" label-position="left" label-width="90px">
        <el-form-item label="姓名">
          <el-input v-model="dialogFormData.name" placeholder="姓名" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="dialogFormData.mobileNum" placeholder="手机号" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="dialogFormData.identityCard" placeholder="身份证号" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="dialogFormData.gender" placeholder="性别" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="申请金额">
          <el-input v-model="dialogFormData.applyMoney" placeholder="申请金额" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="申请时间">
          <el-input v-model="dialogFormData.applyDate" placeholder="申请时间" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="结清次数">
          <el-input v-model="dialogFormData.payCount" placeholder="结清次数" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="审核" class="verify_modal_box">
          <el-tabs tab-position="right">
            <el-tab-pane label="初审">
              <el-form-item label="初审人">
                <el-input v-if="dialogFormData.firstComUser" v-model="dialogFormData.firstComUser.name" placeholder="初审人" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="初审时间">
                <el-input v-model="dialogFormData.firstDate" placeholder="初审时间" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="初审备注">
                <el-input autosize type="textarea" v-model="dialogFormData.finalCommment" placeholder="初审备注" :disabled="true"></el-input>
              </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="终审">
              <el-form-item label="终审人">
                <el-input v-if="dialogFormData.finalComUser" v-model="dialogFormData.finalComUser.name" placeholder="终审人" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="审批金额">
                <el-input v-model="dialogFormData.grantMoney" placeholder="审批金额" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="终审时间">
                <el-input v-model="dialogFormData.grantDate" placeholder="终审时间" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="终审备注">
                <el-input autosize type="textarea" v-model="dialogFormData.finalCommment" placeholder="终审备注" :disabled="true"></el-input>
              </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="放款">
              <el-form-item label="放款人">
                <el-input v-if="dialogFormData.actionComUser" v-model="dialogFormData.actionComUser.name" placeholder="放款人" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="放款金额">
                <el-input v-model="dialogFormData.grantMoney" placeholder="放款金额" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="放款时间">
                <el-input v-model="dialogFormData.grantDate" placeholder="放款时间" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="应还款时间">
                <el-input v-model="dialogFormData.payDate" placeholder="应还款时间" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="放款备注">
                <el-input autosize type="textarea" v-model="dialogFormData.comment" placeholder="放款备注" :disabled="true"></el-input>
              </el-form-item>
            </el-tab-pane>
          </el-tabs>
        </el-form-item>
        <el-form-item label="还款金额">
          <el-input v-model="dialogFormData.repayMoney" placeholder="还款金额"></el-input>
        </el-form-item>
        <el-form-item class="residue_box" label="剩余金额" v-show="isShowAcquittItem" >
          <el-input v-model="residueMoney" placeholder="剩余金额" :readonly="true"></el-input>
          <el-date-picker
            v-model="dialogFormData.returnDate"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="剩余还款日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="添加备注">
          <el-input autosize type="textarea" v-model="dialogFormData.repayComment" placeholder="添加备注"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowDialog = false">关闭</el-button>
        <el-button v-if="dialogFormData.repayMoney && !isDisabledBtn" @click.stop="doSubmit" type="primary">确认还款</el-button>
        <el-button v-else disabled type="primary">确认还款</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VLoan',
  data() {
    return {
      isLoadingTable: true,
      isDisabledBtn: false,
      isShowDialog: false,
      dialogFormData: {},
      selectIndex: 0,
      searchData: {
        telNum: '',
        name: '',
        date: ''
      },
      isShowAcquittItem: false,
      dataList: [],
      isLoading: false,
      pageNum: 1,
      pageSize: 10,
      totalData: 0
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    'dialogFormData.repayMoney'(repayValue) {
      if (repayValue < this.dialogFormData.grantMoney) {
        this.isShowAcquittItem = true;
      } else {
        this.isShowAcquittItem = false;
      }
    }
  },
  computed: {
    residueMoney() {
      return this.dialogFormData.grantMoney - this.dialogFormData.repayMoney;
    }
  },
  methods: {
    fetchData(isSearch = false) {
      let obj = {
        currentPage: this.pageNum,
        rowCount: this.pageSize,
        requestMap: {
          name: this.searchData.name,
          applyDate: this.searchData.date,
          mobileNum: this.searchData.telNum
        }
      }
      this.httpService.post(apiConfig.server.repayList, obj, (res) => {
        if (isSearch) {
          this.isLoading = false;
        }
        this.isLoadingTable = false;
        this.totalData = res.data.requestPage.totalCount;
        this.dataList = res.data.data;
      });
    },
    doShowDialog(index) {
      this.isShowDialog = true;
      this.dialogFormData = this.dataList[index];
      this.selectIndex = index;
    },
    doSubmit() {
      this.isDisabledBtn = true;
      let obj = {
        orderVo: {
          orderId: this.dialogFormData.orderId
        },
        payMoney: parseInt(this.dialogFormData.repayMoney),
        payDate: this.format.getCurrentDate(),
        returnDate: this.dialogFormData.returnDate,
        repayComment: this.dialogFormData.approveMoney
      }
      this.httpService.post(apiConfig.server.doRepay, obj, (res) => {
        this.isDisabledBtn = false;
        this.isShowDialog = false;
        this.dataList.splice(this.selectIndex, 1);
      });
    },
    doQuery() {
      this.isLoading = true;
      this.fetchData(true);
      console.log('submit!');
    },
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
@import '../../assets/css/vars.scss';

.v_loan_container {
  .highlight {
    color: $ent-color-danger;
  }
  .verify_item_box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    & > span {
      margin-bottom: 2px;
    }
  }
  .verify_modal_box {
    & .el-input {
      margin: $ent-gap-xx-small 0;
    }
  }
  & .residue_box {
    & .el-form-item__label {
      color: $ent-color-danger;
    }
    & .el-input {
      margin: $ent-gap-xx-small 0; 
      & input {
        color: $ent-color-danger;
      }
    }
  }
  .table_box {
    height: calc(100vh - 250px) !important;
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
  @media screen and (max-width: 767px) {
    .edit_btn {
      margin: 2px 0;
    }
    .el-pagination {
      text-align: center;
    }
    .el-pagination__jump,
    .el-pagination__total {
      display: none !important;
    }
    .el-pagination__sizes {
      display: block !important;
      margin-bottom: $ent-gap-x-small;
    }
    .el-pager {
      max-width: calc(100% - 100px);
      overflow: scroll;
    }
  }
}
</style>
