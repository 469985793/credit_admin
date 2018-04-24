<template>
  <div class="v_loan_container">
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
      style="width: 100%"
      height="100%"
      @cell-click="goPage">
      <el-table-column
        fixed="left"
        prop="dkId"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        fixed="left"
        label="姓名">
        <template slot-scope="scope">
          <el-badge v-if="scope.row.status === '11101'" is-dot class="item" @click="goPage('/customer/' + scope.row.id + '/detail')">{{scope.row.userName}}</el-badge>
          <span v-else @click="goPage('/customer/' + scope.row.id + '/detail')">{{scope.row.userName}}</span>
        </template>
      </el-table-column>
      <el-table-column
        fixed="left"
        prop="telNum"
        label="手机号">
      </el-table-column>
      <el-table-column
        fixed="left"
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
        label="放款时间">
      </el-table-column>
      <el-table-column
        prop="monthIncome"
        label="应还款时间">
      </el-table-column>
      <el-table-column
        prop="crtTime"
        label="申请时间">
      </el-table-column>
      <el-table-column
        prop="monthIncome"
        label="结清次数">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button @click.stop="isShowDialog = true" type="primary" size="small">查看详情</el-button>
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
    <el-dialog title="已放款" :visible.sync="isShowDialog">
      <el-form :model="dialogFormData" label-position="left" label-width="90px">
        <el-form-item label="姓名">
          <el-input v-model="dialogFormData.name" placeholder="姓名" :readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="dialogFormData.name" placeholder="手机号" :readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="dialogFormData.name" placeholder="身份证号" :readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="dialogFormData.name" placeholder="性别" :readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="申请金额">
          <el-input v-model="dialogFormData.money" placeholder="申请金额" :readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="申请时间">
          <el-input v-model="dialogFormData.name" placeholder="申请时间" :readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="结清次数">
          <el-input v-model="dialogFormData.name" placeholder="结清次数" :readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="审核" class="verify_modal_box">
          <el-tabs tab-position="right">
            <el-tab-pane label="初审">
              <el-input v-model="dialogFormData.name" placeholder="初审人" :readonly="true"></el-input>
              <el-input v-model="dialogFormData.name" placeholder="初审时间" :readonly="true"></el-input>
              <el-input autosize type="textarea" v-model="dialogFormData.name" placeholder="初审备注" :readonly="true"></el-input>
            </el-tab-pane>
            <el-tab-pane label="终审">
              <el-input v-model="dialogFormData.name" placeholder="终审人" :readonly="true"></el-input>
              <el-input v-model="dialogFormData.name" placeholder="审批金额" :readonly="true"></el-input>
              <el-input v-model="dialogFormData.name" placeholder="终审时间" :readonly="true"></el-input>
              <el-input autosize type="textarea" v-model="dialogFormData.name" placeholder="终审备注" :readonly="true"></el-input>
            </el-tab-pane>
            <el-tab-pane label="放款">
              <el-input v-model="dialogFormData.name" placeholder="放款人" :readonly="true"></el-input>
              <el-input v-model="dialogFormData.name" placeholder="放款金额" :readonly="true"></el-input>
              <el-input v-model="dialogFormData.name" placeholder="放款时间" :readonly="true"></el-input>
              <el-input v-model="dialogFormData.name" placeholder="应还款时间" :readonly="true"></el-input>
              <el-input autosize type="textarea" v-model="dialogFormData.name" placeholder="放款备注" :readonly="true"></el-input>
            </el-tab-pane>
          </el-tabs>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowDialog = false">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VLoan',
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
      dataList: [
        {
          dkId: '1',
          userName: '张三',
          telNum: '1222929929',
          currentAddress: '上海市-普通新区-林展路411弄1501',
          monthIncome: '1000元',
          contactQq: '1000元',
          crtTime: '2016-06-6',
          status: '11101',
          reserveOne: '1',
          remark: '这个是个穷小子',
          modiJobno: '罗晓彬'
        },
        {
          dkId: '2',
          userName: '张三2',
          telNum: '1222929929',
          currentAddress: '上海市',
          monthIncome: '1000元',
          contactQq: '1000元',
          crtTime: '2016-06-6',
          status: '11101',
          reserveOne: '1',
          remark: '这个是个穷小子',
          modiJobno: '罗晓彬'
        },
        {
          dkId: '3',
          userName: '张三3',
          telNum: '1222929929',
          currentAddress: '上海市',
          monthIncome: '1000元',
          contactQq: '1000元',
          crtTime: '2016-06-6',
          status: '11102',
          reserveOne: '0',
          remark: '这个是个穷小子',
          modiJobno: '罗晓彬'
        },
        {
          dkId: '4',
          userName: '张三3',
          telNum: '1222929929',
          currentAddress: '上海市',
          monthIncome: '1000元',
          contactQq: '1000元',
          crtTime: '2016-06-6',
          status: '11102',
          reserveOne: '0',
          remark: '这个是个穷小子',
          modiJobno: '罗晓彬'
        },
        {
          dkId: '5',
          userName: '张三3',
          telNum: '1222929929',
          currentAddress: '上海市',
          monthIncome: '1000元',
          contactQq: '1000元',
          crtTime: '2016-06-6',
          status: '11102',
          reserveOne: '0',
          remark: '这个是个穷小子',
          modiJobno: '罗晓彬'
        }
      ],
      isLoading: false,
      pageNum: 1,
      pageSize: 10,
      totalData: 100
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    readStatus() {
      this.doQuery();
    },
    order() {
      this.doQuery();
    }
  },
  methods: {
    fetchData(isSearch = false) {
      // let obj = {
      //   'pageNum': this.pageNum,
      //   'pageSize': this.pageSize,
      //   'order': this.order,
      //   'searchText': this.searchText,
      //   'status': this.revertStatus(this.readStatus)
      // }
      // this.httpService.post(apiConfig.server.formList, obj, (res) => {
      //   if (res.data.code === 0) {
            // if (isSearch) {
            //   this.isLoading = false;
            // }
            // this.totalData = res.data.total;
      //     this.dataList = res.data.data.list;
      //   } else {
      //     this.$message({
      //       message: res.data.msg,
      //       duration: 1000,
      //       type: 'error'
      //     });
      //   }
      // });
    },
    revertStatus(str) {
      if (str === '全部') {
        return ''
      } else if (str === '未读') {
        return '11101'
      } else {
        return '11102'
      }
    },
    goPage(row, column, cell, event) {
      this.$router.push({path: '/customer/' + row.dkId + '/detail'});
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
      margin: $ent-gap-x-small 0;
    }
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
