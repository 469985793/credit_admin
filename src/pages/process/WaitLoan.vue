<template>
  <div class="v_wait_loan_container">
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
      v-loading="isLoadingTable"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      stripe
      :highlight-current-row="true"
      style="width: 100%"
      height="100%">
      <el-table-column
        fixed
        type="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        fixed      
        label="姓名">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column
        fixed
        prop="mobileNum"
        label="手机号">
      </el-table-column>
      <el-table-column
        fixed
        :show-overflow-tooltip="true"
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
        prop="finalDate"
        label="审批通过时间">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button @click.stop="doShowDialog(scope.$index)" type="primary" size="small">同意放款</el-button>
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
    <el-dialog title="放款确认" :visible.sync="isShowDialog">
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
        <el-form-item label="申请天数">
          <el-input v-model="dialogFormData.dateCount" placeholder="申请天数" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="审批金额">
          <el-input v-model="dialogFormData.approveMoney" placeholder="审批金额" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="放款金额">
          <el-input v-model="dialogFormData.approveMoney" placeholder="放款金额" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="放/还款时间">
          <el-date-picker
            v-model="timeData"
            type="daterange"
            align="right"
            unlink-panels
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="放款时间"
            end-placeholder="应还款时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="添加备注">
          <el-input autosize type="textarea" v-model="dialogFormData.comment" placeholder="添加备注"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowDialog = false">取消</el-button>
        <el-button type="primary" v-if="timeData" @click="doSubmit">放款</el-button>
        <el-button type="primary" v-else disabled>放款</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VWaitLoan',
  data() {
    return {
      isLoadingTable: true,
      isDisabledBtn: false,
      isShowDialog: false,
      dialogFormData: {},
      searchData: {
        telNum: '',
        name: '',
        date: ''
      },
      selectIndex: 0,
      timeData: '',
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
      this.httpService.post(apiConfig.server.waitLoanList, obj, (res) => {
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
    doSubmit(type) {
      this.isDisabledBtn = true;
      let obj = {
        orderId: this.dialogFormData.orderId,
        grantMoney: this.dialogFormData.approveMoney,
        grantDate: this.timeData[0],
        returnDate: this.timeData[1],
        comment: this.dialogFormData.comment
      }
      this.httpService.post(apiConfig.server.passLoan, obj, (res) => {
        this.isDisabledBtn = false;
        this.isShowDialog = false;
        this.dataList.splice(this.selectIndex, 1);
      });
    },
    goPage(page) {
      this.$router.push({path: page});
    },
    doQuery() {
      this.isLoading = true;
      this.fetchData(true);
    },
    doSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.fetchData();
    },
    doCurrentChange(pageNum) {
      this.pageNum = pageNum;
      this.fetchData();
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/vars.scss';

.v_wait_loan_container {
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
  .table_box {
    height: calc(100vh - 260px) !important;
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
