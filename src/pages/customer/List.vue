<template>
  <div class="v_customer_container">
    <el-form :inline="true">
      <el-form-item>
        <el-input size="small" v-model="searchData.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input size="small" v-model="searchData.telNum" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          size="small"
          v-model="searchData.date"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" @click="doQuery" :loading="isLoading">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="dataList"
      stripe
      :highlight-current-row="true"
      style="width: 100%"
      height="100%">
      <el-table-column
        type="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="mobileNumber"
        label="手机号">
      </el-table-column>
      <el-table-column
        prop="identityCard"
        label="身份证号">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="comUserVo.name"
        label="客户经理">
      </el-table-column>
      <el-table-column
        prop="createDate"
        label="注册时间">
      </el-table-column>
      <el-table-column
        fixed="right"
        width="160"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="goPage(scope.row.cusId, 'detail')" type="primary" size="small">查看详情</el-button>
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
  </div>
</template>

<script>
import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VCustomer',
  data() {
    return {
      searchData: {
        telNum: '',
        name: '',
        date: ''
      },
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
      this.httpService.post(apiConfig.server.waitLoanList, obj, (res) => {
        if (isSearch) {
          this.isLoading = false;
        }
        this.totalData = res.data.requestPage.totalCount;
        this.dataList = res.data.data;
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

.v_customer_container {
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






