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
          <span>{{scope.row.userName}}</span>
        </template>
      </el-table-column>
      <el-table-column
        fixed
        prop="telNum"
        label="手机号">
      </el-table-column>
      <el-table-column
        fixed
        prop="telNum"
        label="身份证号">
      </el-table-column>
      <el-table-column
        fixed
        prop="telNum"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="monthIncome"
        label="申请金额">
      </el-table-column>
      <el-table-column
        prop="monthIncome"
        label="审批金额">
      </el-table-column>
      <el-table-column
        prop="monthIncome"
        label="放款金额">
      </el-table-column>
      <el-table-column
        prop="monthIncome"
        label="罚款金额">
      </el-table-column>
      <el-table-column
        prop="monthIncome"
        label="结清金额">
      </el-table-column>
      <el-table-column
        prop="monthIncome"
        label="还款次数">
      </el-table-column>
      <el-table-column
        prop="crtTime"
        label="结清操作人">
      </el-table-column>
      <el-table-column
        prop="crtTime"
        label="放款时间">
      </el-table-column>
      <el-table-column
        prop="crtTime"
        label="应还款时间"
        width="90">
      </el-table-column>
      <el-table-column
        prop="crtTime"
        label="结清时间">
      </el-table-column>
      <el-table-column
        prop="crtTime"
        label="申请时间">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button @click.stop="doShowDialog(scope.$index)" type="primary" size="small">查看明细</el-button>
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
    <el-dialog title="结清明细" :visible.sync="isShowDialog">
      <el-table
        class="table_box"
        stripe
        :data="itemList">
        <el-table-column
          type="index"
          label="序号"
          width="100">
        </el-table-column>
        <el-table-column
          label="还款金额"
          prop="item">
        </el-table-column>
        <el-table-column
          label="还款时间"
          prop="total">
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowDialog = false">关闭</el-button>
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
      isShowDialog: false,
      itemList: [],
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
      this.httpService.post(apiConfig.server.acquittList, obj, (res) => {
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
      this.itemList = this.dataList[index];
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
