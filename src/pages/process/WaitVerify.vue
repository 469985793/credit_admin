<template>
  <div class="v_wait_verify_container">
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
        fixed="left"
        type="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        fixed="left"
        label="姓名">
        <template slot-scope="scope">
          <el-tag size="medium" @click.native="goPage('/customer/detail/' + scope.row.cusId)">{{ scope.row.name}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="mobileNum"
        label="手机号">
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        prop="identityCard"
        label="身份证号">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="salary"
        label="月收入">
      </el-table-column>
      <el-table-column
        prop="applyMoney"
        label="申请金额">
      </el-table-column>
      <el-table-column
        prop="payCount"
        label="结清次数">
      </el-table-column>
      <el-table-column
        prop="applyDate"
        label="申请时间">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click.stop="doShowDialog(scope.$index)" type="primary" size="small">初审审核</el-button>
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
    <el-dialog title="初审确认" :visible.sync="isShowDialog">
      <el-form :model="dialogFormData" label-position="left" label-width="80px">
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
        <el-form-item label="月收入">
          <el-input v-model="dialogFormData.salary" placeholder="月收入"></el-input>
        </el-form-item>
        <el-form-item label="申请金额">
          <el-input v-model="dialogFormData.applyMoney" placeholder="申请金额"></el-input>
        </el-form-item>
        <el-form-item label="申请天数">
          <el-input v-model="dialogFormData.dateCount" placeholder="申请天数"></el-input>
        </el-form-item>
        <el-form-item label="结清次数">
          <el-input v-model="dialogFormData.payCount" placeholder="结清次数" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="添加备注">
          <el-input autosize type="textarea" v-model="dialogFormData.firstComment" placeholder="添加备注"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowDialog = false">取消</el-button>
        <el-button v-if="dialogFormData.salary && 
          dialogFormData.applyMoney && 
          dialogFormData.dateCount && 
          dialogFormData.firstComment && 
          !isDisabledBtn" 
          @click="doSubmit(0)" 
          type="danger">
          拒绝审核
        </el-button>
        <el-button v-else type="danger" disabled>拒绝审核</el-button>
        <el-button v-if="dialogFormData.salary && dialogFormData.applyMoney && dialogFormData.dateCount && !isDisabledBtn" @click="doSubmit(1)" type="primary">通过初审</el-button>
        <el-button v-else type="primary" disabled>通过初审</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VWaitVerify',
  data() {
    return {
      isDisabledBtn: false,
      isShowDialog: false,
      dialogFormData: {},
      searchData: {
        telNum: '',
        name: '',
        date: ''
      },
      selectIndex: 0,
      dataList: [],
      isLoadingTable: true,
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
      this.httpService.post(apiConfig.server.waitVerifyList, obj, (res) => {
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
        salary: this.dialogFormData.salary,
        applyMoney: this.dialogFormData.applyMoney,
        dateCount: this.dialogFormData.dateCount,
        firstFlag: type === 1 ? 'Y' : 'N',
        firstComment: this.dialogFormData.firstComment
      }
      this.httpService.post(apiConfig.server.passFirstVerify, obj, (res) => {
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

.v_wait_verify_container {
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

