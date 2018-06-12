<template>
  <div class="v_refuse_container">
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
        :show-overflow-tooltip="true"
        prop="identityCard"
        width="160px"
        label="身份证号">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别">
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
      </el-table-column>n
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click.stop="doShowDialog(scope.$index)" type="primary" size="small">查看详情</el-button>
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
    <el-dialog title="拒绝受理" :visible.sync="isShowDialog">
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
        <el-form-item label="结清次数">
          <el-input v-model="dialogFormData.payCount" placeholder="结清次数" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="申请时间">
          <el-input v-model="dialogFormData.applyDate" placeholder="申请时间" :disabled="true"></el-input>
        </el-form-item>
        <template v-if="dialogFormData.firstFlag === 'N'">
          <el-form-item label="拒绝阶段">
            <el-input placeholder="初审" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="拒绝人">
            <el-input v-if="dialogFormData.firstComUser" v-model="dialogFormData.firstComUser.name" placeholder="拒绝人" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="拒绝时间">
            <el-input v-model="dialogFormData.firstDate" placeholder="拒绝时间" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="拒绝理由">
            <el-input v-model="dialogFormData.firstComment" placeholder="拒绝理由" :disabled="true"></el-input>
          </el-form-item>
        </template>
        <template v-else>
          <el-form-item label="拒绝阶段">
            <el-input placeholder="终审" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="拒绝人">
            <el-input v-if="dialogFormData.finalComUser" v-model="dialogFormData.finalComUser.name" placeholder="拒绝人" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="拒绝时间">
            <el-input v-model="dialogFormData.finalDate" placeholder="拒绝时间" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="拒绝理由">
            <el-input v-model="dialogFormData.finalCommment" placeholder="拒绝理由" :disabled="true"></el-input>
          </el-form-item>
        </template>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowDialog = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VRefuse',
  data() {
    return {
      isLoadingTable: true,
      isShowDialog: false,
      dialogFormData: {},
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
      this.httpService.post(apiConfig.server.refuseList, obj, (res) => {
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

.v_refuse_container {
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
