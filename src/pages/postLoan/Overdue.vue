<template>
  <div class="v_overdue_container">
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
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table
            stripe
            :data="props.row.payList">
            <el-table-column
              type="index"
              label="序号"
              width="100">
            </el-table-column>
            <el-table-column
              label="还款金额"
              prop="payMoney">
            </el-table-column>
            <el-table-column
              label="还款备注"
              prop="repayComment">
            </el-table-column>
            <el-table-column
              label="罚款金额"
              prop="punishMoney">
            </el-table-column>
            <el-table-column
              label="还款时间"
              prop="payDate">
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column
        type="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        label="姓名">
        <template slot-scope="scope">
          <el-tag size="medium" @click.native="goPage('/customer/detail/' + scope.row.cusId)">{{ scope.row.name }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="mobileNum"
        width="110px"
        label="手机号">
      </el-table-column>
      <el-table-column
        prop="identityCard"
        width="160px"
        label="身份证号">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别">
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
        fixed="right"
        prop="remainReturnDate"
        label="再款时间">
      </el-table-column>
      <el-table-column
        fixed="right"
        prop="monthIncome"
        label="逾期天数">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.actionType === 'Y'" type="danger">待催收</el-tag>
          <el-tag v-else type="primary">已催收</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button @click.stop="doShowDialog(scope.$index)" type="primary" size="small">催收</el-button>
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
    <el-dialog title="逾期" :visible.sync="isShowDialog">
      <el-form :model="dialogFormData" label-position="left" label-width="100px">
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
        <el-form-item label="放款金额">
          <el-input v-model="dialogFormData.grantMoney" placeholder="放款金额" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="放款时间">
          <el-input v-model="dialogFormData.grantDate" placeholder="放款时间" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="应还款时间">
          <el-input v-model="dialogFormData.returnDate" placeholder="应还款时间" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="逾期天数">
          <el-input v-model="dialogFormData.dateCount" placeholder="逾期天数" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="罚款金额">
          <el-input v-model="dialogFormData.punishMoney" placeholder="罚款金额"></el-input>
        </el-form-item>
        <el-form-item label="剩余金额">
          <el-input :value="getRemainMoney()" placeholder="剩余金额" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="本次还款金额">
          <el-input v-model="dialogFormData.payMoney" placeholder="本次还款金额"></el-input>
        </el-form-item>
        <el-form-item label="再还款时间">
          <el-date-picker
            :disabled="isDisabledPicker"
            value-format="yyyy-MM-dd"
            v-model="dialogFormData.remainReturnDate"
            type="date"
            placeholder="再还款时间">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="添加备注">
          <el-input autosize type="textarea" v-model="dialogFormData.comment" placeholder="添加备注"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowDialog = false">取消</el-button>
        <el-button type="primary" @click="doSubmit">催收</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOverdue',
  data() {
    return {
      isLoadingTable: true,
      isDisabledBtn: false,
      isShowDialog: false,
      dialogFormData: {},
      selectIndex: 0,
      isDisabledPicker: false,
      searchData: {
        telNum: '',
        name: '',
        date: ''
      },
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
    getRemainMoney() {
      this.dialogFormData.grantMoney = this.dialogFormData.grantMoney ? parseInt(this.dialogFormData.grantMoney) : 0;
      this.dialogFormData.punishMoney = this.dialogFormData.punishMoney ? parseInt(this.dialogFormData.punishMoney) : 0;
      this.dialogFormData.payMoney = this.dialogFormData.payMoney ? parseInt(this.dialogFormData.payMoney) : 0;
      let remainMoney = this.dialogFormData.grantMoney + this.dialogFormData.punishMoney - this.dialogFormData.payMoney;
      if (remainMoney === 0) {
        this.isDisabledPicker = true;
        this.dialogFormData.remainReturnDate = '';
      } else {
        this.isDisabledPicker = false;
      }

      return remainMoney;
    },
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
      this.httpService.post(apiConfig.server.overdueList, obj, (res) => {
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
      this.dialogFormData.payMoney = 0;
      this.selectIndex = index;
    },
    doSubmit() {
      this.isDisabledBtn = true;
      let obj = {
        orderVo: {
          orderId: this.dialogFormData.orderId
        },
        payMoney: this.dialogFormData.payMoney,
        payDate: this.format.getCurrentDate(),
        punishMoney: this.dialogFormData.punishMoney,
        returnDate: this.dialogFormData.remainReturnDate,
        comment: this.dialogFormData.comment
      }
      this.httpService.post(apiConfig.server.doRepay, obj, (res) => {
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

.v_overdue_container {
  height: calc(100% - 50px);
  overflow-y: auto;
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
    .el-tag:hover {
      cursor: pointer;
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
