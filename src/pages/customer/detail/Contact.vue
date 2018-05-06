<template>
  <div class="v_customer_detail_contact">
    <el-table
      class="table_box"
      stripe
      :data="dataList">
      <el-table-column
        label="序号"
        prop="id">
      </el-table-column>
      <el-table-column
        label="姓名"
        prop="userName">
      </el-table-column>
      <el-table-column
        label="手机号"
        prop="telNum">
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
  name: 'VCustomerDetailContact',
  data() {
    return {
      searchText: '',
      readStatus: '全部',
      order: 'ascend',
      dataList: [
        {
          id: '1',
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
          id: '2',
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
          id: '3',
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
    goPage(userId, page) {
      this.$router.push({path: '/' + page + '/' + userId});
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
@import '../../../assets/css/vars.scss';

.v_customer_detail_contact {
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






