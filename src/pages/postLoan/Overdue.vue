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
        <el-button type="primary" size="small" @click="doQuery" :loading="isLoading">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      class="table_box"
      :data="dataList"
      stripe
      :highlight-current-row="true"
      style="width: 100%"
      height="100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table
            stripe
            :data="props.row.itemList">
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
          <el-tag size="medium" @click.native="goPage('/customer/detail/' + scope.row.id + '/baseInfo')">{{ scope.row.userName }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="telNum"
        label="手机号">
      </el-table-column>
      <el-table-column
        prop="telNum"
        label="身份证号">
      </el-table-column>
      <el-table-column
        prop="telNum"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="monthIncome"
        label="放款金额">
      </el-table-column>
      <el-table-column
        prop="crtTime"
        label="放款时间">
      </el-table-column>
      <el-table-column
        prop="crtTime"
        label="应还款时间">
      </el-table-column>
      <el-table-column
        fixed="right"
        prop="monthIncome"
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
          <el-tag v-if="scope.row.status === '11101'" type="danger">待催收</el-tag>
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
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalData">
    </el-pagination>
    <el-dialog title="逾期" :visible.sync="isShowDialog">
      <el-form :model="dialogFormData" label-position="left" label-width="100px">
        <el-form-item label="姓名">
          <el-input v-model="dialogFormData.name" placeholder="姓名" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="dialogFormData.name" placeholder="手机号" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="dialogFormData.name" placeholder="身份证号" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="dialogFormData.name" placeholder="性别" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="放款金额">
          <el-input v-model="dialogFormData.name" placeholder="放款金额" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="放款时间">
          <el-input v-model="dialogFormData.name" placeholder="放款时间" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="应还款时间">
          <el-input v-model="dialogFormData.name" placeholder="应还款时间" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="逾期天数">
          <el-input v-model="dialogFormData.name" placeholder="逾期天数" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="罚款金额">
          <el-input v-model="dialogFormData.name" placeholder="罚款金额"></el-input>
        </el-form-item>
        <el-form-item label="剩余金额">
          <el-input v-model="dialogFormData.name" placeholder="剩余金额" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="本次还款金额">
          <el-input v-model="dialogFormData.name" placeholder="本次还款金额"></el-input>
        </el-form-item>
        <el-form-item label="再还款时间">
          <el-date-picker
            v-model="searchData.date"
            type="date"
            placeholder="再还款时间">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="添加备注">
          <el-input autosize type="textarea" v-model="dialogFormData.name" placeholder="添加备注"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowDialog = false">取消</el-button>
        <el-button type="primary" @click="isShowDialog = false">催收</el-button>
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
      isShowDialog: false,
      dialogFormData: {
        name: '',
        money: ''
      },
      searchData: {
        telNum: '',
        name: '',
        date: ''
      },
      readStatus: '全部',
      order: 'ascend',
      dataList: [],
      isLoading: false,
      pageNum: 1,
      pageSize: 10,
      totalData: 100
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
      this.httpService.post(apiConfig.server.overdueList, obj, (res) => {
        if (isSearch) {
          this.isLoading = false;
        }
        this.totalData = res.data.requestPage.totalCount;
        this.dataList = res.data.data;
      });
    },
    doShowDialog(index) {
      this.isShowDialog = true;
      this.itemList = this.dataList[index];
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
