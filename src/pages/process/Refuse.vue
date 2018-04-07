<template>
  <div class="v_refuse_container">
    <el-form :inline="true">
      <el-form-item>
        <el-input size="small" v-model="searchText" placeholder="姓名/手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="order">
          <el-radio label="ascend">时间升序</el-radio>
          <el-radio label="descend">时间降序</el-radio>
        </el-radio-group>
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
        prop="dkId"
        label="id"
        width="60">
      </el-table-column>
      <el-table-column
        label="姓名"
        width="80">
        <template slot-scope="scope">
          <el-badge v-if="scope.row.status === '11101'" is-dot class="item" @click="goPage('/customer/' + scope.row.id + '/detail')">{{scope.row.userName}}</el-badge>
          <span v-else @click="goPage('/customer/' + scope.row.id + '/detail')">{{scope.row.userName}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="telNum"
        label="手机号"
        width="120">
      </el-table-column>
      <el-table-column
        label="居住地址"
        width="120">
        <template slot-scope="scope">
          <el-tooltip :content="scope.row.currentAddress" placement="top">
            <span>{{scope.row.currentAddress}}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column
        prop="monthIncome"
        label="月收入"
        width="80">
      </el-table-column>
      <el-table-column
        prop="monthIncome"
        label="申请金额"
        width="80">
      </el-table-column>
      <el-table-column
        prop="monthIncome"
        label="芝麻分"
        width="70">
      </el-table-column>
      <el-table-column
        prop="monthIncome"
        label="申请记录"
        width="80">
      </el-table-column>
      <el-table-column
        label="已认证"
        width="180">
        <template slot-scope="scope">
          <div class="verify_item_box">
            <el-tag size="mini" type="success">支付宝</el-tag>
            <el-tag size="mini" type="success">支付宝</el-tag>
            <el-tag size="mini" type="success">支付宝</el-tag>
            <el-tag size="mini" type="success">支付宝</el-tag>
            <el-tag size="mini" type="success">支付宝</el-tag>
            <el-tag size="mini" type="success">支付宝</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="monthIncome"
        label="初审备注"
        width="80">
      </el-table-column>
      <el-table-column
        prop="monthIncome"
        label="终审备注"
        width="80">
      </el-table-column>
      <el-table-column
        prop="crtTime"
        label="申请时间"
        width="80">
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
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VRefuse',
  data() {
    return {
      dialogFormData: {
        name: '',
        money: ''
      },
      searchText: '',
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
